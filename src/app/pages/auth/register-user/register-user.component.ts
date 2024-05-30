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
import { CustomButtonComponent } from '../../../components/buttons/custom-button/custom-button.component';
import {
  NonNullableFormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  FormGroup,
  FormControl,
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
    ValidateSelectComponent,
    PhoneInputComponent,
    CustomButtonComponent
  ],
})
export class RegisterUserComponent {
  listGenders = ['Femenino', 'Masculino', 'Otro', 'Prefiero no decirlo'];
  validateForm: FormGroup<{
    name: FormControl<string>;
    email: FormControl<string>;
    password: FormControl<string>;
    repeatPassword: FormControl<string>;
    birthdayDate: FormControl<any>;
    gender: FormControl<string>;
    phoneNumber: FormControl<any>;
  }>;

  errorsName = {
    required: 'Porfavor, ingresa tu nombre!',
    minLength: 'Porfavor, ingresa un minimo de 3 caracteres!',
    maxLength: 'Porfavor, ingresa un máximo de 50 caracteres!',
    pattern: 'El formato deben corresponder a solo letras y espacios.',
  };
  errorsEmail = {
    required: 'Porfavor, ingresa tu nombre!',
    pattern: 'El formato debe ser ###@###.##, ejemplo hola@hotmail.cl!',
  };
  errorsPassword = {
    required: 'Porfavor, ingresa tu contraseña!',
  };
  errorsRepeatPassword = {
    required: 'Porfavor, ingresa nuevamente tu contraseña!',
    confirm: 'Las contraseñas que ingresas no coinciden',
  };
  constructor(
    private fb: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      name: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(50),
          Validators.pattern('^[A-Za-z ]+$'),
        ],
      ],
      email: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,4}$'
          ),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.pattern(
            '^(?=.*[A-Z])(?=.*[a-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,15}$'
          ),
        ],
      ],
      repeatPassword: ['', [Validators.required, this.confirmationValidator]],
      birthdayDate: [null, [Validators.required]],
      gender: ['', [Validators.required]],
      phoneNumber: [undefined, [Validators.required]],
    });
  }
  submitForm(): void {
    console.log('entro a submit');
    if (this.validateForm.valid) {
      console.log('submit', this.validateForm.value);
    } else {
      // this.validateForm.markAsDirty()
      // this.validateForm.updateValueAndValidity()
      Object.values(this.validateForm.controls).forEach(control => {
        if (control.invalid) {
          console.log('Estado después de marcar como sucio y actualizar:', control.dirty, control.invalid);
          control.markAsDirty();
          control.updateValueAndValidity({ onlySelf: true });
          console.log('Estado después de marcar como sucio y actualizar:', control.dirty, control.invalid);
        }
      });
    }
  }
  goToLogin() {
    // this.router.navigate(['/auth/login']);
    console.log(this.validateForm.value);
  }
  isValid(): string {
    if (!this.validateForm.controls['phoneNumber']?.touched) {
      return '';
    }
    console.log(!this.validateForm.controls['phoneNumber']?.valid);
    return !this.validateForm.controls['phoneNumber']?.valid
      ? 'error'
      : 'success';
  }
  confirmationValidator: ValidatorFn = (
    control: AbstractControl
  ): { [s: string]: boolean } => {
    if (this.validateForm) {
      if (!control.value) {
        return { required: true };
      } else if (control.value !== this.validateForm.controls.password.value) {
        return { confirm: true, error: true };
      }
      return {};
    }
    return {};
  };
}
