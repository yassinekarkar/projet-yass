/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Add_productComponent } from './add_product.component';

describe('Add_productComponent', () => {
  let component: Add_productComponent;
  let fixture: ComponentFixture<Add_productComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Add_productComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Add_productComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
