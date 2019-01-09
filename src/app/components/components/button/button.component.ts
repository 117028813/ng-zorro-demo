import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.less']
})
export class ButtonComponent implements OnInit {

  isLoadingOne: boolean = false
  isLoadingTwo: boolean = false
  isLoadingThree: boolean = false

  constructor() { }

  ngOnInit() {
  }

  loadOne() {
    this.isLoadingOne = true
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {resolve()}, 3000)
    })
    p.then(() => {this.isLoadingOne = false})
  }

  loadTwo() {
    this.isLoadingTwo = true
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {resolve()}, 3000)
    })
    p.then(() => {this.isLoadingTwo = false})
  }

  loadThree() {
    this.isLoadingThree = true
    const p = new Promise((resolve, reject) => {
      setTimeout(() => {resolve()}, 3000)
    })
    p.then(() => {this.isLoadingThree = false})
  }

}
