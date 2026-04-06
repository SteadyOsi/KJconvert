import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnergyConverter } from './energy-converter';

describe('EnergyConverter', () => {
  let component: EnergyConverter;
  let fixture: ComponentFixture<EnergyConverter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnergyConverter],
    }).compileComponents();

    fixture = TestBed.createComponent(EnergyConverter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
