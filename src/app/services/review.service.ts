import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';
import { environment } from 'src/environments/environment.development';

const JSON_SERVER_URL = environment.jsonServerUrl

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  constructor(private http: HttpClient) { }

  addReview(review: any): Promise<any> {
    return new Promise((resolve, reject) => {
      this.http.post(JSON_SERVER_URL + "reviews", review)
        .subscribe({
          next: (response: any) => {
            resolve(response);
          },
          error: (err: any) => {
            reject(err);
          }

        });
    });
  } 

  getReviews(visualMediaType: string, visualMediaId: string): Observable<any> {

    const params = new HttpParams()
            .append('visualMediaType', visualMediaType)
            .append('visualMediaId', visualMediaId);
    
    return this.http.get<any>(JSON_SERVER_URL + "reviews", { params })
    .pipe(
      map(response => {
        response.sort((a: any, b: any) => new Date(b.reviewDate).getTime() - new Date(a.reviewDate).getTime());
        return response;
      })
    );

  }
}
