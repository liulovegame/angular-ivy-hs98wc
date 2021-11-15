import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css'],
})
export class ParentComponent implements OnInit {
  count = 0;

  handleAdd() {
    this.count = this.count + 1;
  }

  handleUpdate(count: number) {
    this.count = count;
  }

  constructor() {}

  ngOnInit() {}
}
