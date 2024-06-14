import {Component, OnInit} from '@angular/core';
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";
import {TitleComponent} from "@pages/components/title/title.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";
import {SubtitleComponent} from "@pages/components/subtitle/subtitle.component";
import {UlComponent} from "@pages/components/ul/ul.component";

@Component({
    selector: 'app-approach',
    standalone: true,
    imports: [
        TitleComponent,
        ParagraphComponent,
        SubtitleComponent,
        UlComponent
    ],
    templateUrl: './approach.component.html',
    styleUrl: './approach.component.scss'
})
export class ApproachComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }
}
