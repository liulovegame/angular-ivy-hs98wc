import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';
import { CrisesComponent } from './crises/crises.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [
      { path: '/heros', component: HeroesComponent },
      { path: '/crises', component: CrisesComponent },
      { path: '', component: DashboardComponent },
    ],
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(routes)],
  declarations: [
    AdminComponent,
    HeroesComponent,
    CrisesComponent,
    DashboardComponent,
  ],
  exports: [RouterModule],
})
export class AdminModule {}
