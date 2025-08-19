import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-edit-theater',
  imports: [],
  templateUrl: './edit-theater.html',
  styleUrl: './edit-theater.css',
})
export class EditTheater {
  @Input({ transform: numberAttribute })
  id!: number;
}
