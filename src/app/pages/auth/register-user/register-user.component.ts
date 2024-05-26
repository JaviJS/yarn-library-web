import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomDatepickerComponent } from '../../../components/inputs/datepickers/custom-datepicker/custom-datepicker.component';
import { ValidateInputComponent } from '../../../components/inputs/inputs/validate-input/validate-input.component';
import {
  FormControl,
  FormGroup,
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
    ValidateInputComponent
  ]
})
export class RegisterUserComponent {
  passwordVisible = false;
  password?: string;
  listGenders = ['Femenino', 'Masculino', 'Otro', 'Prefiero no decirlo'];
  selectedValue = '';
  validateForm = this.fb.group({
    nameUser: ['', [Validators.required]],
    userName: ['', [Validators.required]],
    password: ['', [Validators.required]],
    birthdayDate: [null, [Validators.required]],
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

  date = null;
  isEnglish = false;

  onChange(result: Date): void {
    console.log('onChange: ', result);
  }
}
