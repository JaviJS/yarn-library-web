import { CommonModule } from '@angular/common';
import { Component, TemplateRef } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { ActivatedRoute, Router } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { CustomTextButtonComponent } from '../../../components/buttons/custom-text-button/custom-text-button.component';
import { CustomDefaultRoundedButtonComponent } from '../../../components/buttons/custom-default-rounded-button/custom-default-rounded-button.component';
import { CustomDefaultNormalButtonComponent } from '../../../components/buttons/custom-default-normal-button/custom-default-normal-button.component';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { NzModalService, NzModalRef } from 'ng-zorro-antd/modal';
import { CustomNormalButtonComponent } from '../../../components/buttons/custom-normal-button/custom-normal-button.component';
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
    CustomDefaultRoundedButtonComponent,
    CustomDefaultNormalButtonComponent,
    CustomNormalButtonComponent
  ],
})
export class ViewProfileComponent {
  isSmallScreen = false;
  isVisibleFormNewPassword = false;
  constructor(
    private breakPointObserver: BreakpointObserver,
    private modal: NzModalService
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
          this.isSmallScreen = true;
        } else {
          this.isSmallScreen = false;
        }
      });
  }
  showChangePasswordForm(
    tplTitle: TemplateRef<{}>,
    tplContent: TemplateRef<{}>,
    tplFooter: TemplateRef<{}>
  ): void {
    this.isVisibleFormNewPassword = true;
    this.modal.create({
      nzTitle: tplTitle,
      nzContent: tplContent,
      nzFooter: tplFooter,
      nzMaskClosable: false,
      nzClosable: false,
      nzOnOk: () => console.log('Click ok'),
    });
  }
  saveNewPassword(modelRef: NzModalRef): void {
    console.log('Button ok clicked!');
    modelRef.destroy();
    this.isVisibleFormNewPassword = false;
  }

  cancelNewPassword(): void {
    console.log('Button cancel clicked!');
    this.isVisibleFormNewPassword = false;
  }
}
