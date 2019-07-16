import { Component, ElementRef } from '@angular/core';
import {ServiceType, TusachService } from './services';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Tusach';

  constructor(
    private tusachService: TusachService,
    private elementRef : ElementRef) {
    
    let mode = this.elementRef.nativeElement.getAttribute("mode");
    console.log("AppComponent - mode: " + mode);
    if (mode == "rest") {
      tusachService.setServiceType(ServiceType.REST);
    } else {
      tusachService.setServiceType(ServiceType.GRPC);
    }
  }

}
