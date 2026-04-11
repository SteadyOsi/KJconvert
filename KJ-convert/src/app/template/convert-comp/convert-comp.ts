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
	@Input() convertFn!: (value: number) => number;

  	inputValue = 0;
	result = 0;

	option1 = 0;
	option2 = 0;
	selected = this.option1;

	convert() {
		if(this.convertFn) {
		this.result = this.convertFn(this.inputValue);
		}
	}

    swap() {
		const temp = this.label1;
		this.label1 = this.label2;
		this.label2 = temp;

		this.inputValue = 0;
		this.result = 0;

		// invert conversion? 
    }
}
