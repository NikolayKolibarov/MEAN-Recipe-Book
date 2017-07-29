import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

import { RecipeService } from '../../shared/recipe.service';
import { MessageService } from '../../shared/message.service';

import { Recipe } from '../Recipe'

@Component({
  selector: 'rb-create-recipe',
  templateUrl: './create-recipe.component.html',
  styleUrls: ['./create-recipe.component.css']
})

export class CreateRecipeComponent implements OnInit {
  constructor(
    private recipeService: RecipeService,
    private router: Router,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {

  }

  create(name, description) {
    this.recipeService
      .create({ name, description })
      .subscribe(response => {
        console.log(response.json());
        this.router.navigate(['/user/recipes']);

        this.messageService.setSuccessMessage('Created Recipe successfully.');
        this.messageService.showSuccessMessage();
      })
  }

}
