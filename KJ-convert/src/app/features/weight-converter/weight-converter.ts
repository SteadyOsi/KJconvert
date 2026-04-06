import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ConvertComp } from '../../template/convert-comp/convert-comp';

@Component({
  selector: 'app-weight-converter',
  imports: [ConvertComp],
  templateUrl: './weight-converter.html',
  styleUrl: './weight-converter.css',
})
export class WeightConverter {}
