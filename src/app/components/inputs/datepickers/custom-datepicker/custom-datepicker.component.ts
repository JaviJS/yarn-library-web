import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {
  FormControl,
  FormGroup,
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'custom-datepicker',
  templateUrl: './custom-datepicker.component.html',
  styleUrl: './custom-datepicker.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class CustomDatepickerComponent {
  validateForm = this.fb.group({
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    birthdayDate: [null, [Validators.required]],
  });
  constructor(
    private fb: NonNullableFormBuilder
  ) {}

  date = null;
  isEnglish = false;

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
