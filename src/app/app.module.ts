import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// routes module
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { RecipeBookComponent } from './recipe-book/recipe-book.component';
import { RecipeListComponent } from './recipe-book/recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-book/recipe-list/recipe-item/recipe-item.component';
import { RecipeDetailComponent } from './recipe-book/recipe-detail/recipe-detail.component';
import { RecipeEditComponent } from './recipe-book/recipe-edit/recipe-edit.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingItemComponent } from './shopping-list/shopping-item/shopping-item.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
import { NotSelectedMsgComponent } from './recipe-book/not-selected-msg/not-selected-msg.component';
import { DropdownDirective } from './shared/dropdown.directive';

// used in both shopping list and recipe book
import { ShoppingListService } from './shopping-list/shopping-list.service';
import { RecipeService } from './recipe-book/recipe.service';
import { DataService } from './data.service';
import { SigninComponent } from './auth/signin/signin.component';
import { SignupComponent } from './auth/signup/signup.component';
import { AuthService } from './auth/auth.service';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        RecipeBookComponent,
        RecipeListComponent,
        RecipeItemComponent,
        RecipeDetailComponent,
        ShoppingListComponent,
        ShoppingItemComponent,
        ShoppingEditComponent,
        DropdownDirective,
        NotSelectedMsgComponent,
        RecipeEditComponent,
        SigninComponent,
        SignupComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        HttpModule,
        ReactiveFormsModule
    ],
    providers: [
        ShoppingListService,
        RecipeService,
        DataService,
        AuthService
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
