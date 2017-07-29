import { Component, Input, OnInit } from '@angular/core';

import { Recipe } from '../Recipe'


@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Input() recipes: Recipe[];

  constructor() {
  }

  ngOnInit() {
  }

}
