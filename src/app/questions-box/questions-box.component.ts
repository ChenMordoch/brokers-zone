import { Component } from '@angular/core';
import { DropDownQuestionComponent } from '../drop-down-question/drop-down-question.component';

interface Options {
  id: number;
  question: string;
  answers: string[];
  show: boolean;
}

@Component({
  selector: 'app-questions-box',
  standalone: true,
  imports: [DropDownQuestionComponent],
  templateUrl: './questions-box.component.html',
  styleUrl: './questions-box.component.css'
})
export class QuestionsBoxComponent {
  options : Options[] = [
    {
      id: 1,
      question: "מוצרי השקעה",
      answers: ["מניות ארהב" ,"מטח, סחורות, חוזים עתידיים", "רק מניות ישראליות", "אחר, פרט"],
      show: true
    },
    {
      id: 2,
      question: "היכן אתה משקיע?",
      answers: [],
      show: false
    },
    {
      id: 3,
      question: "גובה תיק ההשקעות הנוכחי",
      answers: ["1000$-5000$", "5000$-20,000$", "20,000$-50,000$", "50,000$-100,000$"],
      show: false
    },
    {
      id: 4,
      question: "תדירות השקעות",
      answers: [
        "יומית (חישוב שנתי על פי 3 עסקאות בממוצע ליום כפול 260 ימים)",
         "שבועית (חישוב שנתי על פי 8 עסקאות 12 חודשים)",
         "חודשית (חישוב שנתי על פי 24 עסקאות בשנה)",
         "רבעונית (חישוב שנתי על פי 12 עסקאות בשנה)",
         "שנתית (חישוב על פי 6 עסקאות בשנה)"
        ],
      show: false
    },
    {
      id: 5,
      question: "כמה זמן אתה משקיע פעיל?",
      answers: ["עד שנה", "שנה-שנתיים", "שנתיים-חמש שנים", "חמש שנים ומעלה"],
      show: false
    }
  ];

  selectOption(id: number, selected: string) {
    // TODO: move this into a service
    if (selected !== "אחר, פרט" && id < 5) {
      this.options[id].show = true;
    }
    if (id === 1 && selected === "מניות ארהב") {
      this.options[id].answers = [
        "מיטב טרייד",
        "אקסלנס",
        "אי בי אי טרייד",
        "בנק הפועלים",
        "בנק לאומי",
        "בנק אחר",
        "אינטראקטיב ישראל",
        "טריידסטיישן",
        "קולמקס פרו",
        "בלינק",
        "אחר, פרט"
      ];
    } else if (selected === "מטח, סחורות, חוזים עתידיים") {
      this.options[id].answers = [
        "500 פלוס",
        "אווה טרייד",
        "FXCM",
        "קולמקס ישראל",
        "אחר, פרט"
      ];
    } else if (selected === "רק מניות ישראליות") {
      this.options[id].answers = [
        "בנק",
        "בית השקעות",
        "חבר בורסה",
      ];
    } else {
      // TODO: present open text box
    }
  }
}
