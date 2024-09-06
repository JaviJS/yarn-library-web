import { CommonModule } from '@angular/common';
import { Component, Input,  } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';

@Component({
  selector: 'custom-outline-button',
  templateUrl: './custom-outline-button.component.html',
  styleUrl: './custom-outline-button.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule],
})
export class CustomOutlineButtonComponent {
  @Input({ required: true }) label: string = '';
  @Input({ required: true }) btnClass: string = '';
  constructor() {}

}
