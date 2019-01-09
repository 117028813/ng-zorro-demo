import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cascader',
  templateUrl: './cascader.component.html',
  styleUrls: ['./cascader.component.less']
})
export class CascaderComponent implements OnInit {

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

  values

  constructor() { }

  ngOnInit() {
  }

  onChanges(values) {
    console.log(values)
    console.log(this.values)
  }

}
