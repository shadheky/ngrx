import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RouterTesterComponent } from './router-tester.component';

describe('RouterTesterComponent', () => {
  let component: RouterTesterComponent;
  let fixture: ComponentFixture<RouterTesterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RouterTesterComponent]
    });
    fixture = TestBed.createComponent(RouterTesterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
