import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlParamsComponent } from './url-params.component';

@NgModule({
  imports: [RouterModule],
  declarations: [UrlParamsComponent],
  exports: [RouterModule],
})
export class UrlParamsModule {}
