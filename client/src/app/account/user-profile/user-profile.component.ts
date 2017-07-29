import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { IdentityService } from '../../shared/identity.service'


@Component({
  selector: 'rb-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  private user;

  constructor(
    private identityService: IdentityService
  ) {
  }

  ngOnInit() {
    this.user = this.identityService.getUser();
  }

}
