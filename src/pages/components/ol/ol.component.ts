import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Margin} from "@pages/components/Margin";

@Component({
    selector: 'app-ol',
    standalone: true,
    imports: [
        NgStyle
    ],
    templateUrl: './ol.component.html',
    styleUrl: './ol.component.scss'
})
export class OlComponent {
    @Input() margin: Margin = {top: 0, bottom: 0};
    @Input() tab: number = 0;
    @Input() num: number = 0;
}
