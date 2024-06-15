import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';

@Component({
  selector: 'custom-default-button',
  templateUrl: './custom-default-button.component.html',
  styleUrl: './custom-default-button.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule],
})
export class CustomDefaultButtonComponent {
  @Input({ required: true }) label: string = '';
  constructor() {}
}
