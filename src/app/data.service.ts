import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { RecipeService } from './recipe-book/recipe.service';
import { ShoppingListService } from './shopping-list/shopping-list.service';

@Injectable()
export class DataService {
    constructor( private http: Http,
                 private recipeService: RecipeService,
                 private shoppingListService: ShoppingListService ) {}

    saveData() {
        const data = {
            recipes: this.recipeService.getRecipes(),
            ingredients: this.shoppingListService.getIngredients()
        };

        this.http.put( 'https://lby-lets-cook.firebaseio.com/data.json', data )
            .map( ( response: Response ) => {
                return response.json();
            } )
            .subscribe(
                ( response ) => {
                    console.log( response );
                },
                ( error ) => {
                    console.log( error );
                }
            );
    }

    fetchData() {
        return this.http.get( 'https://lby-lets-cook.firebaseio.com/data.json' )
            .map( ( response: Response ) => {
                return response.json();
            } )
            .subscribe(
                ( data ) => {

                    // avoid empty data
                    data = data ? data : {};

                    // set data
                    this.recipeService.setRecipes( data['recipes'] || [] );
                    this.shoppingListService.setIngredients( data['ingredients'] || [] );
                }
            );
    }
}
