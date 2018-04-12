import { Component } from '@angular/core';
import { DataService } from '../../data.service';
import { AuthService } from '../../auth/auth.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {

    constructor( private dataService: DataService,
                 private authService: AuthService,
                 private router: Router ) {
    }

    onSaveData() {
        // do save
        this.dataService.saveData();
    }

    onFetchData() {
        // fetch data
        this.dataService.fetchData();
    }

    onLogout() {
        this.authService.logout();

        // redirect to to root page
        this.router.navigate( [ '/' ] );
    }

    isAuthenticated() {
        return this.authService.isAuthenticated();
    }


}
