import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { Location } from '@angular/common';
import 'rxjs/add/operator/switchMap';

import { RecipeService } from '../../shared/recipe.service';

import { Recipe } from '../Recipe'

@Component({
  selector: 'rb-recipe-details',
  templateUrl: './recipe-details.component.html',
  styleUrls: ['./recipe-details.component.css']
})
export class RecipeDetailsComponent implements OnInit {

  @Input() recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,
    private location: Location,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.route.paramMap
      .switchMap((params: ParamMap) => this.recipeService.getRecipe(params.get('id')))
      .subscribe(recipe => {
        this.recipe = recipe;
      });
  }

  back() {
    this.location.back();
  }

}
