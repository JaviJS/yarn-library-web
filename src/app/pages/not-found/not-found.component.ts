import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoNgZorroAntdModule } from '../../ng-zorro-antd.module';

@Component({
    selector: 'app-not-found',
    standalone: true,
    imports: [CommonModule, DemoNgZorroAntdModule],
    templateUrl: './not-found.component.html',
    styleUrl: './not-found.component.scss'
})

export class NotFoundComponent {
    
}