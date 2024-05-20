import { Routes } from '@angular/router';
import { AdminPageComponent } from './admin-page.component';

export const adminRoutes: Routes = [
  {
    path: '',
    component: AdminPageComponent,
    children: [
      {
        path: 'usuarios',
        loadChildren: () =>
          import('./user-control/user-control.routes').then(
            m => m.userControlRoutes
          ),
      },
      {
        path: '',
        redirectTo: 'usuarios',
        pathMatch: 'full',
      },
    ],
  },
];
