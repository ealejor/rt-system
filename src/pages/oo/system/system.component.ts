import {Component, OnInit} from '@angular/core';
import {Event} from "@app/app.utils";
import {EventBus} from "@app/app.event.bus";
import {TitleComponent} from "@pages/components/title/title.component";

@Component({
    selector: 'app-system',
    standalone: true,
    imports: [
        TitleComponent
    ],
    templateUrl: './system.component.html',
    styleUrl: './system.component.scss'
})
export class SystemComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }
}