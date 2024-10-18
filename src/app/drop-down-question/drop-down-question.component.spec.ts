import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropDownQuestionComponent } from './drop-down-question.component';

describe('DropDownQuestionComponent', () => {
  let component: DropDownQuestionComponent;
  let fixture: ComponentFixture<DropDownQuestionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DropDownQuestionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DropDownQuestionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
