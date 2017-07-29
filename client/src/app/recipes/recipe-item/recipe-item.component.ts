import { Component, Input, OnInit, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import { Recipe } from '../Recipe'

@Component({
  selector: 'rb-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(
    private router: Router,
  ) { }

  ngOnInit() {
  }


  readRecipe(recipeId) {
    this.router.navigate(['/recipes/details', recipeId]);

  }

}
