import { Component, input, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { DecimalPipe } from '@angular/common';

@Component({
	selector: 'app-convert-comp',
	standalone: true,
	imports: [FormsModule, DecimalPipe],
	templateUrl: './convert-comp.html',
	styleUrl: './convert-comp.css',
})
export class ConvertComp {
	@Input() label1 = ''; // e.g. "Energy" or "Weight"
	@Input() label2 = '';

	@Input() forwardFn!: (value: number) => number;
	@Input() reverseFn!: (value: number) => number;

	isSwapped = false;
  	inputValue = 0;
	result = 0;


	convert() {
		if (this.isSwapped) {
			this.result = this.reverseFn(this.inputValue);
		} else {
			this.result = this.forwardFn(this.inputValue);
		}
	}

    swap() {
		this.isSwapped = !this.isSwapped;

		// swap labels
		[this.label1, this.label2] = [this.label2, this.label1];

		// reset values
		this.inputValue = 0;
		this.result = 0;
    }
}
