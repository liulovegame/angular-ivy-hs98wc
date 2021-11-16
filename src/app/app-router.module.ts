import { NgModule } from '@angular/core';
import { RouterModule, Route } from '@angular/router';
import { HelloComponent } from './hello.component';
import { BasisComponent } from './pages/basis/basis.component';
import { DataListComponent } from './pages/data-list/data-list.component';
import { DynamicComponent } from './pages/dynamic/dynamic.component';
import { DynamicModule } from './pages/dynamic/dynamic.module';
import { ParentComponent } from './pages/parent/parent.component';
import { ParentModule } from './pages/parent/parent.module';
import { UrlDefaultComponent } from './pages/url-params/url-default/url-default.component';
import { UrlIdComponent } from './pages/url-params/url-id/url-id.component';
import { UrlParamsComponent } from './pages/url-params/url-params.component';
import { UrlParamsModule } from './pages/url-params/url-params.module';
import { UrlSearchComponent } from './pages/url-params/url-search/url-search.component';

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
  {
    path: 'datalist',
    title: '数据请求',
    component: DataListComponent,
  },
  {
    path: 'params',
    title: '路由嵌套和带参',
    component: UrlParamsComponent,
    children: [
      {
        path: ':id',
        component: UrlIdComponent,
      },
      {
        path: 'test',
        component: UrlSearchComponent,
      },
      {
        path: '**',
        component: UrlDefaultComponent,
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    ParentModule,
    DynamicModule,
    UrlParamsModule,
  ],
  exports: [RouterModule],
})
export class AppRouterModule {}
