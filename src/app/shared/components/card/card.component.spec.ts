import { TrimTextPipe } from './../../pipes/trim-text.pipe';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent, TrimTextPipe ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('clicking the card button emits the ID', () => {
    //Arrange
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.cardImgSrc = './dummy-img/src.png';
    component.cardKey = '1';
    component.cardText = 'card text';

    fixture.detectChanges();

    // Act & Assert
    expect(fixture.nativeElement.querySelector('img')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('p')).toBeTruthy();

    spyOn(component.cardClicked, 'emit');
    const card = fixture.nativeElement.querySelector('.card-container .card');
    card.dispatchEvent(new Event('click'));

    fixture.detectChanges();

    expect(component.cardClicked.emit).toHaveBeenCalledWith(component.cardKey);

  })

  it('displaying image only card', () => {
    // Arrange
    //Arrange
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.cardImgSrc = './dummy-img/src.png';
    component.cardKey = '1';
    component.cardText = 'card text';
    component.hasImageOnly = true;

    fixture.detectChanges();

    // Act & Assert
    expect(fixture.nativeElement.querySelector('img')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('p')).toBeFalsy();
  })

  it('text trimming card', () => {
    //Arrange
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    component.cardImgSrc = './dummy-img/src.png';
    component.cardKey = '1';
    component.cardText = 'card text';
    component.trimText = true;

    fixture.detectChanges();

    // Act & Assert
    expect(fixture.nativeElement.querySelector('img')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('p')).toBeTruthy();
  })
});
