import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { RecipeRoutingModule } from './recipe-routing.module';

import { RecipeItemComponent } from './recipe-list/recipe-item/recipe-item.component';
import { NotSelectedMsgComponent } from './not-selected-msg/not-selected-msg.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeBookComponent } from './recipe-book.component';

@NgModule({
    declarations: [
        RecipeBookComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        NotSelectedMsgComponent,
        RecipeEditComponent
    ],
    imports: [
        SharedModule,
        ReactiveFormsModule,
        RecipeRoutingModule
    ],
    exports: [],
    providers: [
    ]
})
export class RecipeModule {

}
