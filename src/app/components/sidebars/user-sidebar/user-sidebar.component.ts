import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MenuPopoverComponent } from '../../../components/popovers/menu-popover/menu-popover.component';
@Component({
  selector: 'user-sidebar',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule, MenuPopoverComponent],
  templateUrl: './user-sidebar.component.html',
  styleUrl: './user-sidebar.component.scss',
})
export class UserSidebarComponent {
  // @Input({required: true}) options: [] = [];
  @Input({ required: true }) isCollapsed: boolean = false;
  sidebarPosition = 60;
  sidebarWidth = '300px';
  hiddenCard = false;
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
}
