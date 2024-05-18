import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SelectedProfileComponent } from './selectedProfile/selectedProfile.component';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'seleccionarPerfil',
    component: SelectedProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
];