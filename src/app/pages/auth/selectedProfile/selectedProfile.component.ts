import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
@Component({
  selector: 'app-selectedProfile',
  templateUrl: './selectedProfile.component.html',
  styleUrl: './selectedProfile.component.scss',
  standalone: true,
  imports: [CommonModule, RouterModule, RouterOutlet, DemoNgZorroAntdModule],
})
export class SelectedProfileComponent {
  routeBand: string = '';
  title = 'selectedProfile-component';
  rols = [
    {
      code: 'admin',
      name: 'Administrador',
    },
    {
      code: 'weaver',
      name: 'Tejedor',
    },
  ];
  nameUser = 'Javiera Jara Salas';

  constructor(private route: ActivatedRoute, private router: Router) {}

  goToSelectedProfile(event: any, rol: any) {
    if (rol.code === 'admin') {
      this.router.navigate(['/private/admin/']);
    } else if (rol.code === 'weaver') {
      this.router.navigate(['/private/tejedor/']);
    }
  }
  goToLogin() {
    this.router.navigate(['/auth/login/']);
  }
}
