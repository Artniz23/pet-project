import {HttpClient} from "@angular/common/http";
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";

import {ApiRequestOptions, getApiRequestOptions} from "./api.unil";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private readonly httpClient: HttpClient
  ) {
  }

  get<T = void>(url: string, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.get<T>(url, getApiRequestOptions(options));
  }

  post<T = void>(url: string, body?: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.post<T>(url, body ?? null, getApiRequestOptions(options));
  }

  patch<T = void>(url: string, body?: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.patch<T>(url, body ?? null, getApiRequestOptions(options));
  }

  put<T = void>(url: string, body?: unknown | null, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.put<T>(url, body ?? null, getApiRequestOptions(options));
  }

  delete<T = void>(url: string, options?: Partial<ApiRequestOptions>): Observable<T> {
    return this.httpClient.delete<T>(url, getApiRequestOptions(options));
  }
}
