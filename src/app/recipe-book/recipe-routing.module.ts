import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotSelectedMsgComponent } from './not-selected-msg/not-selected-msg.component';
import { AuthGuard } from '../auth/authGuard.service';
import { RecipeDetailComponent } from './recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-edit/recipe-edit.component';
import { RecipeBookComponent } from './recipe-book.component';

const recipeRoutes: Routes = [
    { path: '', component: RecipeBookComponent, children: [
            { path: '', component: NotSelectedMsgComponent, pathMatch: 'full' },
            { path: 'create', component: RecipeEditComponent, canActivate: [ AuthGuard ] },
            { path: ':index', component: RecipeDetailComponent },
            { path: ':index/edit', component: RecipeEditComponent, canActivate: [ AuthGuard ] }
        ] },
];

@NgModule({
    imports: [
        RouterModule.forChild( recipeRoutes )
    ],
    exports: [ RouterModule ]
})
export class RecipeRoutingModule {

}
