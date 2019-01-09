import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.less']
})
export class InputNumberComponent implements OnInit {

  demoValue: number = 3
  isDisabled: boolean = false

  constructor() { }

  ngOnInit() {
  }

}
