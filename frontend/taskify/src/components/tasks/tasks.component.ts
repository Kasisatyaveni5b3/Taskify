import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss']
})
export class TasksComponent {
  isSmallScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    // Observe breakpoint changes
    this.breakpointObserver.observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe(result => {
        this.isSmallScreen = result.matches;
      });
  }
}
