import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';

@Component({
  selector: 'custom-default-rounded-button',
  templateUrl: './custom-default-rounded-button.component.html',
  styleUrl: './custom-default-rounded-button.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule],
})
export class CustomDefaultRoundedButtonComponent {
  @Input({ required: true }) label: string = '';
  constructor() {}
}
