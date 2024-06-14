import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Margin} from "@pages/components/Margin";

@Component({
    selector: 'app-ul',
    standalone: true,
    imports: [
        NgStyle
    ],
    templateUrl: './ul.component.html',
    styleUrl: './ul.component.scss'
})
export class UlComponent {
    @Input() marginTop: number = 0;
    @Input() marginBottom: number = 0;
    @Input() tab: number = 0;
    @Input() margin: Margin = {top: 0, bottom: 0};
}
