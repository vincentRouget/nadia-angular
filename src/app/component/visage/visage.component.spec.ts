import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisageComponent } from './visage.component';

describe('VisageComponent', () => {
  let component: VisageComponent;
  let fixture: ComponentFixture<VisageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [VisageComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VisageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
