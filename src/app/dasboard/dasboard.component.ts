import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'dasboard.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DasboardComponent { }``
