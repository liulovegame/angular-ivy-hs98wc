import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-data-list',
  templateUrl: './data-list.component.html',
  styleUrls: ['./data-list.component.css'],
})
export class DataListComponent implements OnInit {
  constructor(private http: HttpClient) {}

  dataList: string;
  id = 1;

  handleNextId(id: number) {
    this.id = id;
    this.http
      .get('https://jsonplaceholder.typicode.com/todos/' + id)
      .subscribe((res) => {
        console.log(res);
        this.dataList = JSON.stringify(res);
      });
  }

  ngOnInit() {
    this.handleNextId(1);
  }
}
