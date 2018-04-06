import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { RecipeService } from './recipe-book/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Injectable()
export class ManageService {
    constructor( private http: Http,
                 private recipeService: RecipeService,
                 private shoppingListService: ShoppingListService ) {}

    saveData() {
        const data = {
            recipes: this.recipeService.getRecipes(),
            ingredients: this.shoppingListService.getIngredients()
        };

        return this.http.put( 'https://lby-lets-cook.firebaseio.com/data.json', data )
            .map( ( response: Response ) => {
                return response.json();
            } );
    }

    fetchData() {
        return this.http.get( 'https://lby-lets-cook.firebaseio.com/data.json' )
            .map( ( response: Response ) => {
                return response.json();
            } );
    }
}
