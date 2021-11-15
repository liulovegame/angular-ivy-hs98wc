import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
})
export class ChildComponent implements OnInit {
  constructor() {}

  input = '';

  @Input() count: number;
  @Output() handleAdd = new EventEmitter();
  @Output() handleUpdate = new EventEmitter<number>();

  handleAddClick() {
    this.handleAdd.emit();
  }

  handleUpdateClick() {
    this.handleUpdate.emit(parseInt(this.input));
  }

  ngOnInit() {}
}
