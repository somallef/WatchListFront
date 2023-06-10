import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PosterComponent } from './poster.component';

describe('CardComponent', () => {
  let component: PosterComponent;
  let fixture: ComponentFixture<PosterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PosterComponent]
    });
    fixture = TestBed.createComponent(PosterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
