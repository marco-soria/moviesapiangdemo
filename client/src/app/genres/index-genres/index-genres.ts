import { Component } from '@angular/core';
import { IndexEntities } from '../../shared/components/index-entities/index-entities';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { GenresService } from '../genres.service';

@Component({
  selector: 'app-index-genres',
  imports: [IndexEntities],
  templateUrl: './index-genres.html',
  styleUrl: './index-genres.css',
  providers: [{ provide: CRUD_SERVICE_TOKEN, useClass: GenresService }],
})
export class IndexGenres {}
