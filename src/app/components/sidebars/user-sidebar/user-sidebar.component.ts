import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { ProfileCardComponent } from '../../../components/cards/profile-card/profile-card.component';
import { MenuPopoverComponent } from '../../popovers/menu-popover/menu-popover.component';
@Component({
  selector: 'user-sidebar',
  standalone: true,
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    ProfileCardComponent,
    MenuPopoverComponent,
  ],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.scss',
})
export class UserSidebarComponent {
  // @Input({required: true}) options: [] = [];
  @Input({ required: true }) isCollapsed: boolean = true;
  hiddenBtn = true;
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
    icon: 'right'
  };
  constructor(private breakPointObserver: BreakpointObserver) {
    this.breakPointObserver
      .observe([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
      ])
      .subscribe(result => {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.hiddenBtn = false;
        } else {
          this.hiddenBtn = true;
        }
      });
  }
}
