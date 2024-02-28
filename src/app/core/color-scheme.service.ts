import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export type ColorScheme = 'dark' | 'light';
const ColorSchemeKey = 'colorScheme' as const;

@Injectable({
  providedIn: 'root',
})
export class ColorSchemeService {
  preferredColorScheme$ = new Observable<ColorScheme>((observer) => {
    const updateColorScheme = () => {
      const localStorageColorScheme = localStorage.getItem('colorScheme');
      if (
        localStorageColorScheme === 'light' ||
        localStorageColorScheme === 'dark'
      ) {
        observer.next(localStorageColorScheme);
      } else {
        const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
        observer.next(mediaQuery.matches ? 'dark' : 'light');
      }
    };

    // Initial update
    updateColorScheme();

    // Listen for changes in localStorage
    const storageListener = () => {
      updateColorScheme();
    };
    window.addEventListener('storage', storageListener);

    // Cleanup function
    return () => {
      window.removeEventListener('storage', storageListener);
    };
  });

  setColorThemeToApp(theme: ColorScheme): void {
    document.body.setAttribute('data-theme', theme);
  }

  saveNewColorTheme(theme: ColorScheme): void {
    localStorage.setItem(ColorSchemeKey, theme);
  }
}
