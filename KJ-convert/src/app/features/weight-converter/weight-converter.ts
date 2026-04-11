import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConvertComp } from '../../template/convert-comp/convert-comp';

@Component({
	selector: 'app-weight-converter',
	standalone: true,
	imports: [ConvertComp],
	template: `
		<app-convert-comp
		label1="kg"
		label2="lbs"
		[convertFn]="convertWeight">
		</app-convert-comp>
	`,
	styleUrl: './weight-converter.css',
})
export class WeightConverter {

	convertWeight(value: number): number {
		return value * 2.20462;
	}
}
