import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-url-id',
  templateUrl: './url-id.component.html',
  styleUrls: ['./url-id.component.css'],
})
export class UrlIdComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  id: number;

  ngOnInit() {
    console.log(this.router.params);
  }
}
