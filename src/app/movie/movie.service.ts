import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

const TMDB_DISCOVER_URL: string = environment.TMDB_DISCOVER_URL;

@Injectable({
  providedIn: 'root'
})
export class MovieService {  

  constructor(private http: HttpClient) { }

  discover() {
    return this.http.get(TMDB_DISCOVER_URL);
  }
}