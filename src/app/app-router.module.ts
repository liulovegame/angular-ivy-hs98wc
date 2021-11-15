import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HelloComponent } from './hello.component';
import { BasisComponent } from './pages/basis/basis.component';
import { ParentComponent } from './pages/parent/parent.component';
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
  {
    path: 'parent',
    title: '父子传值，事件传参',
    component: ParentComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRouterModule {}
