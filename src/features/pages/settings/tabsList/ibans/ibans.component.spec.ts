import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IbansComponent } from './ibans.component';

describe('IbansComponent', () => {
  let component: IbansComponent;
  let fixture: ComponentFixture<IbansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IbansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IbansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
