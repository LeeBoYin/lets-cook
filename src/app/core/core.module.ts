import { NgModule } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { AuthService } from '../auth/auth.service';
import { DataService } from '../data.service';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { RecipeService } from '../recipe-book/recipe.service';
import { AuthGuard } from '../auth/authGuard.service';

@NgModule({
    declarations: [
        HeaderComponent,
        HomeComponent
    ],
    imports: [
        SharedModule,
        AppRoutingModule
    ],
    exports: [
        HeaderComponent
    ],
    // following services will be merged into root injection when app in initialized
    providers: [
        ShoppingListService,
        RecipeService,
        AuthService,
        DataService,
        AuthGuard
    ]
})
export class CoreModule {}
