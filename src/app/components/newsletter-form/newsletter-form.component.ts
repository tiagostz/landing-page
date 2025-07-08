import { Component } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'newsletter-form',
  standalone: true,
  imports: [
    BtnPrimaryComponent,
    FormsModule,
    CommonModule
  ],
  templateUrl: './newsletter-form.component.html',
  styleUrl: './newsletter-form.component.scss'
})
export class NewsletterFormComponent {
  formData = { name: '', email: '' };
  successMessage = '';
  errorMessage = '';

  isValidEmail(email: string): boolean {
    // Regex simples para validação de e-mail
    return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);
  }

  onSubmit(form: NgForm) {
    this.successMessage = '';
    this.errorMessage = '';
    if (!this.formData.name || !this.formData.email) {
      this.errorMessage = 'Preencha todos os campos.';
      return;
    }
    if (!this.isValidEmail(this.formData.email)) {
      this.errorMessage = 'E-mail inválido.';
      return;
    }
    // Simula envio
    this.successMessage = 'Inscrição realizada com sucesso!';
    this.formData = { name: '', email: '' };
    form.resetForm();
  }
}
