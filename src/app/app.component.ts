import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { DataService } from './data.service';
import * as firebase from 'firebase';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    encapsulation: ViewEncapsulation.None
})
export class AppComponent implements  OnInit {

    constructor( private dataService: DataService ) {

    }

    ngOnInit() {
        // initialize firebase
        firebase.initializeApp({
            apiKey: 'AIzaSyBc1wrAqhdQJ49kuQBWjEc51WzmpuUd444',
            authDomain: 'lby-lets-cook.firebaseapp.com',
            databaseURL: 'https://lby-lets-cook.firebaseio.com',
            projectId: 'lby-lets-cook',
            storageBucket: 'lby-lets-cook.appspot.com',
            messagingSenderId: '605942186235'
        });
        this.dataService.fetchData();
    }
}
