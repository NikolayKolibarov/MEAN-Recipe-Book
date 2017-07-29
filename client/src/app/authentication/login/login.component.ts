import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../shared/authentication.service'
import { IdentityService } from '../../shared/identity.service'
import { MessageService } from '../../shared/message.service'

@Component({
  selector: 'rb-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private identityService: IdentityService,
    private messageService: MessageService,
  ) {
  }

  ngOnInit() {

  }

  login(email, password) {
    this.authenticationService
      .login({ email, password })
      .subscribe(response => {
        this.identityService.setUser(response.json().user)
        this.identityService.setAuthorizationToken(response.json().token)
        this.identityService.pushAuthenticated.emit(this.identityService.isAuthenticated());
        this.identityService.pushUser.emit(this.identityService.getUser());
        
        this.router.navigate(['/']);

        this.messageService.setSuccessMessage('Logged in successfully.');        
        this.messageService.showSuccessMessage();        
      },
      error => {
        console.log(error);
        this.messageService.setErrorMessage('Wrong username or password.')
        this.messageService.showErrorMessage();
      })
  }

}
