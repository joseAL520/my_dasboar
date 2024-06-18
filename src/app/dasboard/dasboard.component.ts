import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SideMenuComponent } from './shared/sideMenu/sideMenu.component';

@Component({
  selector: 'app-dasboard',
  standalone: true,
  imports: [
    RouterModule,
    SideMenuComponent
  ],
  templateUrl:'dasboard.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export  default class DasboardComponent { }``
