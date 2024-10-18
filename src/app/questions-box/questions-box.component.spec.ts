import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuestionsBoxComponent } from './questions-box.component';

describe('QuestionsBoxComponent', () => {
  let component: QuestionsBoxComponent;
  let fixture: ComponentFixture<QuestionsBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [QuestionsBoxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(QuestionsBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
