import { Component, Input, numberAttribute } from '@angular/core';
@Component({
  selector: 'app-edit-genre',
  imports: [],
  templateUrl: './edit-genre.html',
  styleUrl: './edit-genre.css',
})
export class EditGenre {
  @Input({ transform: numberAttribute })
  id!: number;
}
