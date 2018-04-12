import { Injectable } from '@angular/core';
import * as firebase from 'firebase';
import { Router } from '@angular/router';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AuthService {

    constructor( private router: Router ) { }

    token: string;
    signedIn = new Subject;

    signupUser( email: string, password: string ) {

        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( ( response ) => { console.log( response ); } )
            .catch( ( error ) => { console.log( error ); } );
    }

    signinUser( email: string, password: string ) {

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ( response ) => {

                // get token
                firebase.auth().currentUser.getToken().then( (tk) => {
                    this.token = tk;

                    // redirect to root page
                    this.router.navigate( ['/'] );

                    // signed in event
                    this.signedIn.next();
                } );
            } )
            .catch( ( error ) => { console.log( error ); } );
    }

    logout() {
        firebase.auth().signOut();
        this.token = null;
    }

    getToken() {
        if ( firebase.auth().currentUser ) {
            firebase.auth().currentUser.getToken().then( tk => this.token = tk );
        }

        return this.token;
    }

    isAuthenticated() {
        return this.token != null;
    }
}
