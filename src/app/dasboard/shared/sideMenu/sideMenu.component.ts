import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
  ],
  template: `<p>sideMenu works!</p>`,
  styleUrl: './sideMenu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent { }
