import {Component, Input} from '@angular/core';

export interface Normal {
    actionActors: string;
    responseSystem: string;
}

@Component({
    selector: 'app-table',
    standalone: true,
    imports: [],
    templateUrl: './table.component.html',
    styleUrl: './table.component.scss'
})
export class TableComponent {
    @Input() data: Normal[] = [];
}
