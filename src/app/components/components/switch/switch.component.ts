import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-switch',
  templateUrl: './switch.component.html',
  styleUrls: ['./switch.component.less']
})
export class SwitchComponent implements OnInit {

  switchValue: boolean = false
  loading: boolean = false

  constructor() { }

  ngOnInit() {
  }

  clickSwitch() {
    if (!this.loading) {
      this.loading = true
      const p = new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve()
        }, 1000)
      })
      p.then(() => {
        this.switchValue = !this.switchValue
        this.loading = false
      })
    }
  }

}
