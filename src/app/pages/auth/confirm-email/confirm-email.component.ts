import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../../../components/buttons/custom-button/custom-button.component';
import { CustomTextButtonComponent } from '../../../components/buttons/custom-text-button/custom-text-button.component';
import { CustomOtpInputComponent } from '../../../components/inputs/otp-inputs/custom-otp-input/custom-otp-input.component';
import { NgOtpInputModule, NgOtpInputConfig } from 'ng-otp-input';
import {
  NonNullableFormBuilder,
  Validators,
  FormGroup,
  FormControl,
} from '@angular/forms';
@Component({
  selector: 'confirm-email.',
  templateUrl: './confirm-email.component.html',
  styleUrl: './confirm-email.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DemoNgZorroAntdModule,
    FormsModule,
    ReactiveFormsModule,
    CustomButtonComponent,
    CustomTextButtonComponent,
    CustomOtpInputComponent,
    NgOtpInputModule,
  ],
})
export class ConfirmEmailComponent {
  validateForm: FormGroup<{
    code: FormControl<string>;
  }>;
  constructor(
    private fb: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.validateForm = this.fb.group({
      code: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }
  submitForm(): void {
    if (this.validateForm.valid) {
      //ir a metodo confirmEmail, pasar objeto
      console.log('submit', this.validateForm.value);
      this.goToLogin();
    } else {
      console.log('form con error');
    }
  }
  goToLogin() {
    // this.router.navigate(['/auth/login']);
  }
}
