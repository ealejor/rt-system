import {Component, Input} from '@angular/core';
import {NgStyle} from "@angular/common";
import {Margin} from "@pages/components/Margin";

/*export enum ParagraphType {
    normal = 'normal',
    vignette = 'vignette',
    numbering = 'numbering'
}*/

@Component({
    selector: 'app-paragraph',
    standalone: true,
    imports: [
        NgStyle
    ],
    templateUrl: './paragraph.component.html',
    styleUrl: './paragraph.component.scss'
})
export class ParagraphComponent {
    @Input() tab: number = 0;
    @Input() margin: Margin = {top: 0, bottom: 0};
}
