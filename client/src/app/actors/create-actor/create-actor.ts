import { Component } from '@angular/core';
import { ActorsForm } from '../actors-form/actors-form';
import { ActorCreationDTO } from '../actors.models';

@Component({
  selector: 'app-create-actor',
  imports: [ActorsForm],
  templateUrl: './create-actor.html',
  styleUrl: './create-actor.css',
})
export class CreateActor {
  saveChanges(actor: ActorCreationDTO) {
    console.log('creating the actor', actor);
  }
}
