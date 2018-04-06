import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from './shopping-list.service';

@Component({
    selector: 'app-shopping-list',
    templateUrl: './shopping-list.component.html',
    styleUrls: [ './shopping-list.component.css' ]
})
export class ShoppingListComponent implements OnInit, OnDestroy {

    editIndex: number;
    ingredients: Ingredient[];
    ingAddSubscription: Subscription;
    editDoneSubscription: Subscription;

    constructor( private shoppingListService: ShoppingListService ) {}

    ngOnInit() {
        this.ingredients = this.shoppingListService.getIngredients();
        // subscribe ingredient added event, get new ingredient array
        this.ingAddSubscription = this.shoppingListService.ingredientChanged.subscribe( ( newArray: Ingredient[] ) => {
            // get ingredients again
            this.ingredients = newArray;
        } );

        this.editDoneSubscription = this.shoppingListService.ingredientEditDone.subscribe( () => {
            this.editIndex = null;
        } );
    }

    ngOnDestroy() {
        this.ingAddSubscription.unsubscribe();
        this.editDoneSubscription.unsubscribe();
    }

    onEdit( idx: number ) {
        this.editIndex = idx;

        // emit edit event
        this.shoppingListService.ingredientEdit.next( idx );
    }

    onDelete( idx: number ) {
        this.shoppingListService.deleteIngredient( idx );
    }
}
