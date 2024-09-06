import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';

@Component({
  selector: 'custom-default-normal-button',
  templateUrl: './custom-default-normal-button.component.html',
  styleUrl: './custom-default-normal-button.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule],
})
export class CustomDefaultNormalButtonComponent {
  @Input({ required: true }) label: string = '';
  constructor() {}
}
