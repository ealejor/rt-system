import {Component, OnInit} from '@angular/core';
import {EventBus} from '@app/app.event.bus';
import {Event} from "@app/app.utils";

@Component({
    selector: 'app-sequence',
    standalone: true,
    imports: [],
    templateUrl: './sequence.component.html',
    styleUrl: './sequence.component.scss'
})
export class SequenceComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {

    }

    ngOnInit(): void {
        this.eventBus.publish(Event.SHOW_FIRST_FOOTER, true);
    }
}
