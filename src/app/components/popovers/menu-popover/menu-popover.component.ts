import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../../../ng-zorro-antd.module';
@Component({
    selector: 'menu-popover',
    standalone: true,
    imports: [CommonModule, DemoNgZorroAntdModule],
    templateUrl: './menu-popover.component.html',
    styleUrl: './menu-popover.component.scss'
})

export class MenuPopoverComponent {
    @Input({required: true}) icon: string = '';
}