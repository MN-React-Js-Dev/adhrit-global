import { ViewportScroller } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  status: boolean = false;
  isDisable: boolean = false;
  ActiveStatus: boolean = false;

  toggleHeader(): void {
    this.status = !this.status;
  }

  constructor(
    private router: Router,
  ) { }

  forceNavigate(name: string) {
    // this.ActiveStatus = !this.ActiveStatus;
    this.router.navigate(['/'], { fragment: name });
  }
  clickme() {
    this.router.navigateByUrl('/our-process');

  }
  
   

}
