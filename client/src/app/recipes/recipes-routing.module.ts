import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from '../shared/auth.guard'

import { RecipesComponent } from './recipes/recipes.component';
import { RecipeDetailsComponent } from './recipe-details/recipe-details.component';
import { CreateRecipeComponent } from './create-recipe/create-recipe.component';

const routes: Routes = [
    { path: 'recipes', component: RecipesComponent },
    { path: 'recipes/details/:id', component: RecipeDetailsComponent },
    { path: 'recipes/create', component: CreateRecipeComponent, canActivate: [AuthGuard] },

];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule { }