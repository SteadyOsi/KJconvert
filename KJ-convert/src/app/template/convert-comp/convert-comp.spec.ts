import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvertComp } from './convert-comp';

describe('ConvertComp', () => {
  let component: ConvertComp;
  let fixture: ComponentFixture<ConvertComp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConvertComp],
    }).compileComponents();

    fixture = TestBed.createComponent(ConvertComp);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
