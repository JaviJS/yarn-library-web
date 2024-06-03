import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CustomButtonComponent } from '../../../components/buttons/custom-button/custom-button.component';
import { CustomTextButtonComponent } from '../../../components/buttons/custom-text-button/custom-text-button.component';
import { CustomOtpInputComponent } from '../../../components/inputs/otp-inputs/custom-otp-input/custom-otp-input.component';
import { TimeLabelComponent } from '../../../components/labels/time-label/time-label.component';
import { NzMessageService } from 'ng-zorro-antd/message';
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
    TimeLabelComponent,
  ],
})
export class ConfirmEmailComponent {
  validateForm: FormGroup<{
    code: FormControl<string>;
  }>;
  
  timerDisplay: string = '00:59';
  private totalSeconds: number = 0;
  private timerInterval: any;
  constructor(
    private fb: NonNullableFormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private message: NzMessageService
  ) {
    this.validateForm = this.fb.group({
      code: [
        '',
        [Validators.required, Validators.minLength(6), Validators.maxLength(6)],
      ],
    });
  }

  ngOnInit() {
    this.totalSeconds = this.convertToSeconds(0, 5);
    this.updateTimer(); // Llamada inicial para mostrar el tiempo inmediatamente
    this.timerInterval = setInterval(() => this.updateTimer(), 1000);
  }
  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  private convertToSeconds(minutes: number, seconds: number): number {
    return minutes * 60 + seconds;
  }

  private convertToMinutesSeconds(totalSeconds: number): string {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }

  private updateTimer() {
    if (this.totalSeconds >= 0) {
      this.timerDisplay = this.convertToMinutesSeconds(this.totalSeconds);
      this.totalSeconds--;
    } else {
      console.log(this.totalSeconds);
      clearInterval(this.timerInterval);
      this.createMessage();
    }
  }
  resetCode(){
    clearInterval(this.timerInterval);
    this.totalSeconds = this.convertToSeconds(0, 5);
    this.updateTimer(); // Llamada inicial para mostrar el tiempo inmediatamente
    this.timerInterval = setInterval(() => this.updateTimer(), 1000);
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
  createMessage(): void {
    this.message.create('error', `Codigo ha expirado, haz click en 'Reenviar código'`);
  }
}
