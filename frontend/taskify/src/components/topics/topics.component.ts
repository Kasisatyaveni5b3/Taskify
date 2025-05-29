import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-topics',
  templateUrl: './topics.component.html',
  styleUrls: ['./topics.component.scss']
})
export class TopicsComponent {
@Input() layout: 'horizontal' | 'vertical' = 'vertical';
@Input() rounded: boolean = true;

ngOnInit() {
  console.log('Layout:', this.layout);
}


  topics = [
  { icon: 'fab fa-js text-yellow-500', label: 'JavaScript' },
  { icon: 'fab fa-angular text-red-500', label: 'Angular' },
  { icon: 'fab fa-react text-blue-500', label: 'React.js' },
  { icon: 'fab fa-node-js text-green-600', label: 'Node.js' },
  { icon: 'fas fa-server text-blue-400', label: 'Express.js' },
  { icon: 'fas fa-database text-green-700', label: 'MongoDB' },
  { icon: 'fas fa-database text-blue-500', label: 'PostgreSQL' },
  { icon: 'fab fa-java text-orange-600', label: 'Java' },
  { icon: 'fas fa-vial text-green-500', label: 'Selenium' },
  { icon: 'fas fa-paper-plane text-orange-500', label: 'Postman' },
  { icon: 'fas fa-fire text-red-600', label: 'JMeter' }
];
}
