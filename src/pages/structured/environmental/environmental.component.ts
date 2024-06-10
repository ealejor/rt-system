import {Component, OnInit} from '@angular/core';
import {EventBus} from '@app/app.event.bus';
import {Event} from "@app/app.utils";

@Component({
    selector: 'app-environmental',
    standalone: true,
    imports: [],
    templateUrl: './environmental.component.html',
    styleUrl: './environmental.component.scss'
})
export class EnvironmentalComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.SHOW_FIRST_FOOTER, true);
    }
}
