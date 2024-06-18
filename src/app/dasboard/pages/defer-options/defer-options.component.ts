import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'defer-options',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'defer-options.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DeferOptionsComponent { }
