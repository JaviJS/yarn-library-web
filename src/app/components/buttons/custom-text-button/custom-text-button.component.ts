import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';

@Component({
  selector: 'custom-text-button',
  templateUrl: './custom-text-button.component.html',
  styleUrl: './custom-text-button.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule],
})
export class CustomTextButtonComponent {
  @Input({ required: true }) label: string = '';
  constructor() {}
}
