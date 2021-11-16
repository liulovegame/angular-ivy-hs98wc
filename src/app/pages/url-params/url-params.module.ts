import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UrlParamsComponent } from './url-params.component';
import { UrlSearchComponent } from './url-search/url-search.component';

@NgModule({
  imports: [RouterModule, CommonModule],
  declarations: [UrlParamsComponent, UrlSearchComponent],
  exports: [RouterModule],
})
export class UrlParamsModule {}
