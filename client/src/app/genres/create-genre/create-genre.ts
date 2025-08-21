import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { GenresForm } from '../genres-form/genres-form';
import { GenreCreationDTO } from '../genres.models';

@Component({
  selector: 'app-create-genre',
  imports: [GenresForm],
  templateUrl: './create-genre.html',
  styleUrl: './create-genre.css',
})
export class CreateGenre {
  router = inject(Router);

  saveChanges(genre: GenreCreationDTO) {
    // .. save changes
    console.log(genre);
    this.router.navigate(['/genres']);
  }
}
