import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { MaterialModule } from '../layouts/material.module'
import { RecipesRoutingModule } from './recipes-routing.module'

import { RecipeService } from '../shared/recipe.service';

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';
import { RecipeListComponent } from './recipe-list/recipe-list.component';
import { RecipeItemComponent } from './recipe-item/recipe-item.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        RecipesRoutingModule,
    ],
    providers: [RecipeService],
    declarations: [
        RecipesComponent,
        RecipeDetailsComponent,
        CreateRecipeComponent,
        RecipeListComponent,
        RecipeItemComponent
    ],
    exports: [
        RecipeListComponent,
        RecipeItemComponent
    ]
})

export class RecipesModule { }