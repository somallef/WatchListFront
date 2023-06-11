import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualMediaDetailsComponent } from './visual-media-details.component';

describe('VisualMediaDetailsComponent', () => {
  let component: VisualMediaDetailsComponent;
  let fixture: ComponentFixture<VisualMediaDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualMediaDetailsComponent]
    });
    fixture = TestBed.createComponent(VisualMediaDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
