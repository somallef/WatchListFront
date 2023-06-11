import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { TMDBResult } from '../TMDBResult';
import { Observable, map } from 'rxjs';

import { environment } from 'src/environments/environment.development';

const API_KEY = environment.api_key
const TMDB_URL_MULTI = environment.tmdbUrlMulti

@Injectable({
  providedIn: 'root'
})
export class TMDBService {

  constructor(private http: HttpClient) { }

  searchByTitle(title: string, page: number = 1, language: string = 'pt-BR', include_adult: boolean = false): Observable<TMDBResult> {
    const params = new HttpParams()
            .append('query', title)
            .append('page', page.toString())
            .append('api_key', API_KEY)
            .append('include_adult', include_adult)
            .append('language', language);

    return this.http
        .get<TMDBResult>(TMDB_URL_MULTI, { params }).pipe(
          map(response => {
            response.results = response.results.filter(item => {
              if ((item.media_type === 'tv' || item.media_type === 'movie') &&
              (item.overview != '' && item.poster_path != null)) {
                return item;
              }
            });
            return response;
          })
        );

  }

  searchById(id: string, media_type: string, language: string = 'pt-BR'): Observable<any> {

    const params = new HttpParams()
            .append('api_key', API_KEY)
            .append('language', language);

    return this.http.get<any>(`https://api.themoviedb.org/3/${media_type}/${id}`, { params });

  }


}
