import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '../auth/auth.guard';
import { AdminComponent } from './admin.component';
import { CrisesComponent } from './crises/crises.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        canActivateChild: [AuthGuard],
        children: [
          { path: 'heroes', component: HeroesComponent },
          { path: 'crises', component: CrisesComponent },
          { path: '', component: DashboardComponent },
        ],
      },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  declarations: [
    AdminComponent,
    HeroesComponent,
    CrisesComponent,
    DashboardComponent,
  ],
  exports: [RouterModule],
})
export class AdminModule {}
