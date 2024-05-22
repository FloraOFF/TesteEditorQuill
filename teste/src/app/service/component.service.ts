import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from '../model/data';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IService } from './i-service';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {

  constructor(private http: HttpClient) {}
  apiUrl: string = environment.API_URL;

  get(termoBusca?: string | undefined): Observable<data[]> {
    let url = this.apiUrl;
    return this.http.get<data[]>(url);
  }

  save(objeto: data): Observable<data[]> {
    let url = `${this.apiUrl}`;
    if (objeto.id) {
      url = `${this.apiUrl}/${objeto.id}`;
      return this.http.put<data[]>(url, objeto);
    } else {
      return this.http.post<data[]>(url, objeto);
    }
  }

  delete(id: number): Observable<void> {
    const url = `${this.apiUrl}/${id}`; // URL com o ID para DELETE
    return this.http.delete<void>(url);
  }

}
