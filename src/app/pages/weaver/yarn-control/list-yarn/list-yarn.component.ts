import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'list-yarn',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DemoNgZorroAntdModule,
  ],
  templateUrl: './list-yarn.component.html',
  styleUrl: './list-yarn.component.scss',
})
export class ListYarnComponent {
  routeBand: string = '';
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {
   
  }

  goToAddYarn() {
    this.router.navigate(['private/tejedor/agregar-hilado']);
  }
}
