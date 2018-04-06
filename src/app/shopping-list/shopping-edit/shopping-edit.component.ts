import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs/Subscription';
import { Ingredient } from '../../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list.service';

@Component({
    selector: 'app-shopping-edit',
    templateUrl: './shopping-edit.component.html',
    styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {

    @ViewChild( 'f' ) form: NgForm;
    editSubscription: Subscription;
    editMode = false;
    editIndex: number;
    editIngredient: Ingredient;

    constructor( private shoppingListService: ShoppingListService) { }

    ngOnInit() {
        // bind edit event
        this.editSubscription = this.shoppingListService.ingredientEdit.subscribe( ( idx: number ) => {
            this.editMode = true;
            this.editIndex = idx;
            this.editIngredient = this.shoppingListService.getIngredient( idx );

            this.form.setValue( {
                name: this.editIngredient.name,
                amount: this.editIngredient.amount,
                unit: this.editIngredient.unit
            } );
        } );
    }

    ngOnDestroy() {
        this.editSubscription.unsubscribe();
    }

    formSubmit( f: NgForm ) {

        if ( this.editMode ) {
            // edit ingredient
            this.shoppingListService.updateIngredient( this.editIndex, new Ingredient( f.value.name, f.value.amount, f.value.unit ) );
            } else {
            // add ingredient
            this.shoppingListService.addIngredient( new Ingredient( f.value.name, f.value.amount, f.value.unit ) );
        }

        this.resetForm();
    }

    onCancel() {
        this.resetForm();
    }

    private resetForm() {
        this.form.reset();
        this.editMode = false;
        this.shoppingListService.ingredientEditDone.next();
    }
}
