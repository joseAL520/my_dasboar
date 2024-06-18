import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
@Component({
  selector: 'defer-views',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'defer-views.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
 
})
export default class DeferViewsComponent { }
