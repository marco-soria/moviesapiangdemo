import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-index-actors',
  imports: [MatButtonModule, MatIconModule, RouterLink],
  templateUrl: './index-actors.html',
  styleUrl: './index-actors.css',
})
export class IndexActors {}
