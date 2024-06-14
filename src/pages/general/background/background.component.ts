import {Component, OnInit} from '@angular/core';
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";
import {TitleComponent} from "@pages/components/title/title.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";
import {OlComponent} from "@pages/components/ol/ol.component";

@Component({
    selector: 'app-background',
    standalone: true,
    imports: [
        TitleComponent,
        ParagraphComponent,
        OlComponent
    ],
    templateUrl: './background.component.html',
    styleUrl: './background.component.scss'
})
export class BackgroundComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }
}
