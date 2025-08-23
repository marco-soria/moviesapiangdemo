import { Component } from '@angular/core';
import { CreateEntity } from '../../shared/components/create-entity/create-entity';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { TheatersForm } from '../theaters-form/theaters-form';
import { TheatersService } from '../theaters.service';

@Component({
  selector: 'app-create-theater',
  imports: [CreateEntity],
  templateUrl: './create-theater.html',
  styleUrl: './create-theater.css',
  providers: [{ provide: CRUD_SERVICE_TOKEN, useClass: TheatersService }],
})
export class CreateTheater {
  theaterForm = TheatersForm;
}
