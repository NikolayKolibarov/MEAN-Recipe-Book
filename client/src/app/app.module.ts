import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';

import { RequesterService } from './shared/requester.service'
import { MessageService } from './shared/message.service'

import { AuthGuard } from './shared/auth.guard'

import { LayoutModule } from './layouts/layout.module';
import { AuthenticationModule } from './authentication/authentication.module';
import { AccountModule } from './account/account.module';
import { RecipesModule } from './recipes/recipes.module';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    FormsModule,
    LayoutModule,
    AuthenticationModule,
    AccountModule,
    RecipesModule,
  ],
  providers: [
    RequesterService,
    MessageService,
    AuthGuard,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
