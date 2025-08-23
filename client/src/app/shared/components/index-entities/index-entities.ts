import { HttpResponse } from '@angular/common/http';
import { Component, inject, Input } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { RouterLink } from '@angular/router';
import Swal from 'sweetalert2';
import { ICRUDService } from '../../interfaces/ICRUDService';
import { PaginationDTO } from '../../models/PaginationDTO';
import { CRUD_SERVICE_TOKEN } from '../../providers/providers';
import { GenericList } from '../generic-list/generic-list';

@Component({
  selector: 'app-index-entities',
  imports: [
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatTableModule,
    GenericList,
    MatPaginatorModule,
  ],
  templateUrl: './index-entities.html',
  styleUrl: './index-entities.css',
})
export class IndexEntities<TDTO, TCreationDTO> {
  CRUDService = inject(CRUD_SERVICE_TOKEN) as ICRUDService<TDTO, TCreationDTO>;
  entities!: TDTO[];
  pagination: PaginationDTO = { page: 1, recordsPerPage: 5 };
  totalRecordsCount!: number;

  @Input({ required: true })
  title!: string;

  @Input({ required: true })
  createRoute!: string;

  @Input({ required: true })
  editRoute!: string;

  @Input()
  columnsToDisplay = ['id', 'name', 'actions'];

  constructor() {
    this.loadRecords();
  }

  loadRecords() {
    this.CRUDService.getPaginated(this.pagination).subscribe(
      (response: HttpResponse<TDTO[]>) => {
        this.entities = response.body as TDTO[];
        const header = response.headers.get('total-records-count') as string;
        this.totalRecordsCount = parseInt(header, 10);
      }
    );
  }

  updatePagination(data: PageEvent) {
    this.pagination = {
      page: data.pageIndex + 1,
      recordsPerPage: data.pageSize,
    };
    this.loadRecords();
  }

  confirmDelete(id: number) {
    Swal.fire({
      title: 'Confirmation',
      text: 'Are you sure you want to delete this record?',
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
    this.CRUDService.delete(id).subscribe(() => {
      this.loadRecords();
      Swal.fire('Deleted!', 'The record has been deleted.', 'success');
    });
  }

  firstLetterToUppercase(value: string) {
    if (!value) return value;
    return value.charAt(0).toUpperCase() + value.slice(1);
  }
}
