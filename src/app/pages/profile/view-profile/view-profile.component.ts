import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
@Component({
  selector: 'view-profile',
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule, RouterOutlet,
    DemoNgZorroAntdModule,
  ],
})
export class ViewProfileComponent {
  constructor() {}
}
