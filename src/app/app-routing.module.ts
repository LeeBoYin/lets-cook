/***
 out-sourcing app routing from AppModule to AppRoutingModule
 */


import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

// import components
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './core/home/home.component';
import { AuthGuard } from './auth/authGuard.service';

const appRoutes: Routes = [
    { path: '', component: HomeComponent, pathMatch: 'full' },
    // lazy load recipe
    { path: 'recipe-book', loadChildren: './recipe-book/recipe.module#RecipeModule' },
    { path: 'shopping-list', component: ShoppingListComponent, canActivate: [ AuthGuard ] },
    { path: 'signup', component: SignupComponent },
    { path: 'signin', component: SigninComponent }
];

@NgModule({
    imports: [
        RouterModule.forRoot( appRoutes, {
            preloadingStrategy: PreloadAllModules
        } )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

}
