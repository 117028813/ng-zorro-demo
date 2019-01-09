import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.less']
})
export class InputComponent implements OnInit {

  addOnBeforeValue: string = 'http://'
  options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'Xihu',
              isLeaf: true
            }
          ]
        },
        {
          value: 'ningbo',
          label: 'Ningbo',
          isLeaf: true
        }
      ]
    },
    {
      value: 'liaoning',
      label: 'Liaoning',
      children: [
        {
          value: 'shenyang',
          label: 'Shenyang',
          children: [
            {
              value: 'huanggutun',
              label: 'Huanggutun',
              isLeaf: true
            }
          ]
        }
      ]
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
