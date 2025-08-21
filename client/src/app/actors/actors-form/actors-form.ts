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
import { InputImg } from '../../shared/components/input-img/input-img';
import { dateCannotBeInTheFuture } from '../../shared/functions/validations';
import { ActorCreationDTO, ActorDTO } from '../actors.models';

@Component({
  selector: 'app-actors-form',
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    RouterLink,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    InputImg,
  ],
  templateUrl: './actors-form.html',
  styleUrl: './actors-form.css',
})
export class ActorsForm implements OnInit {
  private formBuilder = inject(FormBuilder);

  form = this.formBuilder.group({
    name: ['', { validators: [Validators.required] }],
    dateOfBirth: new FormControl<Date | null>(null, {
      validators: [Validators.required, dateCannotBeInTheFuture()],
    }),
    picture: new FormControl<null | File | string>(null),
  });

  @Input()
  model?: ActorDTO;

  @Output()
  postForm = new EventEmitter<ActorCreationDTO>();

  ngOnInit(): void {
    if (this.model !== undefined) {
      this.form.patchValue(this.model);
    }
  }

  getErrorMessagesForName(): string {
    let field = this.form.controls.name;

    if (field.hasError('required')) {
      return 'the name field is required';
    }

    return '';
  }

  getErrorMessagesForDateOfBirth(): string {
    let field = this.form.controls.dateOfBirth;

    if (field.hasError('required')) {
      return 'the date of birth field is required';
    }

    if (field.hasError('dateCannotBeInTheFuture')) {
      return field.getError('dateCannotBeInTheFuture').message;
    }

    return '';
  }

  handleFileSelection(file: File) {
    this.form.controls.picture.setValue(file);
  }

  saveChanges() {
    const actor = this.form.value as ActorCreationDTO;

    actor.dateOfBirth = moment(actor.dateOfBirth).toDate();

    if (typeof actor.picture === 'string') {
      actor.picture = undefined;
    }

    this.postForm.emit(actor);
  }
}
