import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { TitleComponent } from '../../shared/title/title.component';
@Component({
  selector: 'views-trasition',
  standalone: true,
  imports: [
    CommonModule, TitleComponent
  ],
  template:`

<app-title titulo="View Transition 2" />

<section class="flex justify-end">

  <img
    srcset="https://picsum.photos/id/237/200/300"
    alt="Picsum"
    width="200"
    height="300"
    style="view-transition-name: hero1"
  />

  <div
    class="fixed bottom-16 right-10 bg-blue-800 w-32 h-32 rounded"
    style="view-transition-name: hero2"
  ></div>


</section>


  `,
 
})
export default class ViewsTrasitionComponent { }
