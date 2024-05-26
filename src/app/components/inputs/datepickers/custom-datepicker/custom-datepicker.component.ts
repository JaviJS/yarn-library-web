import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import {
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
  FormsModule
} from '@angular/forms';
@Component({
  selector: 'custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrl: './custom-datepicker.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule, ReactiveFormsModule, FormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => CustomDatepickerComponent),
      multi: true,
    },
  ],
})
export class CustomDatepickerComponent implements ControlValueAccessor {
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) errorTip: string = '';
  @Input({ required: true }) placeholder: string = '';
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) formControl: FormControl | undefined;
  date: Date = new Date();

  constructor() {}

  isValid(): string {
    if (!this.formControl?.touched) {
      return '';
    }
    return !this.formControl?.valid ? 'error' : 'success';
  }

  // Métodos requeridos por ControlValueAccessor
  onChange: any = (result: Date) => {
    console.log('onChange: ', result);
  };
  onTouched: any = () => {};

  writeValue(value: any): void {
    this.date = value;
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

  onInputChange(date: Date) {
    this.date = date;
    this.onChange(date);
    this.onTouched();
  }
}
