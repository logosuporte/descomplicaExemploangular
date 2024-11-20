import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'parent',
    loadChildren: () => import('./parent/parent.module').then((m) => m.ParentModule),
  },
  { path: '', redirectTo: 'parent', pathMatch: 'full' },
  { path: '**', redirectTo: 'parent' },
];
