import {Component, OnInit} from '@angular/core';
import {Event} from "@app/app.utils";
import {EventBus} from "@app/app.event.bus";

@Component({
    selector: 'app-behaviour',
    standalone: true,
    imports: [],
    templateUrl: './behaviour.component.html',
    styleUrl: './behaviour.component.scss'
})
export class BehaviourComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.SHOW_FIRST_FOOTER, true);
    }

}
