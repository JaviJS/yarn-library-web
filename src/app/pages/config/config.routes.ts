import { Routes } from '@angular/router';
import { ListConfigComponent } from './list-config/list-config.component';

export const configRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ListConfigComponent,
  },
];
