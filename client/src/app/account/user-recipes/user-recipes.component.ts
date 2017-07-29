import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IdentityService } from '../../shared/identity.service'
import { RecipeService } from '../../shared/recipe.service'

@Component({
  selector: 'rb-user-recipes',
  templateUrl: './user-recipes.component.html',
  styleUrls: ['./user-recipes.component.css']
})
export class UserRecipesComponent implements OnInit {
  private recipes;

  constructor(
    private identityService: IdentityService,
    private recipeService: RecipeService
  ) {
  }

  ngOnInit() {
    this.recipeService
      .getUserRecipes(this.identityService.getUser()._id)
      .subscribe(response => {
        console.log(response.json().recipes)
        this.recipes = response.json().recipes;
      },
      error => {
        console.log(error);
      });
  }

}
