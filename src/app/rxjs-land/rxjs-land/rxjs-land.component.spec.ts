import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RxjsLandComponent } from './rxjs-land.component';

describe('RxjsLandComponent', () => {
  let component: RxjsLandComponent;
  let fixture: ComponentFixture<RxjsLandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RxjsLandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RxjsLandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
