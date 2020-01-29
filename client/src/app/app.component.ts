import { Component, ElementRef } from '@angular/core';
import {ServiceType, TusachService } from './services';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tusach';

  constructor(
    private route: ActivatedRoute,
    private tusachService: TusachService,
    private elementRef : ElementRef) {
    
    console.log("AppComponent - route: ###### " + route + " ######");
    let mode = this.elementRef.nativeElement.getAttribute("serviceMode");
    console.log("AppComponent - mode: ###### " + mode + " ######");
    if (mode == "rest") {
      //tusachService.setServiceType(ServiceType.REST);
    } else {
      //tusachService.setServiceType(ServiceType.GRPC);
    }
  }

}
