import { Component } from '@angular/core';
import {ServiceType, TusachService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tusach';
  mode  = "grpc";  

  constructor(
    private tusachService: TusachService) {
    console.log("AppComponent - mode: " + this.mode);
    if (this.mode == "rest") {
      tusachService.setServiceType(ServiceType.REST);
    } else {
      tusachService.setServiceType(ServiceType.GRPC);
    }
  }

}
