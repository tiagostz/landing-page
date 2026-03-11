import { Injectable, signal } from '@angular/core';

export type Section = 'home' | 'solutions' | 'performance' | 'security' | 'pricing';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  activeSection = signal<Section>('home');

  setSection(section: Section) {
    this.activeSection.set(section);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
