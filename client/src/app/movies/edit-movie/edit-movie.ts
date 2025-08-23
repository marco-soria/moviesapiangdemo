import {
  Component,
  inject,
  Input,
  numberAttribute,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { Loading } from '../../shared/components/loading/loading';
import { MultipleSelectorDTO } from '../../shared/components/multiple-selector/MultipleSelectorDTO';
import { extractErrors } from '../../shared/functions/extractErrors';
import { MoviesForm } from '../movies-form/movies-form';
import { MovieCreationDTO, MovieDTO } from '../movies.models';
import { MoviesService } from '../movies.service';
import { ActorAutoCompleteDTO } from './../../actors/actors.models';

@Component({
  selector: 'app-edit-movie',
  imports: [MoviesForm, Loading],
  templateUrl: './edit-movie.html',
  styleUrl: './edit-movie.css',
})
export class EditMovie implements OnInit {
  @Input({ transform: numberAttribute })
  id!: number;
  model?: MovieDTO;
  nonSelectedGenres: MultipleSelectorDTO[] = [];
  selectedGenres: MultipleSelectorDTO[] = [];
  nonSelectedTheaters: MultipleSelectorDTO[] = [];
  selectedTheaters: MultipleSelectorDTO[] = [];
  selectedActors: ActorAutoCompleteDTO[] = [];
  errors: string[] = [];

  moviesService = inject(MoviesService);
  router = inject(Router);

  ngOnInit(): void {
    this.moviesService.putGet(this.id).subscribe((response) => {
      this.model = response.movie;

      this.selectedGenres = response.selectedGenres.map((genre) => {
        return <MultipleSelectorDTO>{ key: genre.id, description: genre.name };
      });

      this.nonSelectedGenres = response.nonSelectedGenres.map((genre) => {
        return <MultipleSelectorDTO>{ key: genre.id, description: genre.name };
      });

      this.selectedTheaters = response.selectedTheaters.map((theater) => {
        return <MultipleSelectorDTO>{
          key: theater.id,
          description: theater.name,
        };
      });

      this.nonSelectedTheaters = response.nonSelectedTheaters.map((theater) => {
        return <MultipleSelectorDTO>{
          key: theater.id,
          description: theater.name,
        };
      });

      this.selectedActors = response.actors;
    });
  }

  saveChanges(movie: MovieCreationDTO) {
    this.moviesService.update(this.id, movie).subscribe({
      next: () => {
        this.router.navigate(['/']);
      },
      error: (err) => {
        const errors = extractErrors(err);
        this.errors = errors;
      },
    });
  }
}
