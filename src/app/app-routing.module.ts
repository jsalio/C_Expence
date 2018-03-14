import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponentComponent } from './layout-component/layout-component.component';
const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
  },
  {
    path: 'dashboard',
    component: LayoutComponentComponent,
    children:
      [
        {
          path: 'dashboard',
          loadChildren: './dashboard/dashboard.module#DashboardModule'
        }
      ]
  },
  {
    path: 'security',
    loadChildren: './security/security.module#SecurityModule'
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
