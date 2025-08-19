import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-edit-movie',
  imports: [],
  templateUrl: './edit-movie.html',
  styleUrl: './edit-movie.css',
})
export class EditMovie {
  @Input({ transform: numberAttribute })
  id!: number;
}
