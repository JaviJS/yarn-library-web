import { CommonModule } from '@angular/common';
import { Component, Input,  } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';

@Component({
  selector: 'custom-normal-button',
  templateUrl: './custom-normal-button.component.html',
  styleUrl: './custom-normal-button.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule],
})
export class CustomNormalButtonComponent {
  @Input({ required: true }) label: string = '';
  constructor() {}

}
