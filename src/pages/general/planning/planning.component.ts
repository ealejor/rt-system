import {Component, OnInit} from '@angular/core';
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";
import {TitleComponent} from "@pages/components/title/title.component";

@Component({
    selector: 'app-planning',
    standalone: true,
    imports: [
        TitleComponent
    ],
    templateUrl: './planning.component.html',
    styleUrl: './planning.component.scss'
})
export class PlanningComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }
}
