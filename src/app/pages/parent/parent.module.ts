import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent.component';

@NgModule({
  imports: [FormsModule],
  declarations: [ParentComponent, ChildComponent],
  exports: [ParentComponent],
})
export class ParentModule {}
