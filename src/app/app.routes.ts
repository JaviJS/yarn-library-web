import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
// import { PrincipalComponent } from './pages/principal/principal.component';
export const routes: Routes = [
    {
        path: 'auth',
        loadChildren: () =>
            import('./pages/auth/auth.routes').then((m) => m.authRoutes),
    },
    {
        path: 'private',
        loadChildren: () =>
            import('./pages/private/private.routes').then((m) => m.privateRoutes),
    },
    {
        path: '**',
        component: NotFoundComponent
    }
];