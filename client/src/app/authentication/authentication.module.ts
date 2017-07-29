import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { AuthenticationService } from '../shared/authentication.service'
import { IdentityService } from '../shared/identity.service'

import { MaterialModule } from '../layouts/material.module'
import { AuthenticationRoutingModule } from './authentication-routing.module'

import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        MaterialModule,
        AuthenticationRoutingModule,
    ],
    providers: [
        AuthenticationService,
        IdentityService,
    ],
    declarations: [
        LoginComponent,
        RegisterComponent
    ],
    exports: []
})

export class AuthenticationModule { }