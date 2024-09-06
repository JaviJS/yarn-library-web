import { Routes } from '@angular/router';
import { WeaverPageComponent } from './weaver-page.component';

export const weaverRoutes: Routes = [
  {
    path: '',
    component: WeaverPageComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./yarn-control/yarn-control.routes').then(
            m => m.yarnControlRoutes
          ),
      },
      {
        path: '',
        redirectTo: 'hilados',
        pathMatch: 'full',
      },
    ],
  },
];
