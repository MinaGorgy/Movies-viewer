import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieBriefComponent } from './movie-brief.component';

describe('MovieBriefComponent', () => {
  let component: MovieBriefComponent;
  let fixture: ComponentFixture<MovieBriefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MovieBriefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MovieBriefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
