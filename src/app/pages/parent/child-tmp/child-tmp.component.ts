import { Component, OnInit, Input, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-child-tmp',
  templateUrl: './child-tmp.component.html',
  styleUrls: ['./child-tmp.component.css'],
})
export class ChildTmpComponent implements OnInit {
  constructor() {}

  @Input() childTmp: TemplateRef<HTMLElement>;

  ngOnInit() {}
}
