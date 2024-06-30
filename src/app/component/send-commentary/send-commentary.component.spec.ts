import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WriteCommentaryComponent } from './send-commentary.component';

describe('WriteCommentaryComponent', () => {
  let component: WriteCommentaryComponent;
  let fixture: ComponentFixture<WriteCommentaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [WriteCommentaryComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(WriteCommentaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
