import { Component, Input, numberAttribute } from '@angular/core';
import { GenresForm } from '../genres-form/genres-form';
import { GenreCreationDTO, GenreDTO } from '../genres.models';
@Component({
  selector: 'app-edit-genre',
  imports: [GenresForm],
  templateUrl: './edit-genre.html',
  styleUrl: './edit-genre.css',
})
export class EditGenre {
  @Input({ transform: numberAttribute })
  id!: number;

  model: GenreDTO = { id: 1, name: 'Action' };

  saveChanges(genre: GenreCreationDTO) {
    console.log('editing the genre', genre);
  }
}
