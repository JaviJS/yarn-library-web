import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { ProfileCardComponent } from '../../cards/profile-card/profile-card.component';
import { Router } from '@angular/router';
@Component({
  selector: 'menu-popover',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule, ProfileCardComponent],
  templateUrl: './menu-popover.component.html',
  styleUrl: './menu-popover.component.scss',
})
export class MenuPopoverComponent {
  @Input({ required: true }) icon: string = '';
  @Input({ required: true }) typeColor: string = '';
  user = {
    name: 'Javiera Jara Salas',
    email: 'javivimi14@gmail.com',
    imageUrl:
      'https://i.pinimg.com/736x/68/c4/ae/68c4aefdec873e363f456f1da413c352.jpg',
    profile: [
      {
        id: 1,
        code: 'admin',
        name: 'Administrador',
      },
      {
        id: 2,
        code: 'weaver',
        name: 'Tejedor',
      },
    ],
  };
  card = {
    title: this.user.name,
    description: this.user.email,
    avatar: this.user.imageUrl,
  };
  constructor(private router: Router) {}
  goToSelectedProfile() {
    this.router.navigate(['auth/seleccionar-perfil']);
  }
  goToProfile() {
    this.router.navigate(['private/perfil']);
  }
}
