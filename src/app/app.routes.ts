import { Routes } from '@angular/router';

export const routes: Routes = [

    {
        path: 'dashboard',
        loadComponent: () => import('./dasboard/dasboard.component'),
        children: [
          {
            path: 'change-detection',
            title: 'Change Detection',
            loadComponent: () => import('./dasboard/pages/change-detection/change-detection.component'),
          },
          {
            path: 'control-flow',
            title: 'Control Flow',
            loadComponent: () => import('./dasboard/pages/control-flow/control-flow.component'),
          },
          {
            path: 'defer-options',
            title: 'Defer Options',
            loadComponent: () => import('./dasboard/pages/defer-options/defer-options.component'),
          },
          {
            path: 'defer-views',
            title: 'Defer Views',
            loadComponent: () => import('./dasboard/pages/defer-views/defer-views.component'),
          },
          {
            path: 'user/:id',
            title: 'User View',
            loadComponent: () => import('./dasboard/pages/user/user.component'),
          },
          {
            path: 'user-list',
            title: 'User List',
            loadComponent: () => import('./dasboard/pages/users/users.component'),
          },
          {
            path: 'view-transition',
            title: 'View Transition',
            loadComponent: () => import('./dasboard/pages/views-trasition/views-trasition.component'),
          },
          {
            path:'', redirectTo: 'control-flow', pathMatch: 'full',
          }
        ]
      },
      {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
      }
    


];
