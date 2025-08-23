import { Component } from '@angular/core';
import { CreateEntity } from '../../shared/components/create-entity/create-entity';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { ActorsForm } from '../actors-form/actors-form';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-create-actor',
  imports: [CreateEntity],
  templateUrl: './create-actor.html',
  styleUrl: './create-actor.css',
  providers: [{ provide: CRUD_SERVICE_TOKEN, useClass: ActorsService }],
})
export class CreateActor {
  actorsForm = ActorsForm;
}
