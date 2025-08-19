import { Component, Input, numberAttribute } from '@angular/core';

@Component({
  selector: 'app-edit-actor',
  imports: [],
  templateUrl: './edit-actor.html',
  styleUrl: './edit-actor.css',
})
export class EditActor {
  @Input({ transform: numberAttribute })
  id!: number;
}
