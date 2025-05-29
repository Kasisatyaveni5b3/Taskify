import { Component } from '@angular/core';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
})
export class LayoutContainerComponent {
  clicked: boolean = false;

  ngOnInit() {
    const theme = localStorage.getItem('theme');
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    }
  }

  theming(event: any) {
    const isDark = document.documentElement.classList.toggle('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
    console.log('switched to ' + (isDark ? 'dark' : 'light'));
  }

  opened(event: any) {
    debugger;
    if (event.type === 'click') {
      this.clicked = !this.clicked;
      console.log('Toggled:', this.clicked ? 'Opened' : 'Closed');
    }
  }
}
