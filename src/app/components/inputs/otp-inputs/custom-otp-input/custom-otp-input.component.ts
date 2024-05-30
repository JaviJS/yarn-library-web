import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import { NgOtpInputModule, NgOtpInputConfig } from 'ng-otp-input';
import {
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'custom-otp-input',
  templateUrl: './custom-otp-input.component.html',
  styleUrl: './custom-otp-input.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    ReactiveFormsModule,
    NgOtpInputModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomOtpInputComponent),
      multi: true,
    },
  ],
})
export class CustomOtpInputComponent implements ControlValueAccessor {
  @Input({ required: true }) allowNumbersOnly: boolean = false;
  @Input({ required: true }) length: number = 0;
  @Input({ required: true }) isPasswordInput: boolean = false;
  @Input({ required: true }) formControl: FormControl | undefined;

  value: string = '';
  touch = false;
  otpConfig: NgOtpInputConfig = {
    allowNumbersOnly: this.allowNumbersOnly,
    length: this.length,
    isPasswordInput: this.isPasswordInput,
    disableAutoFocus: false,
    placeholder: '',
    inputStyles: {
      display: 'flex',
    },
    containerStyles: {
      display: 'flex',
      'justify-content': 'center',
    },
    inputClass: 'each_input',
    containerClass: 'all_inputs',
  };
  ngOnInit() {
    this.otpConfig = {
      allowNumbersOnly: this.allowNumbersOnly,
      length: this.length,
      isPasswordInput: this.isPasswordInput,
      disableAutoFocus: false,
      placeholder: '',
      inputStyles: {
        display: 'flex',
      },
      containerStyles: {
        display: 'flex',
        'justify-content': 'center',
      },
      inputClass: 'each_input',
      containerClass: 'all_inputs',
    };
  }
  onOtpChange(code: string) {
    this.formControl?.setValue(code);
    this.touch = true;
  }
  constructor() {}

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
    this.onChange(newValue);
    this.onTouched();
  }
}
