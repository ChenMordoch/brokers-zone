import { Component, Input, Output, EventEmitter } from '@angular/core';
// import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-drop-down-question',
  standalone: true,
  imports: [],
  templateUrl: './drop-down-question.component.html',
  styleUrl: './drop-down-question.component.css'
})
export class DropDownQuestionComponent {
  @Input() question: string = "";
  @Input() options: string[] = [];
  @Output() selectionEvent = new EventEmitter<string>();

  onDropDownChange(value: string) {
    this.selectionEvent.emit(value);
  }
}
