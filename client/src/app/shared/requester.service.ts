import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Injectable()
export class RequesterService {

    constructor(private http: Http) { }

    get(url, useSession) {
        const headers = this.configureRequestHeaders(false, useSession)
        return this.http.get(url, {
            headers: headers
        });
    }

    post(url, data, useSession) {
        const headers = this.configureRequestHeaders(true, useSession)

        return this.http.post(url, data, {
            headers: headers
        });
    }

    private configureRequestHeaders(isJSON, useSession): Headers {
        let headers = new Headers();

        if (isJSON) {
            headers.append('Content-Type', 'application/json')
        }

        if (useSession) {
            const token = sessionStorage.getItem('token');

            headers.append('Authorization', `JWT ${token}`);

        }

        return headers;


    }
}