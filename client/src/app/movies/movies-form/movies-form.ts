import {
  Component,
  EventEmitter,
  inject,
  Input,
  OnInit,
  Output,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterLink } from '@angular/router';
import moment from 'moment';
import { ActorsAutocomplete } from '../../actors/actors-autocomplete/actors-autocomplete';
import { ActorAutoCompleteDTO } from '../../actors/actors.models';
import { InputImg } from '../../shared/components/input-img/input-img';
import { MultipleSelector } from '../../shared/components/multiple-selector/multiple-selector';
import { MultipleSelectorDTO } from '../../shared/components/multiple-selector/MultipleSelectorDTO';
import { MovieCreationDTO, MovieDTO } from '../movies.models';

@Component({
  selector: 'app-movies-form',
  imports: [
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    RouterLink,
    MatDatepickerModule,
    InputImg,
    MultipleSelector,
    ActorsAutocomplete,
  ],
  templateUrl: './movies-form.html',
  styleUrl: './movies-form.css',
})
export class MoviesForm implements OnInit {
  @Input()
  model?: MovieDTO;

  @Output()
  postForm = new EventEmitter<MovieCreationDTO>();

  @Input({ required: true })
  selectedGenres!: MultipleSelectorDTO[];

  @Input({ required: true })
  nonSelectedGenres!: MultipleSelectorDTO[];

  @Input({ required: true })
  selectedTheaters!: MultipleSelectorDTO[];

  @Input({ required: true })
  nonSelectedTheaters!: MultipleSelectorDTO[];

  @Input({ required: true })
  selectedActors!: ActorAutoCompleteDTO[];

  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    title: ['', { validators: [Validators.required] }],
    releaseDate: new FormControl<Date | null>(null),
    trailer: '',
    poster: new FormControl<File | string | null>(null),
  });

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  handleFileSelection(file: File) {
    this.form.controls.poster.setValue(file);
  }

  getErrorMessagesForTitle(): string {
    const field = this.form.controls.title;

    if (field.hasError('required')) {
      return 'The title field is required';
    }

    return '';
  }

  saveChanges() {
    const movie = this.form.value as MovieCreationDTO;

    if (movie.releaseDate) {
      movie.releaseDate = moment(movie.releaseDate).toDate();
    }

    if (typeof movie.poster === 'string') {
      movie.poster = undefined;
    }

    const genresIds = this.selectedGenres.map((val) => val.key);
    movie.genresIds = genresIds;

    const theatersIds = this.selectedTheaters.map((val) => val.key);
    movie.theatersIds = theatersIds;

    movie.actors = this.selectedActors;

    this.postForm.emit(movie);
  }
}
