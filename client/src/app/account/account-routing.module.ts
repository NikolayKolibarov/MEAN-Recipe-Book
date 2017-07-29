import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRecipesComponent } from './user-recipes/user-recipes.component';

const routes: Routes = [
    { path: 'user/profile', component: UserProfileComponent },
    { path: 'user/recipes', component: UserRecipesComponent },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AccountRoutingModule { }