import { CommonModule } from '@angular/common';
import { Component, Input, forwardRef } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import {
  ReactiveFormsModule,
  ControlValueAccessor,
  NG_VALUE_ACCESSOR,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'validate-input',
  templateUrl: './validate-input.component.html',
  styleUrl: './validate-input.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule, ReactiveFormsModule],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ValidateInputComponent),
      multi: true,
    },
  ],
})
export class ValidateInputComponent implements ControlValueAccessor {
  @Input({ required: true }) id: string = '';
  @Input({ required: true }) errorTip: string = '';
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) placeholder: string = '';
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) formControl: FormControl | undefined;
  value: string = '';

  constructor() {}

  isValid(): string {
    if (!this.formControl?.touched) {
      return '';
    }
    console.log(this.formControl.valid );
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
    this.onChange(newValue);
    this.onTouched();
  }
}
