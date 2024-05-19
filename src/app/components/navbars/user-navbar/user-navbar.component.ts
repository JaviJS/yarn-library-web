import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import {ProfileCardComponent} from '../../cards/profile-card/profile-card.component';
import {MenuPopoverComponent} from '../../popovers/menu-popover/menu-popover.component';
@Component({
  selector: 'user-navbar',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule, ProfileCardComponent, MenuPopoverComponent],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.scss',
})
export class UserNavbarComponent {
  @Output() isCollapsedEmit = new EventEmitter<boolean>();
  hiddenCard = false;
  isCollapsed = false;
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
    icon: 'down'
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
          this.hiddenCard = true;
        } else {
          this.hiddenCard = false;
        }
      });
  }
  changeCollapsed(value: boolean) {
    this.isCollapsedEmit.emit(value);
  }
}
