import { Component, inject } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { NgOptimizedImage } from '@angular/common';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NewsletterFormComponent } from '../newsletter-form/newsletter-form.component';
import { NavigationService, Section } from '../../services/navigation.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeaderComponent, 
    NgOptimizedImage, 
    BtnPrimaryComponent, 
    NewsletterFormComponent],
  providers: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  navService = inject(NavigationService);

  scrollTo(id: string) {
    this.navService.setSection(id as Section);
  }
}
