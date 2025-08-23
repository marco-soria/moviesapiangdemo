import { Component, Input, numberAttribute } from '@angular/core';
import { EditEntity } from '../../shared/components/edit-entity/edit-entity';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { ActorsForm } from '../actors-form/actors-form';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-edit-actor',
  imports: [EditEntity],
  templateUrl: './edit-actor.html',
  styleUrl: './edit-actor.css',
  providers: [{ provide: CRUD_SERVICE_TOKEN, useClass: ActorsService }],
})
export class EditActor {
  @Input({ transform: numberAttribute })
  id!: number;
  actorsForm = ActorsForm;
}
