import { Component } from '@angular/core';
import { TheatersForm } from '../theaters-form/theaters-form';
import { TheaterCreationDTO } from '../theaters.models';

@Component({
  selector: 'app-create-theater',
  imports: [TheatersForm],
  templateUrl: './create-theater.html',
  styleUrl: './create-theater.css',
})
export class CreateTheater {
  saveChanges(theater: TheaterCreationDTO) {
    console.log('creating the theater', theater);
  }
}
