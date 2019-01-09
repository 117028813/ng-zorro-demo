import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.less']
})
export class CheckboxComponent implements OnInit {

  checked: boolean = true
  isCheckedButton: boolean = true
  isDisabledButton: boolean = false
  allChecked: boolean = false
  indeterminate: boolean = true
  checkOptionsOne = [
    { label: 'Apple', value: 'apple', checked: true },
    { label: 'Pear', value: 'pear' },
    { label: 'Orange', value: 'orange' }
  ]

  constructor() { }

  ngOnInit() {
  }

  checkButton() {
    this.isCheckedButton = !this.isCheckedButton
  }

  disableButton() {
    this.isDisabledButton = !this.isDisabledButton
  }

  log(value) {
    console.log(value)
  }

  updateAllChecked() {
    this.indeterminate = false
    if (this.allChecked) {
      this.checkOptionsOne.forEach(item => item.checked = true)
    } else {
      this.checkOptionsOne.forEach(item => item.checked = false)
    }
  }

  updateSingleChecked() {
    if (this.checkOptionsOne.every(item => item.checked === false)) {
      this.allChecked = false
      this.indeterminate = false
    } else if (this.checkOptionsOne.every(item => item.checked === true)) {
      this.allChecked = true
      this.indeterminate = false
    } else {
      this.indeterminate = true
    }
  }

}
