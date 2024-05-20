import { Routes } from '@angular/router';
import { ListUserComponent } from './list-user/list-user.component';
// import { InfoAlbumsComponent } from './info-albums/info-albums.component';
// import { InfoMembersComponent } from './info-members/info-members.component';
// import { AdminPageComponent } from './admin-page.component';

export const userControlRoutes: Routes = [
  {
    path: '',
    component: ListUserComponent,
  },
];
