import { Component } from '@angular/core';
import { IndexEntities } from '../../shared/components/index-entities/index-entities';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { ActorsService } from '../actors.service';

@Component({
  selector: 'app-index-actors',
  imports: [IndexEntities],
  templateUrl: './index-actors.html',
  styleUrl: './index-actors.css',
  providers: [{ provide: CRUD_SERVICE_TOKEN, useClass: ActorsService }],
})
export class IndexActors {}
