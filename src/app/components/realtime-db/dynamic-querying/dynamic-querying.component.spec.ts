import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicQueryingComponent } from './dynamic-querying.component';

describe('DynamicQueryingComponent', () => {
  let component: DynamicQueryingComponent;
  let fixture: ComponentFixture<DynamicQueryingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DynamicQueryingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DynamicQueryingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
