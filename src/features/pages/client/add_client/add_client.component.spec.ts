/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Add_clientComponent } from './add_client.component';

describe('Add_clientComponent', () => {
  let component: Add_clientComponent;
  let fixture: ComponentFixture<Add_clientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add_clientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add_clientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
