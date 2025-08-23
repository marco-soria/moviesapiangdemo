import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-display-errors',
  imports: [],
  templateUrl: './display-errors.html',
  styleUrl: './display-errors.css',
})
export class DisplayErrors {
  @Input({ required: true })
  errors!: string[];
}
