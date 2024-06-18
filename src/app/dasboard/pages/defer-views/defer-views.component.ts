import { CommonModule } from '@angular/common';
import {  Component } from '@angular/core';
import { HeavyLoaderSlowComponent } from '../../shared/heavy-loader/heavy-loader-slow.component';
@Component({
  selector: 'defer-views',
  standalone: true,
  imports: [
    CommonModule,
    HeavyLoaderSlowComponent
  ],
  templateUrl:'defer-views.component.html',
 
 
})
export default class DeferViewsComponent { 



}
