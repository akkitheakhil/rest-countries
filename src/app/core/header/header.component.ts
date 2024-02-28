import {
  ChangeDetectionStrategy,
  Component,
  Signal,
  inject,
} from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { map, tap } from 'rxjs';
import { ButtonComponent } from '../../shared/components/button/button.component';
import { ColorSchemeService } from '../color-scheme.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [ButtonComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  private readonly colorSchemeService = inject(ColorSchemeService);
  protected isDarkMode: Signal<boolean | undefined>;

  constructor() {
    this.isDarkMode = toSignal(
      this.colorSchemeService.preferredColorScheme$.pipe(
        tap((theme) => {
          this.colorSchemeService.setColorThemeToApp(theme);
        }),
        map((colorScheme) => colorScheme === 'dark')
      )
    );
  }

  toggleTheme(): void {
    this.colorSchemeService.saveNewColorTheme(
      this.isDarkMode() ? 'light' : 'dark'
    );
  }
}
