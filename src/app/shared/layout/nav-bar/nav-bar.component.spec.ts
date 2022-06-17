import { RouterTestingModule } from '@angular/router/testing';
import { NavBarItem } from './../../models/nav-bar-item.model';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('NavBarComponent', () => {
  let component: NavBarComponent;
  let fixture: ComponentFixture<NavBarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavBarComponent ],
      imports: [RouterTestingModule]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display nab bar brand Movie Viewer', () => {

    // Arrange
    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    const expectedNavBarBrand = 'Movie Viewer';

    // Act & Assert
    expect(component.nabBarBrand).toEqual(expectedNavBarBrand);
  })

  it('should contain navigation list', () => {

    // Arrange

    fixture = TestBed.createComponent(NavBarComponent);
    component = fixture.componentInstance;

    const navBarItems: NavBarItem[] = [
      {label: 'Home', route: './home'},
      {label: 'About', route: './about'},
      {label: 'Contact Us', route: './contact-us'},
    ];

    component.navBarItems = navBarItems;
    fixture.detectChanges();
    const expectedNavBarItemsLength = navBarItems.length;
    const listItems = fixture.nativeElement.querySelectorAll('li');

    // Act & Assert
    expect(component.navBarItems.length).toEqual(expectedNavBarItemsLength);
    expect(listItems.length).toEqual(expectedNavBarItemsLength);

  })
});
