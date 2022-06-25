import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynammicFormComponent } from './dynammic-form.component';

describe('DynammicFormComponent', () => {
  let component: DynammicFormComponent;
  let fixture: ComponentFixture<DynammicFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DynammicFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DynammicFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
