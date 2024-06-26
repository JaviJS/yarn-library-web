import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import {
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  FormGroup,
} from '@angular/forms';
import { ValidationService } from '../../../../services/validation.service';
import { ErrorInputModel } from '../../../../models/error-input.model';
@Component({
  selector: 'password-form-input',
  templateUrl: './password-form-input.component.html',
  styleUrl: './password-form-input.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PasswordFormInputComponent),
      multi: true,
    },
  ],
})
export class PasswordFormInputComponent implements ControlValueAccessor {
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) placeholder: string = '';
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) formControl: FormControl | undefined;
  @Input({ required: true }) errors: ErrorInputModel | undefined;
  @Input({}) formGroup: FormGroup | undefined;
  @Input({}) repeatPassword: boolean = false;
  passwordVisible: boolean = false;
  value: string = '';
  validationService: ValidationService;
  constructor(_validationService: ValidationService) {
    this.validationService = _validationService;
  }
  isValid(): string {
    if (!this.formControl?.touched && !this.formControl?.dirty) {
      return '';
    }
    return !this.formControl?.valid ? 'error' : 'success';
  }
  // Métodos requeridos por ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.value = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // Lógica para establecer el estado deshabilitado si es necesario
  }

  onInputChange(event: Event) {
    const newValue = (event.target as HTMLInputElement).value;
    this.value = newValue;
    // console.log(this.containMayus(this.value));
    /** wait for refresh value */
    if (!this.repeatPassword) {
      Promise.resolve().then(() =>
        this.formGroup?.controls['repeatPassword'].updateValueAndValidity()
      );
      // console.log(this.formGroup?.controls.repeatPassword.updateValueAndValidity());
      // Promise.resolve().then(() =>
      //   this.formGroup?.repeatPassword.updateValueAndValidity()
      // );
      // value
    }
    this.onChange(newValue);
    this.onTouched();
  }
}
