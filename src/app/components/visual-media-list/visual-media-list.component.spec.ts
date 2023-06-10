import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualMediaListComponent } from './visual-media-list.component';

describe('VisualMediaListComponent', () => {
  let component: VisualMediaListComponent;
  let fixture: ComponentFixture<VisualMediaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualMediaListComponent]
    });
    fixture = TestBed.createComponent(VisualMediaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
