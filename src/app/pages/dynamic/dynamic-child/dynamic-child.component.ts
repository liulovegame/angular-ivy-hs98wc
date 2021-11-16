import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dynamic-child',
  templateUrl: './dynamic-child.component.html',
  styleUrls: ['./dynamic-child.component.css'],
})
export class DynamicChildComponent implements OnInit {
  constructor() {}

  @Input() type = 'success';
  @Output() output = new EventEmitter();

  ngOnInit() {}
}
