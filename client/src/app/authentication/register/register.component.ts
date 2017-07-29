import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService } from '../../shared/authentication.service'
import { IdentityService } from '../../shared/identity.service'
import { MessageService } from '../../shared/message.service'

@Component({
  selector: 'rb-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private identityService: IdentityService,
    private messageService: MessageService
  ) {
  }

  ngOnInit() {

  }

  register(username, email, password, confirmPassword) {
    this.authenticationService
      .register({ username, email, password, confirmPassword })
      .subscribe(response => {
        this.identityService.setUser(response.json().user)
        this.identityService.setAuthorizationToken(response.json().token)
        this.identityService.pushAuthenticated.emit(this.identityService.isAuthenticated());
        this.identityService.pushUser.emit(this.identityService.getUser());

        this.router.navigate(['/']);

        this.messageService.setSuccessMessage('Registered successfully.');
        this.messageService.showSuccessMessage();
      },
      error => {
        console.log(error.json());
        this.messageService.setErrorMessage(error.json().errors.join('\n'));
        this.messageService.showErrorMessage(5000);
      })
  }

}
