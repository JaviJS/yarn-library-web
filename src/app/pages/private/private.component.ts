import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MenuPopoverComponent } from '../../components/popovers/menu-popover/menu-popover.component';
import { UserSidebarComponent } from '../../components/sidebars/user-sidebar/user-sidebar.component';
import { UserNavbarComponent } from '../../components/navbars/user-navbar/user-navbar.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'private',
  standalone: true,
  imports: [
    CommonModule,
    DemoNgZorroAntdModule,
    RouterModule,
    RouterOutlet,
    MenuPopoverComponent,
    UserSidebarComponent,
    UserNavbarComponent,
  ],
  templateUrl: './private.component.html',
  styleUrl: './private.component.scss',
})
export class PrivateComponent {
  routeBand: string = '';
  isCollapsed = true;
  sidebarPosition = 60;
  sidebarWidth = '300px';
  hiddenCard = false;
  options = [
    {
      id: 1,
      name: 'Usuarios',
      path: '/usuarios',
      icon: '../../prueba.png',
    },
    {
      id: 2,
      name: 'Perfiles',
      path: '/perfiles',
      icon: '../../prueba.png',
    },
    {
      id: 3,
      name: 'Instrumentos',
      path: '/instrumentos',
      icon: '../../prueba.png',
    },
    {
      id: 4,
      name: 'Material',
      path: '/material',
      icon: '../../prueba.png',
    },
  ];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private breakPointObserver: BreakpointObserver
  ) {
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
          this.sidebarPosition = 0;
          this.sidebarWidth = '100%';
          this.hiddenCard = true;
        } else {
          this.sidebarPosition = 80;
          this.sidebarWidth = '350px';
          this.hiddenCard = false;
        }
      });
  }
  changeCollapsed($event: any) {
    this.isCollapsed = $event;
  }
}
