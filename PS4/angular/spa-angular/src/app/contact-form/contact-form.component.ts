import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms'; // Импортируем ReactiveFormsModule
import { FormGroup, FormBuilder, Validators } from '@angular/forms'; // Импортируем необходимые элементы для формы

@Component({
  selector: 'app-contact-form',
  standalone: true,
  imports: [ReactiveFormsModule],  // Добавляем ReactiveFormsModule в imports
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.contactForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
    }
  }
}
