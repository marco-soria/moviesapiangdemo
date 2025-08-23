import { Component, Input, numberAttribute } from '@angular/core';
import { EditEntity } from '../../shared/components/edit-entity/edit-entity';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { GenresForm } from '../genres-form/genres-form';
import { GenresService } from '../genres.service';
@Component({
  selector: 'app-edit-genre',
  imports: [EditEntity],
  templateUrl: './edit-genre.html',
  styleUrl: './edit-genre.css',
  providers: [
    {
      provide: CRUD_SERVICE_TOKEN,
      useClass: GenresService,
    },
  ],
})
export class EditGenre {
  @Input({ transform: numberAttribute })
  id!: number;
  genresForm = GenresForm;
}
