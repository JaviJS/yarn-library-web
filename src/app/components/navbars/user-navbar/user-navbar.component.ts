import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { MenuPopoverComponent } from '../../../components/popovers/menu-popover/menu-popover.component';
@Component({
  selector: 'user-navbar',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule, MenuPopoverComponent],
  templateUrl: './user-navbar.component.html',
  styleUrl: './user-navbar.component.scss',
})
export class UserNavbarComponent {
  @Output() isCollapsedEmit = new EventEmitter<boolean>();
  hiddenCard = false;
  isCollapsed = false;
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
