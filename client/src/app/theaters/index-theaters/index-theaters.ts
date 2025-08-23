import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { IndexEntities } from '../../shared/components/index-entities/index-entities';
import { CRUD_SERVICE_TOKEN } from '../../shared/providers/providers';
import { TheatersService } from '../theaters.service';

@Component({
  selector: 'app-index-theaters',
  imports: [MatIconModule, MatButtonModule, IndexEntities],
  templateUrl: './index-theaters.html',
  styleUrl: './index-theaters.css',
  providers: [{ provide: CRUD_SERVICE_TOKEN, useClass: TheatersService }],
})
export class IndexTheaters {}
