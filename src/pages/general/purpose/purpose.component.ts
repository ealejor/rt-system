import {Component, OnInit} from '@angular/core';
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";

@Component({
    selector: 'app-purpose',
    standalone: true,
    imports: [],
    templateUrl: './purpose.component.html',
    styleUrl: './purpose.component.scss'
})
export class PurposeComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.SHOW_FIRST_FOOTER, true);
    }
}
