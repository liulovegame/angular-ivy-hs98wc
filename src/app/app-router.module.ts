import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HelloComponent } from './hello.component';
import { BasisComponent } from './pages/basis/basis.component';
import { ParentModule } from './pages/parent/parent.module';

type IRoutes = Route & {
  title: string;
};

export const routes: IRoutes[] = [
  {
    title: '首页',
    path: '',
    component: HelloComponent,
    pathMatch: 'full',
  },
  {
    title: '基础组件',
    path: 'basis',
    component: BasisComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ParentModule],
  exports: [RouterModule],
})
export class AppRouterModule {}
