import { Injectable, EventEmitter } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

@Injectable()
export class IdentityService {
    private user;
    pushAuthenticated = new EventEmitter<boolean>();
    pushUser = new EventEmitter<Object>();

    constructor(
    ) {
        const currentUser = JSON.parse(sessionStorage.getItem('currentUser'));
        this.user = currentUser;
        console.log(currentUser)
    }

    getUser() {
        return this.user;
    }

    setUser(user) {
        this.user = user;
        sessionStorage.setItem('currentUser', JSON.stringify(user));
    }

    isAuthenticated() {
        return !!this.user;
    }

    setAuthorizationToken(token) {
        sessionStorage.setItem('token', token);
    }

}