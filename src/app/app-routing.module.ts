import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'parent', 
    loadChildren: () => import('./parent/parent.module').then((m) => m.ParentModule),
  },
  { path: '', redirectTo: 'parent', pathMatch: 'full' }, 
  { path: '**', redirectTo: 'parent' }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
