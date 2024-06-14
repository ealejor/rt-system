import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Margin} from "@pages/components/Margin";

@Component({
    selector: 'app-title',
    standalone: true,
    imports: [
        NgStyle
    ],
    templateUrl: './title.component.html',
    styleUrl: './title.component.scss'
})
export class TitleComponent {
    @Input() margin: Margin = {top: 0, bottom: 0};
}
