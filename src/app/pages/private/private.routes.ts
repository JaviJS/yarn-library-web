import { Routes } from '@angular/router';
import { PrivateComponent } from './private.component';

export const privateRoutes: Routes = [
  {
    path: '',
    component: PrivateComponent,
    children: [
      {
        path: 'admin',
        loadChildren: () =>
          import('../../pages/admin/admin-page.routes').then(
            m => m.adminRoutes
          ),
      },
      {
        path: 'tejedor',
        loadChildren: () =>
          import('../../pages/weaver/weaver-page.routes').then(
            m => m.weaverRoutes
          ),
      },
      {
        path: 'configuracion',
        loadChildren: () =>
          import('../../pages/config/config.routes').then(m => m.configRoutes),
      },
      {
        path: 'perfil',
        loadChildren: () =>
          import('../../pages/profile/profile.routes').then(
            m => m.profileRoutes
          ),
      },
      {
        path: '',
        redirectTo: 'perfil',
        pathMatch: 'full',
      },
      //   {
      //     path: 'usuarios',
      //     loadChildren: () =>
      //       import('./user-control/user-control.routes').then(
      //         m => m.userControlRoutes
      //       ),
      //   },
      //   {
      //     path: '',
      //     redirectTo: 'usuarios',
      //     pathMatch: 'full',
      //   },
    ],
  },
];
