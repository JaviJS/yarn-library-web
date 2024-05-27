import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input-gg';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input-gg';
import {
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'phone-input',
  templateUrl: './phone-input.component.html',
  styleUrl: './phone-input.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule, ReactiveFormsModule,NgxIntlTelInputModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() =>PhoneInputComponent),
      multi: true,
    },
  ],
})
export class PhoneInputComponent implements ControlValueAccessor {
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) errorTip: string = '';
  @Input({ required: true }) placeholder: string = '';
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) formControl: FormControl | undefined;
  phone: string = '';
  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Chile];
  constructor() {}

  isValid(): string {
    if (!this.formControl?.touched) {
      return '';
    }
    console.log('entro aqui');
    return !this.formControl?.valid ? 'error' : 'success';
  }
  changePreferredCountries() {
		this.preferredCountries = [CountryISO.India, CountryISO.Canada];
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
    const newValue = (event.target as HTMLInputElement).value;
    this.phone = newValue;
    this.onChange(newValue);
    this.onTouched();
  }
}
