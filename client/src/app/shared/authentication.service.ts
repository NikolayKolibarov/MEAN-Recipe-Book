import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RequesterService } from '../shared/requester.service'

@Injectable()
export class AuthenticationService {
    private baseUrl = 'http://localhost:1312';
    private apiVersion = 1;
    private usersUrl = `${this.baseUrl}/api/v${this.apiVersion}/users`;  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });

    constructor(
        private http: Http,
        private requester: RequesterService
    ) { }

    register(user) {
        return this.requester.post(this.usersUrl + '/register', user, false);
    }

    login(user) {
        return this.requester.post(this.usersUrl + '/login', user, false);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}