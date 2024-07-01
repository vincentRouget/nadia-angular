import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarAccueilComponent } from './navbar-accueil.component';

describe('NavbarAccueilComponent', () => {
  let component: NavbarAccueilComponent;
  let fixture: ComponentFixture<NavbarAccueilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NavbarAccueilComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NavbarAccueilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
