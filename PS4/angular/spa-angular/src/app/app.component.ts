import { Component } from '@angular/core';
import { ContactFormComponent } from './contact-form/contact-form.component'; // Импортировать контактную форму

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ContactFormComponent],  // Добавить сюда импорт компонента
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}
