import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { routes } from '../../../app.routes';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-menu',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule
  ],
  templateUrl:'sideMenu.component.html',
  styleUrl: './sideMenu.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideMenuComponent {

  public menuItems = routes
    .map(route => route.children ?? [])
    .flat()
    .filter(route => route && route.path )
    .filter(route => !route.path?.includes(':') )


  constructor(){
    //  const dasboarRouter = routes
    //  .map(route => route.children ?? [])
    //  .flat()
    //  .filter(route => route && route.path )
    //  .filter(route => !route.path?.includes(':') )

    //  console.log(dasboarRouter);
  }



}
