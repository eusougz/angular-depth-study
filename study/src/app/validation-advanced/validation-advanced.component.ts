import { Component, OnInit, AfterViewInit, ViewChildren, ElementRef } from '@angular/core';
import { Validators, FormControl, FormGroup, FormBuilder, FormControlName } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';
import { NgBrazilValidators } from 'ng-brazil';
import { utilsBr } from 'js-brasil';
import { ValidationMessages, DisplayMessage, GenericValidator } from './generic-form-validation';
import { Observable, fromEvent, merge } from 'rxjs';

@Component({
  selector: 'app-validation-advanced',
  templateUrl: './validation-advanced.component.html',
  styleUrls: ['./validation-advanced.component.scss']
})
export class ValidationAdvancedComponent implements OnInit, AfterViewInit {

  /**
   * ViewChildren usado para obter uma coleção dos itens do form (pega do HTML)
   */
  @ViewChildren(FormControlName, { read: ElementRef }) formInputElements: ElementRef[];

  user: User;
  registerForm: FormGroup;

  MASK = utilsBr.MASKS;

  validationMessages: ValidationMessages;
  genericValidator: GenericValidator;
  displayMessage: DisplayMessage = {};

  constructor(private formBuilder: FormBuilder) {
    this.validationMessages = {
      name: {
        required: 'O nome é obrigatório',
        minLength: 'O nome precisa ter no mínimo 2 dígitos',
        maxLength: 'O nome tem no máximo 120 dígitos.'
      },
      email: {
        required: 'O email é obrigatório',
        email: 'Email inválido'
      },
      cpf: {
        required: 'O cpf é obrigatório',
        cpf: 'CPF inválido'
      },
      password: {
        required: 'A senha é obrigatória',
        rangeLength: 'A senha deve conter entre 6 e 15 dígitos'
      },
      confirmedPassword: {
        required: 'A senha é obrigatória',
        rangeLength: 'A senha deve conter entre 6 e 15 dígitos',
        equalTo: 'As senhas devem ser iguais'
      }
    };

    this.genericValidator = new GenericValidator(this.validationMessages);
  }
  ngAfterViewInit() { /* Chamada assim que o html foi "posto" para o usuário */
    /**
     * Coleção de observables que vai ser criada com base em cada item do formulario
     * a partir (fromEvent) de um evento blur (desfocar o item do form)
     */
    let controlBlurs: Observable<any>[] = this.formInputElements
    .map((formControl: ElementRef) => fromEvent(formControl.nativeElement, 'blur'));

    /**
     * Spread operator + merge para utilizar a chamada subscribe de controlBlur
     */
    merge(...controlBlurs).subscribe(() => {
      this.displayMessage = this.genericValidator.processarMensagens(this.registerForm);
    });
  }

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
      name: ['', [Validators.required, Validators.minLength(2) ,Validators.maxLength(120)]],
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

export interface User {
  name: string;
  email: string;
  cpf: string;
  password: string;
  confirmedPassword: string;
}
