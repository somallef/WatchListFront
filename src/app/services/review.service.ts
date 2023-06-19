import { Injectable } from '@angular/core';
import { EMPTY, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {

  private storage: Storage = window.localStorage;

  constructor() { }

  setReview(visualMediaType: string, visualMediaId: string, review: any) {

    let reviews: any = this.storage.getItem(visualMediaType);

    if (reviews) {
      reviews = JSON.parse(reviews);
    } else {
      reviews = {}
    }

    if (visualMediaId in reviews && Array.isArray(reviews[visualMediaId])) {
      reviews[visualMediaId].push(review);
    } else {
      reviews[visualMediaId] = [review];
    }    

    this.storage.setItem(visualMediaType, JSON.stringify(reviews));

    return of(null);
  }

  getReviews(visualMediaType: string, visualMediaId: string): Observable<any> {

    let reviews: any = this.storage.getItem(visualMediaType);

    if (reviews) {
      reviews = JSON.parse(reviews);
      if(visualMediaId in reviews) {
        reviews[visualMediaId].sort((a: any, b: any) => b.reviewDate.localeCompare(a.reviewDate));
        return of(reviews[visualMediaId]);
      }          
    } 

    return of(null);

  }
}
