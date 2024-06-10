import {Component, OnInit} from '@angular/core';
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";

@Component({
    selector: 'app-methodology',
    standalone: true,
    imports: [],
    templateUrl: './methodology.component.html',
    styleUrl: './methodology.component.scss'
})
export class MethodologyComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.SHOW_FIRST_FOOTER, true);
    }
}
