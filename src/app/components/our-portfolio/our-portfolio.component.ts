import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-portfolio',
  templateUrl: './our-portfolio.component.html',
  styleUrls: ['./our-portfolio.component.css']
})
export class OurPortfolioComponent {
  constructor(private viewportScroller: ViewportScroller) { }
  onclickScroll = (elementId: string): void => {
    this.viewportScroller.scrollToAnchor("portfolio")
  }
}
