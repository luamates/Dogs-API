import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Doguinho } from './doguinhos';

@Injectable({
  providedIn: 'root'
})
export class DoguinhosService {

  apiUrl = "https://random.dog/woof.json";

  constructor(private httpClient: HttpClient) { }

  getDog(): Observable<Doguinho> {
    return this.httpClient.get<Doguinho>(this.apiUrl)
  }
} 