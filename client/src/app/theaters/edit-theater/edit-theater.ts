import { Component, Input, numberAttribute } from '@angular/core';
import { EditEntity } from '../../shared/components/edit-entity/edit-entity';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { TheatersForm } from '../theaters-form/theaters-form';
import { TheatersService } from '../theaters.service';

@Component({
  selector: 'app-edit-theater',
  imports: [EditEntity],
  templateUrl: './edit-theater.html',
  styleUrl: './edit-theater.css',
  providers: [{ provide: CRUD_SERVICE_TOKEN, useClass: TheatersService }],
})
export class EditTheater {
  @Input({ transform: numberAttribute })
  id!: number;
  theatersForm = TheatersForm;
}
