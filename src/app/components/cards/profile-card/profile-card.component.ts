import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
import { MenuPopoverComponent } from '../../popovers/menu-popover/menu-popover.component';
import { Card } from '../../../models/card.model';
@Component({
  selector: 'profile-card',
  standalone: true,
  imports: [CommonModule, DemoNgZorroAntdModule, MenuPopoverComponent],
  templateUrl: './profile-card.component.html',
  styleUrl: './profile-card.component.scss',
})
export class ProfileCardComponent {
  @Input({ required: true }) card: Card = {
    title: '',
    description: '',
    avatar: ''
  };
  @Input({required: true}) typeColor: string = '';
}
