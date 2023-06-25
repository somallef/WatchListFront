import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
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
      visualMediaType: [this.visualMediaType, Validators.required],
      visualMediaId: [this.visualMediaId, Validators.required],
      name: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.pattern("^[a-zA-Z]+ [a-zA-Z]+$")])],
      review: ['', Validators.compose([Validators.required, Validators.minLength(30)])],
      reviewTitle: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      reviewDate: [new Date(), Validators.required]

    })

    this.loadReviews();

  }

  loadReviews() {
    this.reviews$ = this.reviewService.getReviews(this.visualMediaType, this.visualMediaId);
  }

  saveReview() {
    
    if (this.reviewForm.valid) {
      
      const review = this.reviewForm.getRawValue();

      this.reviewService.addReview(review)
        .then(response => {
          this.loadReviews();
          this.reviewForm.reset();
          console.log('Review adicionada', response);
        })
        .catch(error => {
          console.error('Não foi possível adicionar a review', error);
        });

    }
    

  }



}
