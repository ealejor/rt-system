import {Component, OnInit} from '@angular/core';
import {Event} from "@app/app.utils";
import {EventBus} from "@app/app.event.bus";

@Component({
    selector: 'app-tuition',
    standalone: true,
    imports: [],
    templateUrl: './tuition.component.html',
    styleUrl: './tuition.component.scss'
})
export class TuitionComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.SHOW_FIRST_FOOTER, true);
    }
}
