import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamesTableComponent } from './teames-table.component';

describe('TeamesTableComponent', () => {
  let component: TeamesTableComponent;
  let fixture: ComponentFixture<TeamesTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamesTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TeamesTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
