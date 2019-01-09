import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.less']
})
export class FormComponent implements OnInit {

  confirmationValidator = control => {
    if (!control.value) {
      return {required: true}
    } else if (control.value !== this.user.controls.password.value) {
      return {confirm: true}
    }
  }

  user = this.fb.group({
    email: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required]],
    checkPassword: [null, [this.confirmationValidator]],
    nickname: [null, [Validators.required]],
    phoneNumberPrefix: ['+86'],
    phoneNumber: [null, [Validators.required]],
    captcha: [null, [Validators.required]],
    agree: [false]
  })

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit() {
    for (const i in this.user.controls) {
      this.user.controls[i].markAsDirty()
      this.user.controls[i].updateValueAndValidity()
    }
  }

  updateConfirmValidator() {
    this.user.controls.checkPassword.updateValueAndValidity()
  }

}
