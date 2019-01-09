import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.less']
})
export class TableComponent implements OnInit {

  data = [
    {
      name: 'John Brown',
      age: 32,
      address: 'New York No. 1 Lake Park'
    },
    {
      name: 'Jim Green',
      age: 42,
      address: 'London No. 1 Lake Park'
    },
    {
      name: 'Joe Black',
      age: 32,
      address: 'Sidney No. 1 Lake Park'
    },
    {
      name: 'Jim Red',
      age: 32,
      address: 'London No. 2 Lake Park'
    }
  ]
  displayData = []
  listOfSearchName = [ 'Joe', 'London' ]
  searchAddress
  nameList = [
    { text: 'Joe', value: 'Joe', byDefault: true },
    { text: 'Jim', value: 'Jim' }
  ]

  constructor() {}

  ngOnInit() {
  }

  filter(event, searchAddress) {
    console.log(event)
    console.log(searchAddress)
    // this.listOfSearchName = event
    // this.searchAddress = searchAddress
    // this.search()
  }

  sort(event) {
    console.log(event)
  }

  search() {
    const filterFunc = item => (this.searchAddress ? item.address.indexOf(this.searchAddress) !== -1 : true) && (this.listOfSearchName.length ? this.listOfSearchName.some(name => item.name.indexOf(name) !== -1) : true)
    const data = this.data.filter(item => filterFunc(item))
  }

}
