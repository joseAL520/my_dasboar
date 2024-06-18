import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
@Component({
  selector: 'pages-users',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'users.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
 
})
export class UsersComponent { }
