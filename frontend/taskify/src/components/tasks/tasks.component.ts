import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component } from '@angular/core';
import { take } from 'rxjs';
import { CommService } from 'src/sharedServices/comm.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent {
  isSmallScreen = false;
  task:any
  tasks:any
  status:any
  taskName:any
  selectedTaskName: any
  filteredTasks: any;
  searchText: any;

  constructor(
    private breakpointObserver: BreakpointObserver,
    private cs: CommService
  ) {}

  ngOnInit(): void {
    // Observe breakpoint changes
    this.breakpointObserver
      .observe([Breakpoints.XSmall, Breakpoints.Small])
      .subscribe((result) => {
        this.isSmallScreen = result.matches;
      });
    this.cs.createTask().pipe(take(1)).subscribe({
      next: (data) => {
        this.task = data
       console.log(this.task)
      }
    })
    this.cs.countStatus().pipe(take(1)).subscribe({
      next: (data) => {
       this.status=data
       console.log(data)
      }
    })
    this.cs.getTaskName().pipe(take(1)).subscribe({
      next: (data) => {
        this.taskName= data
       console.log(data)
      }
    })
  }

  onTaskNameChange(event: Event) {
    const selectElement = event.target as HTMLSelectElement;
    const selectedTaskName = selectElement.value;
    this.applyFilters(selectedTaskName, this.searchText);
  }
  

  
  onSearchTextChange(event: Event) {
    const inputElement = event.target as HTMLInputElement;
    const searchText = inputElement.value;
    this.applyFilters(this.selectedTaskName, searchText);
  }
  
  applyFilters(taskName: string, searchText: string) {
    // Call API to get filtered tasks
    this.cs.filterTasks(taskName, searchText).subscribe({
      next: (filteredTasks) => {
        this.filteredTasks = filteredTasks;  // Update filtered tasks
        console.log(filteredTasks);
      },
      error: (err) => console.error(err),
    });
  }
  
  
}
