import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
@Component({
  selector: 'pages-user',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'user.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
 
})
export default class UserComponent { }
