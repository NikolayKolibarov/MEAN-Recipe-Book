import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IdentityService } from '../../shared/identity.service'
import { MessageService } from '../../shared/message.service'

@Component({
  selector: 'master-layout',
  templateUrl: './master-layout.component.html',
  styleUrls: ['./master-layout.component.css']
})
export class MasterLayoutComponent {
  private isAuthenticated: boolean;
  private user;

  constructor(
    private router: Router,
    private identityService: IdentityService,
    private messageService: MessageService
  ) {
    this.isAuthenticated = this.identityService.isAuthenticated();
    this.user = this.identityService.getUser();
  }

  ngOnInit() {
    this.identityService.pushAuthenticated
      .subscribe(authenticated => {
        this.isAuthenticated = authenticated
      })

    this.identityService.pushUser
      .subscribe(user => {
        this.user = user
      })


  }

  logout() {
    sessionStorage.removeItem('token');
    sessionStorage.removeItem('currentUser');
    
    this.identityService.pushAuthenticated.emit(false);
    this.identityService.pushUser.emit(null);

    this.messageService.setSuccessMessage('Logged out successfully.');
    this.messageService.showSuccessMessage();

    this.router.navigate(['/login']);
  }


}
