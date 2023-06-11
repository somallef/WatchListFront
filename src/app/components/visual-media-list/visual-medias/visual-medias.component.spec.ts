import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualMediasComponent } from './visual-medias.component';

describe('VisualMediasComponent', () => {
  let component: VisualMediasComponent;
  let fixture: ComponentFixture<VisualMediasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualMediasComponent]
    });
    fixture = TestBed.createComponent(VisualMediasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
