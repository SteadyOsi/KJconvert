import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightConverter } from './weight-converter';

describe('WeightConverter', () => {
  let component: WeightConverter;
  let fixture: ComponentFixture<WeightConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WeightConverter],
    }).compileComponents();

    fixture = TestBed.createComponent(WeightConverter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
