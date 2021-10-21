import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgrxLandComponent } from './ngrx-land.component';

describe('NgrxLandComponent', () => {
  let component: NgrxLandComponent;
  let fixture: ComponentFixture<NgrxLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgrxLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgrxLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
