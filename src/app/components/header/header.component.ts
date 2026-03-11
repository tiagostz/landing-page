import { NgOptimizedImage } from '@angular/common';
import { Component, inject } from '@angular/core';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { NavigationService, Section } from '../../services/navigation.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    NgOptimizedImage,
    BtnPrimaryComponent
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private navService = inject(NavigationService);

  scrollTo(id: string) {
    this.navService.setSection(id as Section);
  }

  scrollToNewsletter() {
    this.navService.setSection('home');
    setTimeout(() => {
      const element = document.getElementById('newsletter');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  }

  goHome() {
    this.navService.setSection('home');
  }
}
