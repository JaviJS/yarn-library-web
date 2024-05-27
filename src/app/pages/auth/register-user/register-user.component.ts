import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDatepickerComponent } from '../../../components/inputs/datepickers/custom-datepicker/custom-datepicker.component';
import { ValidateInputComponent } from '../../../components/inputs/inputs/validate-input/validate-input.component';
import { PhoneInputComponent } from '../../../components/inputs/inputs/phone-input/phone-input.component';
import { ValidateSelectComponent } from '../../../components/inputs/selects/validate-select/validate-select.component';
import { PasswordFormInputComponent } from '../../../components/inputs/inputs/password-form-input/password-form-input.component';
import { NonNullableFormBuilder, Validators } from '@angular/forms';
import { NgxIntlTelInputModule } from 'ngx-intl-tel-input-gg';
import { SearchCountryField, CountryISO, PhoneNumberFormat } from 'ngx-intl-tel-input-gg';
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
    ValidateSelectComponent,
    PhoneInputComponent,
    NgxIntlTelInputModule
  ],
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
    phoneNumber: [undefined, [Validators.required]],
  });
  SearchCountryField = SearchCountryField;
	CountryISO = CountryISO;
  PhoneNumberFormat = PhoneNumberFormat;
	preferredCountries: CountryISO[] = [CountryISO.Chile];
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
  
  isValid(): string {
    if (!this.validateForm.controls['phoneNumber']?.touched) {
      return '';
    }
    console.log(!this.validateForm.controls['phoneNumber']?.valid);
    return !this.validateForm.controls['phoneNumber']?.valid ? 'error' : 'success';
  }
}
