import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuestionsBoxComponent } from './questions-box/questions-box.component';
import { SubmitFormComponent } from './submit-form/submit-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, SubmitFormComponent, QuestionsBoxComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'brokers-zone';
}
