import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';

@Component({
  selector: 'time-label',
  templateUrl: './time-label.component.html',
  styleUrl: './time-label.component.scss',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule]
})
export class TimeLabelComponent   {
  @Input({ required: true }) timerDisplay: string = '';
  constructor() {}

}
