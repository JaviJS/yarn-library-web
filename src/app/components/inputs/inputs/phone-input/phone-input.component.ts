import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input-gg';
import {
  SearchCountryField,
  CountryISO,
  PhoneNumberFormat,
} from 'ngx-intl-tel-input-gg';
import {
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  FormsModule,
} from '@angular/forms';

@Component({
  selector: 'phone-input',
  templateUrl: './phone-input.component.html',
  styleUrl: './phone-input.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    NgxIntlTelInputModule,
  ],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => PhoneInputComponent),
      multi: true,
    },
  ],
})
export class PhoneInputComponent implements ControlValueAccessor {
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) errorTip: string = '';
  @Input({ required: true }) placeholder: string = '';
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) formControl: FormControl | null = null;
  phone = {
    number: '',
    dialCode: '',
    countryCode: '',
    internationalNumber: '',
    nationalNumber: '',
  };
  SearchCountryField = SearchCountryField;
  CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
  preferredCountries: CountryISO[] = [CountryISO.Chile];
  classInput = '';
  constructor() {}
  isValid(): string {
    this.classInput = "'";
    if (!this.formControl?.touched) {
      return 'success';
    }
    if (this.formControl.errors) {
      this.classInput = 'input_error';
      console.log('entro en error');
      return !this.formControl?.valid && this.formControl.errors['required']
        ? 'error'
        : 'success';
    }
    return 'success';
  }
  // Métodos requeridos por ControlValueAccessor
  onChange: any = () => {};
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.phone = value;
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
    const newValue = event.target as HTMLInputElement;

    if (this.phone) {
      newValue.value = this.phone.number;
    }
    this.onChange(this.phone);
    this.onTouched();
  }
}
