import { Subject } from 'rxjs/Subject';
import { Recipe } from './recipe.model';

export class RecipeService {
    private recipes: Recipe[] = [
        // new Recipe(
        //     'In excepteur',
        //     'In sint duis ut non exercitation aliquip nostrud nisi irure incididunt tempor aute sunt.',
        //     'https://www.prevention.com/sites/prevention.com/files/styles/listicle_slide_custom_user_phone_1x/public/static/comp-842708-immunefoods600x450.JPG',
        //     [
        //         new Ingredient( 'Soy Sauce', 1, 'cup' ),
        //         new Ingredient( 'Onion', 2, 'piece' ),
        //         new Ingredient( 'Garlic', 2, 'plants' )
        //     ]
        // ),
        // new Recipe(
        //     'Lorem ipsum',
        //     'Tempor minim incididunt ut dolore ad ut ex aute sint ut eu enim non adipisicing.',
        //     'http://img.timesnownews.com/story/1515676440-foodhealth.jpg?d=400x300',
        //     [
        //         new Ingredient( 'Nuts', 1, 'bag' ),
        //         new Ingredient( 'Lemon', 2, 'slices' ),
        //         new Ingredient( 'Rice', 1, 'cup' )
        //     ]
        // ),
        // new Recipe(
        //     'Commodo sint',
        //     'In in minim ut esse consectetur officia deserunt nisi elit proident.',
        //     'https://recipes.timesofindia.com/thumb/msid-50543149,width-400,resizemode-4/50543149.jpg',
        //     [
        //         new Ingredient( 'Beef', 1, 'piece' ),
        //         new Ingredient( 'Tomato', 2, '' ),
        //         new Ingredient( 'Vegtable', 1, 'bag' )
        //     ]
        // )
    ];

    recipesChanged = new Subject<Recipe[]>();

    setRecipes( recipes: Recipe[] ) {
        this.recipes = recipes;
        this.recipesChanged.next( this.getRecipes() );
    }

    getRecipe( id: number ) {
        return this.recipes[ id ];
    }

    getRecipes() {
        // return a clone of recipes, not reference
        return this.recipes.slice();
    }

    addRecipe( newRecipe: Recipe ) {
        this.recipes.push( newRecipe );
        this.recipesChanged.next( this.getRecipes() );
    }

    updateRecipe( idx: number, updatedRecipe ) {
        this.recipes[idx] = updatedRecipe;
        this.recipesChanged.next( this.getRecipes() );
    }

    deleteRecipe( idx: number ) {
        this.recipes.splice( idx, 1 );
        this.recipesChanged.next( this.getRecipes() );
    }
}
