import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDatepickerComponent } from '../../../components/inputs/datepickers/custom-datepicker/custom-datepicker.component';
import { ValidateInputComponent } from '../../../components/inputs/inputs/validate-input/validate-input.component';
import { ValidateSelectComponent } from '../../../components/inputs/selects/validate-select/validate-select.component';
import { PasswordFormInputComponent } from '../../../components/inputs/inputs/password-form-input/password-form-input.component';
import {
  NonNullableFormBuilder,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'register-user',
  templateUrl: './register-user.component.html',
  styleUrl: './register-user.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CustomDatepickerComponent,
    ValidateInputComponent,
    PasswordFormInputComponent,
    ValidateSelectComponent
  ]
})
export class RegisterUserComponent {
  listGenders = ['Femenino', 'Masculino', 'Otro', 'Prefiero no decirlo'];
  validateForm = this.fb.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
    repeatPassword: ['', [Validators.required]],
    birthdayDate: [null, [Validators.required]],
    gender: ['', [Validators.required]],
    phoneNumber: ['', [Validators.required]],
  });
  constructor(
    private fb: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}
  submitForm(): void {
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
        }
      });
    }
  }
  goToLogin() {
    // this.router.navigate(['/auth/login']);
    console.log(this.validateForm.value);
  }

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
