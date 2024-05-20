import { Routes } from '@angular/router';
import { ViewProfileComponent } from './view-profile/view-profile.component';

export const profileRoutes: Routes = [
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full',
  },
  {
    path: '',
    component: ViewProfileComponent,
  },
];
