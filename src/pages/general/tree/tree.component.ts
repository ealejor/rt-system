import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {EventBus} from '@app/app.event.bus';
import {Event} from "@app/app.utils";
import {TitleComponent} from "@pages/components/title/title.component";

@Component({
    selector: 'app-tree',
    standalone: true,
    imports: [
        NgOptimizedImage,
        TitleComponent
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
        this.eventBus.publish(Event.footer, true);
    }
}
