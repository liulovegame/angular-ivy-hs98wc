import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-url-search',
  templateUrl: './url-search.component.html',
  styleUrls: ['./url-search.component.css'],
})
export class UrlSearchComponent implements OnInit {
  constructor(private router: ActivatedRoute) {}

  sort: Observable<string>;

  ngOnInit() {
    console.log(this.router.queryParams);
    this.sort = this.router.queryParams.pipe(map((p) => p.sort));
  }
}
