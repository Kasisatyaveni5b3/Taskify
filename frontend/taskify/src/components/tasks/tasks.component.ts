import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { take } from 'rxjs';
import { CommService } from 'src/sharedServices/comm.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cs: CommService,
    private dialog: MatDialog
  ) {}

  close() {
    this.dialog.closeAll();
  }
}
