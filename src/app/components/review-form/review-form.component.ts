import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable, switchMap, tap } from 'rxjs';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-review-form',
  templateUrl: './review-form.component.html',
  styleUrls: ['./review-form.component.css']
})
export class ReviewFormComponent implements OnInit {
  
  reviewForm!: FormGroup;
  reviews$!: Observable<any[]>;
  @Input() visualMediaType!: string;
  @Input() visualMediaId!: string;

  constructor(private formBuilder: FormBuilder, private reviewService: ReviewService) {}
  
  ngOnInit(): void {
    this.reviewForm = this.formBuilder.group({
      name: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      review: ['', Validators.compose([Validators.required, Validators.minLength(30)])],
      reviewTitle: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      reviewDate: [new Date(), Validators.required]

    })

    this.reviews$ = this.reviewService.getReviews(this.visualMediaType, this.visualMediaId);

  }

  saveReview() {
    
    if (this.reviewForm.valid) {
      
      const review = this.reviewForm.getRawValue();

      this.reviews$ = this.reviewService.setReview(this.visualMediaType, this.visualMediaId, review)
            .pipe(switchMap(() => this.reviewService.getReviews(this.visualMediaType, this.visualMediaId)))
            .pipe(tap(() => {
                this.reviewForm.reset()
      }))

    }
    

  }



}
