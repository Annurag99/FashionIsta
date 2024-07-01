import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EachcardsComponent } from './eachcards.component';

describe('EachcardsComponent', () => {
  let component: EachcardsComponent;
  let fixture: ComponentFixture<EachcardsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EachcardsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EachcardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
