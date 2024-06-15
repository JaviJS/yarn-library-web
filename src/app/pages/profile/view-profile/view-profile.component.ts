import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { CustomTextButtonComponent } from '../../../components/buttons/custom-text-button/custom-text-button.component';
import { CustomDefaultButtonComponent } from '../../../components/buttons/custom-default-button/custom-default-button.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'view-profile',
  templateUrl: './view-profile.component.html',
  styleUrl: './view-profile.component.scss',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DemoNgZorroAntdModule,
    CustomTextButtonComponent,
    CustomDefaultButtonComponent
  ],
})
export class ViewProfileComponent {
  isSmallScreen = false;
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
          this.isSmallScreen = true;
        } else {
          this.isSmallScreen = false;
        }
      });
  }
}
