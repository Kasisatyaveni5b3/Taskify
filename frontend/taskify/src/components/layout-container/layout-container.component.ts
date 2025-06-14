import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { TasksComponent } from '../tasks/tasks.component';

@Component({
  selector: 'app-layout-container',
  templateUrl: './layout-container.component.html',
  styleUrls: ['./layout-container.component.scss'],
})
export class LayoutContainerComponent {
  clicked: boolean = false;

  @ViewChild('container') containerref!: ElementRef;
  constructor(private dialog: MatDialog) {}

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
    this.dialog.open(TasksComponent, {
      width: '20%',
      height: '100%',
      maxHeight: '100%',
      maxWidth: '100%',
      position: {
        right: '0px',
      },
    });
  }
}
