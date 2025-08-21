import { Component } from '@angular/core';
import { ActorAutoCompleteDTO } from '../../actors/actors.models';
import { MultipleSelectorDTO } from '../../shared/components/multiple-selector/MultipleSelectorDTO';
import { MoviesForm } from '../movies-form/movies-form';
import { MovieCreationDTO } from '../movies.models';

@Component({
  selector: 'app-create-movie',
  imports: [MoviesForm],
  templateUrl: './create-movie.html',
  styleUrl: './create-movie.css',
})
export class CreateMovie {
  nonSelectedGenres: MultipleSelectorDTO[] = [
    { key: 1, description: 'Drama' },
    { key: 2, description: 'Action' },
    { key: 3, description: 'Comedy' },
  ];

  selectedGenres: MultipleSelectorDTO[] = [];

  nonSelectedTheaters: MultipleSelectorDTO[] = [
    { key: 1, description: 'Acropolis' },
    { key: 2, description: 'Agora Mall' },
  ];

  selectedTheaters: MultipleSelectorDTO[] = [];

  selectedActors: ActorAutoCompleteDTO[] = [];

  saveChanges(movie: MovieCreationDTO) {
    console.log('Creating the movie', movie);
  }
}
