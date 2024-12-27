import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms'; // Импортируем ReactiveFormsModule
import { bootstrapApplication } from '@angular/platform-browser'; // Для bootstrapping standalone компонентов

import { AppComponent } from './app.component'; // Импортируем standalone компонент
import { ContactFormComponent } from './contact-form/contact-form.component'; // Импортируем standalone компонент

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule, // Добавляем ReactiveFormsModule в imports
  ],
  providers: [],
})
export class AppModule {}

bootstrapApplication(AppComponent, {
  providers: [
    // Добавляем зависимость для standalone компонентов
    { provide: 'ContactFormComponent', useValue: ContactFormComponent }
  ],
});
