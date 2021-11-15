import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasisComponent } from './pages/basis/basis.component';

const router: Routes = [
  {
    path: '/basis',
    component: BasisComponent,
  },
  {
    path: '',
    component: BasisComponent,
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(router)],
  exports: [RouterModule],
})
export class AppRouterModule {}
