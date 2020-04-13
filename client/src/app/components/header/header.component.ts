import { Component, OnInit } from '@angular/core';
import { TusachService } from '../../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  constructor(private tusachService: TusachService,
    private router: Router) {

  }
    
  ngOnInit() {
  }

  account() {
    let logonUser = this.tusachService.getLogonUser()
    if (logonUser != null) {
      // display profile 
      this.router.navigate(['account']);
    } else {
      this.tusachService.login("google");
    }
  }
}
