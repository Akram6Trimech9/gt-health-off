import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PacientsCommentsComponent } from './pacients-comments.component';

describe('PacientsCommentsComponent', () => {
  let component: PacientsCommentsComponent;
  let fixture: ComponentFixture<PacientsCommentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PacientsCommentsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PacientsCommentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
