import { HttpClient, HttpResponse } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { buildQueryParams } from '../shared/functions/buildQueryParams';
import { ICRUDService } from '../shared/interfaces/ICRUDService';
import { PaginationDTO } from '../shared/models/PaginationDTO';
import { TheaterCreationDTO, TheaterDTO } from './theaters.models';

@Injectable({
  providedIn: 'root',
})
export class TheatersService
  implements ICRUDService<TheaterDTO, TheaterCreationDTO>
{
  constructor() {}

  private http = inject(HttpClient);
  private baseURL = environment.apiURL + '/theaters';

  getPaginated(
    pagination: PaginationDTO
  ): Observable<HttpResponse<TheaterDTO[]>> {
    let queryParams = buildQueryParams(pagination);
    return this.http.get<TheaterDTO[]>(this.baseURL, {
      params: queryParams,
      observe: 'response',
    });
  }

  getById(id: number): Observable<TheaterDTO> {
    return this.http.get<TheaterDTO>(`${this.baseURL}/${id}`);
  }

  create(entity: TheaterCreationDTO): Observable<any> {
    return this.http.post(this.baseURL, entity);
  }
  update(id: number, entity: TheaterCreationDTO): Observable<any> {
    return this.http.put(`${this.baseURL}/${id}`, entity);
  }
  delete(id: number): Observable<any> {
    return this.http.delete(`${this.baseURL}/${id}`);
  }
}
