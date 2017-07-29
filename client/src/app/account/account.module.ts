import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IdentityService } from '../shared/identity.service'

import { MaterialModule } from '../layouts/material.module'
import { AccountRoutingModule } from './account-routing.module'
import { RecipesModule } from '../recipes/recipes.module'

import { UserProfileComponent } from './user-profile/user-profile.component';
import { UserRecipesComponent } from './user-recipes/user-recipes.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        AccountRoutingModule,
        RecipesModule
    ],
    providers: [
        IdentityService
    ],
    declarations: [
        UserProfileComponent,
        UserRecipesComponent
    ],
    exports: [
    ]
})

export class AccountModule { }