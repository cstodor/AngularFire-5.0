import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QueryingListsComponent } from './querying-lists.component';

describe('QueryingListsComponent', () => {
  let component: QueryingListsComponent;
  let fixture: ComponentFixture<QueryingListsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QueryingListsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QueryingListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
