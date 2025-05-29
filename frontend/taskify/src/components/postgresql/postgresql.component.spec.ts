import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostgresqlComponent } from './postgresql.component';

describe('PostgresqlComponent', () => {
  let component: PostgresqlComponent;
  let fixture: ComponentFixture<PostgresqlComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PostgresqlComponent]
    });
    fixture = TestBed.createComponent(PostgresqlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
