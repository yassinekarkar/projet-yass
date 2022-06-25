import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAfficheComponent } from './details-affiche.component';

describe('DetailsAfficheComponent', () => {
  let component: DetailsAfficheComponent;
  let fixture: ComponentFixture<DetailsAfficheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsAfficheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAfficheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
