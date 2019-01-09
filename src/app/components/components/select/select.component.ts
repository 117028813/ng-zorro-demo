import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.less']
})
export class SelectComponent implements OnInit {

  selectedValue: string = 'lucy'
  listOfOption = []
  listOfSelectedValue = ['a10', 'c12']

  constructor() { }

  ngOnInit() {
    for (let i = 10; i < 36; i++) {
      this.listOfOption.push({
        label: i.toString(36) + i,
        value: i.toString(36) + i
      })
    }
  }

}
