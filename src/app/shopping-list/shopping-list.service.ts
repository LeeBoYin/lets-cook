import { Subject } from 'rxjs/Subject';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
    private ingredients: Ingredient[] = [
        // new Ingredient( 'Credim', 1, 'bag' ),
        // new Ingredient( 'Lith', 4, 'cup' ),
        // new Ingredient( 'Lorem', 3, 'bottle' ),
        // new Ingredient( 'Runk', 2, 'piece' ),
        // new Ingredient( 'Sed', 10, 'gram' )
    ];

    // subjects
    ingredientChanged = new Subject<Ingredient[]>();
    ingredientEdit = new Subject<number>();
    ingredientEditDone = new Subject();

    // ingredient setter
    setIngredients( ingredients: Ingredient[] ) {
        this.ingredients = ingredients;
        this.ingredientChanged.next( this.getIngredients() );
    }

    // ingredient getter
    getIngredient( index: number ) {
        return this.ingredients.slice()[index];
    }

    // ingredients getter
    getIngredients() {
        return this.ingredients.slice();
    }

    addIngredient( newIngredient: Ingredient ) {
        this.ingredients.push( newIngredient );

        // emit changed event, with new array as argument
        this.ingredientChanged.next( this.getIngredients() );
    }

    addIngredients( newIngredients: Ingredient[] ) {
        // ES6 feature: use ... to turn an array [1,2,3] into list 1,2,3
        this.ingredients.push( ...newIngredients );

        // emit changed event, with new array as argument
        this.ingredientChanged.next( this.getIngredients() );
    }

    updateIngredient( idx: number, updatedIngredient: Ingredient ) {
        this.ingredients[idx] = updatedIngredient;

        // emit changed event, with new array as argument
        this.ingredientChanged.next( this.getIngredients() );
    }

    deleteIngredient( idx: number ) {
        this.ingredients.splice( idx, 1 );

        // emit changed event, with new array as argument
        this.ingredientChanged.next( this.getIngredients() );
    }

}
