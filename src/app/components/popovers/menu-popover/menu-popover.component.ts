import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'menu-popover',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './menu-popover.component.html',
    styleUrl: './menu-popover.component.scss'
})

export class MenuPopoverComponent {
    @Input({required: true}) direction: string = '';
}