import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';
import { MenuPopoverComponent } from '../../components/popovers/menu-popover/menu-popover.component';
import { ActivatedRoute, Router } from '@angular/router';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
@Component({
  selector: 'admin-page-bts',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DemoNgZorroAntdModule,
    MenuPopoverComponent,
  ],
  templateUrl: './admin-page.component.html',
  styleUrl: './admin-page.component.scss',
})
export class AdminPageComponent {
  routeBand: string = '';
  isCollapsed = false;
  sidebarPosition = 60;
  sidebarWidth = '300px';
  hiddenCard = false;
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
      .subscribe((result) => {
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
  ngOnInit(): void {
    this.getBandRoute();
  }
  getBandRoute() {
    // let band = this.route.snapshot.paramMap.get('band');
    // if (band) {
    //   const findBand = this.bands.find((x) => x.code_name === band);
    //   console.log({findBand});
    //   if (findBand) {
    //     this.routeBand = findBand?.name;
    //   } else {
    //     this.router.navigate(['/not-found/']);
    //   }
    // }
  }
}
