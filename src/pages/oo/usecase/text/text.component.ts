import {Component, Input} from '@angular/core';
import {PdfViewerModule} from "ng2-pdf-viewer";
import {Normal, TableComponent} from "@pages/components/table/table.component";
import {UlComponent} from "@pages/components/ul/ul.component";

export interface UseCaseExtended {
    usecase: string;
    actors: string;
    type: string;
    objective: string;
    resume: string;
    normal: Normal[],
    alternative: string[],
}

@Component({
    selector: 'app-text',
    standalone: true,
    imports: [
        PdfViewerModule,
        TableComponent,
        UlComponent
    ],
    templateUrl: './text.component.html',
    styleUrl: './text.component.scss'
})
export class TextComponent {
    @Input() useCaseExtended!: UseCaseExtended
}
