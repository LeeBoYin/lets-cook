import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '../recipe.model';
import { RecipeService } from '../recipe.service';

@Component({
    selector: 'app-recipe-list',
    templateUrl: './recipe-list.component.html',
    styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit, OnDestroy {

    recipes: Recipe[];
    recipesChangeSubscription: Subscription;

    constructor( private recipeService: RecipeService,
                 private router: Router,
                 private activatedRoute: ActivatedRoute ) {}

    ngOnInit() {
        // get recipes from recipe service
        this.recipes = this.recipeService.getRecipes();

        // subscribe recipes change
        this.recipesChangeSubscription = this.recipeService.recipesChanged.subscribe( ( newRecipes ) => {
            this.recipes = newRecipes;
        } );
    }

    onNewClicked() {
        // route to recipe-book/create programmatically
        this.router.navigate( [ 'create' ], { relativeTo: this.activatedRoute } );
    }

    ngOnDestroy() {
        // unsubscribe
        this.recipesChangeSubscription.unsubscribe();
    }
}
