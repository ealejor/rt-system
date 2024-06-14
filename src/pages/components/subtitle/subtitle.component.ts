import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Margin} from "@pages/components/Margin";

@Component({
    selector: 'app-subtitle',
    standalone: true,
    imports: [
        NgStyle
    ],
    templateUrl: './subtitle.component.html',
    styleUrl: './subtitle.component.scss'
})
export class SubtitleComponent {
    @Input() margin: Margin = {top: 0, bottom: 0};
}
