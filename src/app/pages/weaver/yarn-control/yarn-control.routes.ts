import { Routes } from '@angular/router';
import { ListYarnComponent } from './list-yarn/list-yarn.component';
import { AddYarnComponent } from './add-yarn/add-yarn.component';

export const yarnControlRoutes: Routes = [
  {
    path: '',
    component: ListYarnComponent,
  },
  {
    path: 'agregar-hilado',
    component: AddYarnComponent,
  },
];
