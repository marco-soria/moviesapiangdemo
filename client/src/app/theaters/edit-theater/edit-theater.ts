import { Component, Input, numberAttribute } from '@angular/core';
import { TheatersForm } from '../theaters-form/theaters-form';
import { TheaterCreationDTO, TheaterDTO } from '../theaters.models';

@Component({
  selector: 'app-edit-theater',
  imports: [TheatersForm],
  templateUrl: './edit-theater.html',
  styleUrl: './edit-theater.css',
})
export class EditTheater {
  @Input({ transform: numberAttribute })
  id!: number;

  model: TheaterDTO = {
    name: 'Acropolis',
    id: 1,
    latitude: 18.469687126038135,
    longitude: -69.93940062740286,
  };

  saveChanges(theater: TheaterCreationDTO) {
    console.log('editing the theater', theater);
  }
}
