import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { utilsBr } from 'js-brasil';
import { CustomValidators } from 'ng2-validation';
import { NgBrazilValidators } from 'ng-brazil';
import { User } from './models/user';

@Component({
  selector: 'app-form-validation',
  templateUrl: './form-validation.component.html',
  styleUrls: ['./form-validation.component.scss']
})

export class FormValidationComponent implements OnInit {
  registerForm: FormGroup;
  user: User;

  MASK = utilsBr.MASKS;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    const password = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15])
    ]);
    const confirmedPassword = new FormControl('', [
      Validators.required,
      CustomValidators.rangeLength([6, 15]),
      CustomValidators.equalTo(password)
    ]);

    this.registerForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(120)]],
      email: ['', [Validators.required, Validators.email]],
      cpf: ['', [Validators.required, NgBrazilValidators.cpf]],
      password,
      confirmedPassword
    });
  }

  addUser() {
    this.user = Object.assign({}, this.user, this.registerForm.value);
  }

}
