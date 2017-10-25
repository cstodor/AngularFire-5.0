import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularUniversalComponent } from './angular-universal.component';

describe('AngularUniversalComponent', () => {
  let component: AngularUniversalComponent;
  let fixture: ComponentFixture<AngularUniversalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularUniversalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularUniversalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
