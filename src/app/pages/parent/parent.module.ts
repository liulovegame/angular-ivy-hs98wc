import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ChildTmpComponent } from './child-tmp/child-tmp.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent.component';

@NgModule({
  imports: [FormsModule],
  declarations: [ParentComponent, ChildComponent, ChildTmpComponent],
  exports: [ParentComponent],
})
export class ParentModule {}
