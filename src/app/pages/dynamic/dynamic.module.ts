import { NgModule } from '@angular/core';
import { DynamicChildComponent } from './dynamic-child/dynamic-child.component';
import { DynamicComponent } from './dynamic.component';

@NgModule({
  entryComponents: [DynamicChildComponent],
  declarations: [DynamicComponent],
})
export class DynamicModule {}
