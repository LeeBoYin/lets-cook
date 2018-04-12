import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { AuthService } from '../../auth/auth.service';

@Component({
    selector: 'app-recipe-detail',
    templateUrl: './recipe-detail.component.html',
    styleUrls: ['./recipe-detail.component.css']
})
export class RecipeDetailComponent implements OnInit {

    index: number;
    recipe: Recipe;

    constructor( private recipeService: RecipeService,
                 private shoppingListService: ShoppingListService,
                 private router: Router,
                 private activatedRoute: ActivatedRoute,
                 private authService: AuthService) {}

    ngOnInit() {

        // get recipe index from route params
        this.activatedRoute.params.subscribe( ( params: Params ) => {
            this.index = +params['index'];
            this.recipe = this.recipeService.getRecipe( this.index );
        } );
    }

    addToShoppingList() {
        this.shoppingListService.addIngredients( this.recipe.ingredients );
    }

    onDelete() {
        if ( !this.authService.isAuthenticated() ) {
            return;
        }

        this.recipeService.deleteRecipe( this.index );

        // redirect to recipe-book
        this.router.navigate( [ 'recipe-book' ] );
    }

}
