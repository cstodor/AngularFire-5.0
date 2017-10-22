import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RealtimeDbComponent } from './realtime-db.component';

describe('RealtimeDbComponent', () => {
  let component: RealtimeDbComponent;
  let fixture: ComponentFixture<RealtimeDbComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RealtimeDbComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RealtimeDbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
