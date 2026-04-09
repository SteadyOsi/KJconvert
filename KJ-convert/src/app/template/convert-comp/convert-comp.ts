import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-convert-comp',
  standalone: true,
  imports: [],
  templateUrl: './convert-comp.html',
  styleUrl: './convert-comp.css',
})
export class ConvertComp {
  @Input() label1 = ''; // e.g. "Energy" or "Weight"
  @Input() label2 = '';
  @Input() convertFn!: (value: number) => number;

  inputValue = 0;
  result = 0;

  convert() {
    if(this.convertFn) {
      this.result = this.convertFn(this.inputValue);
    }
  }

  swap() {
    
  }
}
