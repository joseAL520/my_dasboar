import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-heavy-loader-fast',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>heavy-loader-fast works!</p>`,
})
export class HeavyLoaderFastComponent { }
