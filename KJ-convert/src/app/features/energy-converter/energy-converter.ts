import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConvertComp } from '../../template/convert-comp/convert-comp';

@Component({
	selector: 'app-energy-converter',
	standalone: true,
	imports: [ConvertComp],
	template: `
		<app-convert-comp
		label1="kj"
		label2="kcal"
		[forwardFn]="kjToKcal"
		[reverseFn]="kcalToKj">
		</app-convert-comp>
	`,
	styleUrl: './energy-converter.css',
})
export class EnergyConverter {
	kjToKcal(value: number): number {
		return value * 0.2390057;
	}

	kcalToKj(value: number): number {
		return value / 0.2390057;
	}
}
