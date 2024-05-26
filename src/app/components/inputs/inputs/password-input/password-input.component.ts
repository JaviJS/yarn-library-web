import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import {
  NonNullableFormBuilder,
} from '@angular/forms';
@Component({
  selector: 'password-input',
  templateUrl: './password-input.component.html',
  styleUrl: './password-input.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    DemoNgZorroAntdModule
  ],
})
export class ValidateInputComponent {

  @Input({ required: true }) errorTip: string = '';
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) placeholder: string = '';
  @Input({ required: true }) formControlName: NonNullableFormBuilder = '';
  
  constructor(
    private fb: NonNullableFormBuilder
  ) {}
}
