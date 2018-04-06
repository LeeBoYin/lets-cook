/***
 out-sourcing app routing from AppModule to AppRoutingModule
 */


import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// import components
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { NotSelectedMsgComponent } from './recipe-book/not-selected-msg/not-selected-msg.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';

const appRoutes: Routes = [
    { path: '', redirectTo: '/recipe-book', pathMatch: 'full' },
    { path: 'recipe-book', component: RecipeBookComponent, children: [
            { path: '', component: NotSelectedMsgComponent, pathMatch: 'full' },
            { path: 'create', component: RecipeEditComponent },
            { path: ':index', component: RecipeDetailComponent },
            { path: ':index/edit', component: RecipeEditComponent }
        ] },
    { path: 'shopping-list', component: ShoppingListComponent },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
