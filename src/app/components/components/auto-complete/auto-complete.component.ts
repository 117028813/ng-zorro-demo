import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auto-complete',
  templateUrl: './auto-complete.component.html',
  styleUrls: ['./auto-complete.component.less']
})
export class AutoCompleteComponent implements OnInit {

  inputValue: string
  options = []

  constructor() { }

  ngOnInit() {
  }

  onInput(value: string) {
    this.options = value ? [value, value + value, value + value + value] : []
  }

  onChange(value: string) {
    if (!value || value.indexOf('@') >= 0) {
      this.options = []
    } else {
      this.options = ['gmail.com', '163.com', 'qq.com'].map(domain => `${value}@${domain}`)
    }
  }

}
