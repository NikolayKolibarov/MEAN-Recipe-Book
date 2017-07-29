import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { RequesterService } from '../shared/requester.service'

import { Recipe } from '../recipes/Recipe';

@Injectable()
export class RecipeService {
    private baseUrl = 'http://localhost:1312';
    private apiVersion = 1;
    private recipesUrl = `${this.baseUrl}/api/v${this.apiVersion}/recipes`;  // URL to web api
    private headers = new Headers({ 'Content-Type': 'application/json' });


    constructor(
        private http: Http,
        private requester: RequesterService
    ) { }

    getRecipes(): Promise<Recipe[]> {
        return this.http.get(this.recipesUrl)
            .toPromise()
            .then(response => {
                return response.json().recipes as Recipe[]
            })
            .catch(this.handleError);
    }

    getRecipe(id: string): Promise<any> {
        const url = `${this.recipesUrl}/${id}`;
        return this.http.get(url)
            .toPromise()
            .then(response => {
                return response.json().recipe
            })
            .catch(this.handleError);
    }

    getUserRecipes(userId: string) {
        return this.requester.get(`${this.recipesUrl}/user/${userId}`, false);
    }

    create(recipe) {
        return this.requester.post(this.recipesUrl, recipe, true);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }
}