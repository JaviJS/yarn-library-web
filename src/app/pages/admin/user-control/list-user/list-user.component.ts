import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'list-user',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DemoNgZorroAntdModule,
  ],
  templateUrl: './list-user.component.html',
  styleUrl: './list-user.component.scss',
})
export class ListUserComponent {
  routeBand: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
   
  }
}
