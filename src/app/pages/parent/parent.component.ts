import { Component, OnInit, ViewChild } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  constructor() {}

  count = 0;

  handleAdd() {
    this.count = this.count + 1;
  }

  handleUpdate(count: number) {
    this.count = count;
  }

  @ViewChild(ChildComponent)
  private childComponent!: ChildComponent;

  getChildValue() {
    alert(this.childComponent.childValue);
  }

  changeChildValue() {
    this.childComponent.changeChildValue('new child value');
  }

  ngOnInit() {}
}
