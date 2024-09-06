import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
@Component({
  selector: 'weaver-page',
  standalone: true,
  imports: [CommonModule, RouterOutlet, DemoNgZorroAntdModule],
  templateUrl: './weaver-page.component.html',
  styleUrl: './weaver-page.component.scss',
})
export class WeaverPageComponent {
  constructor() {}
}
