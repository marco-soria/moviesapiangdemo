import { Component } from '@angular/core';
import { CreateEntity } from '../../shared/components/create-entity/create-entity';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { GenresForm } from '../genres-form/genres-form';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-create-genre',
  imports: [CreateEntity],
  templateUrl: './create-genre.html',
  styleUrl: './create-genre.css',
  providers: [{ provide: CRUD_SERVICE_TOKEN, useClass: GenresService }],
})
export class CreateGenre {
  genresForm = GenresForm;
}
