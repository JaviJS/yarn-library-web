import { CommonModule } from '@angular/common';
import { Component, Input,  } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';

@Component({
  selector: 'custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule],
})
export class CustomButtonComponent {
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) btnClass: string = '';
  constructor() {}

}
