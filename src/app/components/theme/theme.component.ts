import { Component } from '@angular/core';

@Component({
  selector: 'app-theme',
  templateUrl: './theme.component.html',
  styleUrls: ['./theme.component.css']
})

export class ThemeComponent {
  status: boolean = false;
  toggleDarkTheme(): void {
    this.status = !this.status;       
    document.body.classList.toggle('dark-theme');
  }
}
