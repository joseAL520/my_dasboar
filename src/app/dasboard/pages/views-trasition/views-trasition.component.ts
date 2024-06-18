import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
@Component({
  selector: 'views-trasition',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl:'views-trasition.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
 
})
export default class ViewsTrasitionComponent { }
