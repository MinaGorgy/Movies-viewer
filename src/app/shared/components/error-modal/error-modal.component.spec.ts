import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorModalComponent } from './error-modal.component';

describe('ErrorModalComponent', () => {
  let component: ErrorModalComponent;
  let fixture: ComponentFixture<ErrorModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorModalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('showModal should show modal', () => {
    // Arrange
    fixture = TestBed.createComponent(ErrorModalComponent);
    component = fixture.componentInstance;
    component.errorMessage = "Error Message";
    component.isModalShown = false;
    const expectedErrorMessageContent = `Message: ${component.errorMessage}`;
    fixture.detectChanges();

    // Act
    component.showModal();
    fixture.detectChanges();

    // Assert
    expect(component.isModalShown).toBeTrue();
    expect(fixture.nativeElement.querySelector('.modal-dialog')).toBeTruthy();
    expect(fixture.nativeElement.querySelector('li').innerText).toEqual(expectedErrorMessageContent);
  });

  it('hidModal should hide modal', () => {
    // Arrange
    fixture = TestBed.createComponent(ErrorModalComponent);
    component = fixture.componentInstance;
    component.errorMessage = "Error Message";
    component.isModalShown = true;
    fixture.detectChanges();

    // Act
    component.hideModal();
    fixture.detectChanges();

    // Assert
    expect(component.isModalShown).toBeFalse();
    expect(fixture.nativeElement.querySelector('.modal-dialog')).toBeFalsy();
  });
});
