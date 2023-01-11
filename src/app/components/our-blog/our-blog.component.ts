import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-our-blog',
  templateUrl: './our-blog.component.html',
  styleUrls: ['./our-blog.component.css']
})
export class OurBlogComponent {
  constructor(private viewportScroller: ViewportScroller) { }
  onclickScroll = (elementId: string): void => {
    this.viewportScroller.scrollToAnchor("blog")
  }
}
