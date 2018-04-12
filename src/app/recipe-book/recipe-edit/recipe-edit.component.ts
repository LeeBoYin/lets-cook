import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

import { Recipe } from '../recipe.model';

import { RecipeService } from '../recipe.service';
import { Ingredient } from '../../shared/ingredient.model';

@Component({
    selector: 'app-recipe-edit',
    templateUrl: './recipe-edit.component.html',
    styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {

    editForm: FormGroup;
    index: number;
    isEdit = false;

    constructor( private activatedRoute: ActivatedRoute,
                 private recipeService: RecipeService,
                 private router: Router) { }

    ngOnInit() {
        // subscribe route param change ( recipe index )
        this.activatedRoute.params.subscribe( ( params: Params ) => {
            this.index = +params['index'];
            this.isEdit = Number.isInteger( this.index );

            this.initForm();
        } );
    }

    private initForm() {
        // default values
        let recipeName = '';
        let recipeDescription = '';
        let recipeImgPath = '';
        const recipeIngredients = new FormArray([]);


        // overwrite with existing recipe values
        if ( this.isEdit ) {
            // get recipe
            const recipe = this.recipeService.getRecipe( this.index );

            recipeName = recipe.name;
            recipeDescription = recipe.description;
            recipeImgPath = recipe.imgPath;
            if ( recipe.ingredients ) {
                for ( const ingredient of recipe.ingredients ) {
                    recipeIngredients.push( new FormGroup( {
                        name: new FormControl( ingredient.name, [ Validators.required ] ),
                        amount: new FormControl( ingredient.amount, [ Validators.required ] ),
                        unit: new FormControl( ingredient.unit, [ Validators.required ] )
                    } ) );
                }
            }
        }

        // init editForm (Reactive)
        this.editForm = new FormGroup({
            name: new FormControl( recipeName, [ Validators.required ], [] ),
            description: new FormControl( recipeDescription, [ Validators.required ], [] ),
            imgPath: new FormControl( recipeImgPath, [ Validators.required ], [] ),
            ingredients: recipeIngredients
        });

    }

    // form submit
    formSubmit() {
        // // get ingredients
        // const ingredients = [];
        // for ( const ingredientGrp of (<FormArray>this.editForm.get( 'ingredients' )).controls ) {
        //     ingredients.push( new Ingredient(
        //         ingredientGrp.value['name'],
        //         ingredientGrp.value['amount'],
        //         ingredientGrp.value['unit']
        //     ) );
        // }
        //
        // // create new Recipe
        // const newRecipe = new Recipe(
        //     this.editForm.value['name'],
        //     this.editForm.value['description'],
        //     this.editForm.value['imgPath'],
        //     ingredients
        // );

        // update or add
        // pass this.editForm.value directly as Recipe object, since they shares exactly same pairs of key-value
        if ( this.isEdit ) {
            this.recipeService.updateRecipe( this.index, this.editForm.value );
        } else {
            this.recipeService.addRecipe( this.editForm.value );
            this.index = this.recipeService.getRecipes().length - 1;
        }

        // redirect to recipe
        this.router.navigate( [ 'recipe-book', this.index ] );
    }

    // add ingredient
    onAddIngredient() {
        (<FormArray>this.editForm.controls['ingredients']).push( new FormGroup( {
            name: new FormControl( null, [ Validators.required ] ),
            amount: new FormControl( null, [ Validators.required ] ),
            unit: new FormControl( null, [ Validators.required ] )
        } ) );
    }

    // remove ingredient
    onRemoveIngredient( idx: number ) {
        // remove ingredient FormGroup from ingredients FormArray
        (<FormArray>this.editForm.controls['ingredients']).removeAt( idx );
    }

    // cancel form
    onCancel() {
        // navigate to parent route
        this.router.navigate( ['../'], { relativeTo: this.activatedRoute } );
    }

    getControls() {
        return (<FormArray>this.editForm.get('ingredients')).controls;
    }

}
