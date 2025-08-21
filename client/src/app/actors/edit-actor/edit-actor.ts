import { Component, Input, numberAttribute } from '@angular/core';
import { ActorsForm } from '../actors-form/actors-form';
import { ActorCreationDTO, ActorDTO } from '../actors.models';

@Component({
  selector: 'app-edit-actor',
  imports: [ActorsForm],
  templateUrl: './edit-actor.html',
  styleUrl: './edit-actor.css',
})
export class EditActor {
  @Input({ transform: numberAttribute })
  id!: number;

  model: ActorDTO = {
    id: 1,
    name: 'Tom Hanks',
    dateOfBirth: new Date('1948-05-25'),
    picture:
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Tom_Hanks_TIFF_2019.jpg/330px-Tom_Hanks_TIFF_2019.jpg',
  };

  saveChanges(actor: ActorCreationDTO) {
    console.log('editing the actor', actor);
  }
}
