import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {EventBus} from '@app/app.event.bus';
import {Event} from "@app/app.utils";

@Component({
    selector: 'app-tree',
    standalone: true,
    imports: [
        NgOptimizedImage
    ],
    templateUrl: './tree.component.html',
    styleUrl: './tree.component.scss'
})
export class TreeComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.SHOW_FIRST_FOOTER, true);
    }
}
