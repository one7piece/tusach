import { Component, OnInit } from '@angular/core';
import { TusachService, UserProfile } from 'src/app/services';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  private profile : UserProfile;
  constructor(private tusachService: TusachService) {     
    this.profile = tusachService.getLogonUser();
  }

  ngOnInit() {
  }

  getUserName() : string {
    if (this.profile != null) {
      return this.profile.user;
    }
    return "";
  }

  getEmailAddress() : string {
    if (this.profile != null) {
      return this.profile.emailAddress;
    }
    return "";
  }

  getRole() : string {
    if (this.profile != null) {
      return this.profile.role;
    }
    return "";
  }
}
