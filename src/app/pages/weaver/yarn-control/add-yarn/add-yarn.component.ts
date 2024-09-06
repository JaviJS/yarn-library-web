import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, RouterOutlet } from '@angular/router';
import { DemoNgZorroAntdModule } from '../../../../ng-zorro-antd.module';
import { ActivatedRoute, Router } from '@angular/router';
import { CustomButtonComponent } from '../../../../components/buttons/custom-button/custom-button.component';
import { CustomOutlineButtonComponent } from '../../../../components/buttons/custom-outline-button/custom-outline-button.component';
@Component({
  selector: 'add-yarn',
  standalone: true,
  imports: [
    CommonModule,
    RouterModule,
    RouterOutlet,
    DemoNgZorroAntdModule,
    CustomButtonComponent,
    CustomOutlineButtonComponent
  ],
  templateUrl: './add-yarn.component.html',
  styleUrl: './add-yarn.component.scss',
})
export class AddYarnComponent {
  routeBand: string = '';
  index = 0;
  disable = false;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  onIndexChange(index: number): void {
    this.index = index;
  }
  saveStep(): void {
    this.index += 1;
  }
  back(): void {
    this.index -= 1;
  }
 

  done(): void {
    console.log('done');
  }
  goToBack() {
    this.router.navigate(['private/tejedor/hilados']);
  }
}
