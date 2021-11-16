import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-url-id',
  templateUrl: './url-id.component.html',
  styleUrls: ['./url-id.component.css'],
})
export class UrlIdComponent implements OnInit {
  constructor(private route: ActivatedRoute) {
    // const id: Observable<string> = route.params.pipe(map((p) => p.id));
  }

  id: string;

  ngOnInit() {
    const id: Observable<string> = this.route.params.pipe(map((p) => p.id));
    id.subscribe((res) => {
      console.log(res);
      this.id = res;
    });
  }
}
