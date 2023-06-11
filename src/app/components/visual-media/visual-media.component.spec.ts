import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualMediaComponent } from './visual-media.component';

describe('CardComponent', () => {
  let component: VisualMediaComponent;
  let fixture: ComponentFixture<VisualMediaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualMediaComponent]
    });
    fixture = TestBed.createComponent(VisualMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
