import { environment } from './../../../../environments/environment.prod';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GenericHttpService {

  constructor(private httpClient: HttpClient) { }

  getAll<TResponse>(url: string, queryParams?: HttpParams): Observable<TResponse> {
    // send the HTTP request.
    return this.httpClient.get<TResponse>(url, {
      params: queryParams
    });
  }

  getItem<TResponse>(url: string, id: string | number, queryParams?: HttpParams): Observable<TResponse> {
    // configure the request URL properly.
    const requestUrl = `${url}${id}`;

    // send the HTTP request.
    return this.httpClient.get<TResponse>(requestUrl, {
      params: queryParams
    });
  }
}
