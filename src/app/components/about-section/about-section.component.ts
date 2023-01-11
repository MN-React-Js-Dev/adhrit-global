import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-about-section',
  templateUrl: './about-section.component.html',
  styleUrls: ['./about-section.component.css']
})
export class AboutSectionComponent {
  constructor(private viewportScroller: ViewportScroller) { }
  onclickScroll = (elementId: string): void => {
    this.viewportScroller.scrollToAnchor("about")
  }
}
