import { Component, OnInit } from '@angular/core';

import { RecipeService } from '../../shared/recipe.service';

import { Recipe } from '../Recipe'

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {
  private recipes: Recipe[];

  constructor(
    private recipeService: RecipeService,
  ) {
  }

  ngOnInit() {
    this.recipeService
      .getRecipes()
      .then(recipes => {
        this.recipes = recipes
      })
  }

}
