import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class ListComponent implements OnInit {

  fakeDataUrl = 'https://randomuser.me/api/?results=5&inc=name,gender,email,nat&noinfo'
  loading = true
  loadingMore = false
  showLoadingMore = true
  data = []

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.getData((res: any) => {
      this.data = res.results
      this.loading = false
    })
  }

  getData(callback) {
    this.http.get(this.fakeDataUrl).subscribe((res: any) => callback(res))
  }

  onLoadMore() {
    this.loadingMore = true
    this.http.get(this.fakeDataUrl).subscribe((res: any) => {
      this.data = [...this.data, ...res.results]
      this.loadingMore = false
    })
  }

}
