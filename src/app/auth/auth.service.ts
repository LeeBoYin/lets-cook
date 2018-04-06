import { Injectable } from '@angular/core';
import * as firebase from 'firebase';

@Injectable()
export class AuthService {

    constructor() { }

    signupUser( email: string, password: string ) {
        console.log( 'call signupUser' );
        firebase.auth().createUserWithEmailAndPassword( email, password )
            .then( ( ret ) => { console.log( ret ); } )
            .catch( ( ret ) => { console.log( ret ); } );
    }

    signinUser( email: string, password: string ) {
        firebase.auth().signInWithEmailAndPassword( email, password )
            .then(
                ( response ) => { console.log( response ); }
            )
            .catch(
                ( error ) => { console.log( error ); }
            );
    }
}
