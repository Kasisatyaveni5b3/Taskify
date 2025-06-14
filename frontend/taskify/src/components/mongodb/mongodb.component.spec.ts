import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MongodbComponent } from './mongodb.component';

describe('MongodbComponent', () => {
  let component: MongodbComponent;
  let fixture: ComponentFixture<MongodbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MongodbComponent]
    });
    fixture = TestBed.createComponent(MongodbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
