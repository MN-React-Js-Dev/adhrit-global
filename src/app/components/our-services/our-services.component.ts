import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-services',
  templateUrl: './our-services.component.html',
  styleUrls: ['./our-services.component.css']
})
export class OurServicesComponent {
constructor(private viewportScroller: ViewportScroller) { }
  onclickScroll = (elementId: string): void => {
    this.viewportScroller.scrollToAnchor("services")
  }
}
