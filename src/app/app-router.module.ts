import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HelloComponent } from './hello.component';
import { BasisComponent } from './pages/basis/basis.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { DynamicModule } from './pages/dynamic/dynamic.module';
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
  {
    path: 'dynamic',
    title: '动态组件',
    component: DynamicComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes), ParentModule, DynamicModule],
  exports: [RouterModule],
})
export class AppRouterModule {}
