import {
  ChangeDetectionStrategy,
  Component,
  HostBinding,
  input,
} from '@angular/core';

export type ButtonType = 'primary' | 'secondary' | 'ghost';
export type ButtonSize = 'small' | 'medium' | 'large';

@Component({
  selector: '[app-button]',
  standalone: true,
  imports: [],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  type = input<ButtonType>('primary', { alias: 'buttonType' });
  size = input<ButtonSize>('medium', { alias: 'buttonSize' });

  @HostBinding('class')
  protected get hostClasses(): Record<string, boolean> {
    return {
      [`custom-button`]: true,
      [`${this.type()}`]: true,
      [`${this.size()}`]: true,
    };
  }
}
