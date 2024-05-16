import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { content } from '../model/content';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { IService } from './i-service';

@Injectable({
  providedIn: 'root'
})
export class ComponentService{

  constructor(private http: HttpClient) {}
  apiUrl: string = environment.API_URL;

  get(termoBusca?: string | undefined): Observable<content[]> {
    let url = this.apiUrl;
    return this.http.get<content[]>(url);
  }

  save(objeto: content): Observable<content[]> {
    let url = this.apiUrl;
    if (objeto.content) {
      return this.http.put<content[]>(url, objeto);
    } else {
      return this.http.post<content[]>(url, objeto);
    }
  }

}
