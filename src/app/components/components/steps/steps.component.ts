import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.less']
})
export class StepsComponent implements OnInit {

  current: number = 0

  constructor() { }

  ngOnInit() {
  }

  pre() {
    this.current -= 1
  }

  next() {
    this.current += 1
  }

  done() {
    console.log('done')
  }

}
