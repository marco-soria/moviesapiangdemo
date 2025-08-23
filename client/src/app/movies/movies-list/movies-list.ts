import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { Authorized } from '../../security/authorized/authorized';
import { GenericList } from '../../shared/components/generic-list/generic-list';
import { MoviesService } from '../movies.service';
@Component({
  selector: 'app-movies-list',
  imports: [
    GenericList,
    MatButtonModule,
    MatIconModule,
    RouterLink,
    Authorized,
  ],
  templateUrl: './movies-list.html',
  styleUrl: './movies-list.css',
})
export class MoviesList {
  @Input({ required: true })
  movies!: any[];

  @Output()
  deleted = new EventEmitter<void>();

  moviesService = inject(MoviesService);

  confirmDelete(id: number) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this movie?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.delete(id);
      }
    });
  }

  delete(id: number) {
    this.moviesService.delete(id).subscribe(() => {
      this.deleted.emit();
      Swal.fire('Deleted!', 'The movie has been deleted.', 'success');
    });
  }
}
