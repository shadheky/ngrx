import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReduxTesterComponent } from './redux-tester.component';

describe('ReduxTesterComponent', () => {
  let component: ReduxTesterComponent;
  let fixture: ComponentFixture<ReduxTesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReduxTesterComponent]
    });
    fixture = TestBed.createComponent(ReduxTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
