import { Component, ElementRef, ViewChild, AfterViewInit, ViewChildrenDecorator, NgZone } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-practise',
  templateUrl: './practise.component.html',
  styleUrls: ['./practise.component.scss']
})
export class PractiseComponent {

  object = ['car', 'bike', 'auto', 'lorry'];

  @ViewChild('container') containerRef!: ElementRef;

  constructor(private zone:NgZone) {}

  content() {
    const example = document.createElement("div");
    example.textContent = "hello world";
    const headings = document.createElement("h1");
    headings.textContent = "this is h1 tag"
    example.appendChild(headings);
    this.containerRef.nativeElement.appendChild(example);
  }
    items:any = []

  addButton() {
    this.zone.run(() => {
      this.items.push(`items ${this.items.length + 1} `)
    })
  }



  searchfield:any
  onSearch(event:any) {
    const inputData = event.target.value.toLowerCase();

    this.searchfield= this.object.filter(res => 
      res.toLocaleLowerCase().includes(inputData)
    )
  console.log( this.searchfield)
  }

  addItem() {
    this.items.push(`Item ${this.items.length + 1}`);
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
}
