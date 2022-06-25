import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopAddComponent } from './pop-add.component';

describe('PopAddComponent', () => {
  let component: PopAddComponent;
  let fixture: ComponentFixture<PopAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
