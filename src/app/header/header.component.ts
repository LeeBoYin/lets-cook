import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrls: [ './header.component.css' ]
})
export class HeaderComponent {

    constructor( private dataService: DataService ) {
    }

    onSaveData() {
        // do save
        this.dataService.saveData();
    }

    onFetchData() {
        // fetch data
        this.dataService.fetchData();
    }


}
