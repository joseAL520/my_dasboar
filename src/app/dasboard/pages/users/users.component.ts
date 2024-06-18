import { CommonModule } from '@angular/common';
import {  Component, inject } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { TitleComponent } from '../../shared/title/title.component';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'pages-users',
  standalone: true,
  imports: [
    CommonModule, 
    TitleComponent, 
    RouterModule
  ],
  templateUrl:'users.component.html',
  styles: `
    :host {
      display: block;
    }
  `,
 
})
export default class UsersComponent { 

  public userServices = inject(UsersService);



}
