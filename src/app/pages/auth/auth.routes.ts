import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { SelectedProfileComponent } from './selectedProfile/selectedProfile.component';
import { RegisterUserComponent } from './register-user/register-user.component';
import { ConfirmEmailComponent } from './confirm-email/confirm-email.component';

export const authRoutes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
  },
  {
    path: 'seleccionar-perfil',
    component: SelectedProfileComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'registrar-usuario',
    component: RegisterUserComponent,
  },
  {
    path: 'confirmar-correo',
    component: ConfirmEmailComponent,
  },
];
