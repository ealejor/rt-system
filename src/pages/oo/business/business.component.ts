import {Component, OnInit} from '@angular/core';
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";
import {TitleComponent} from "@pages/components/title/title.component";
import {SubtitleComponent} from "@pages/components/subtitle/subtitle.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";
import {OlComponent} from "@pages/components/ol/ol.component";
import {UlComponent} from "@pages/components/ul/ul.component";

@Component({
    selector: 'app-business',
    standalone: true,
    imports: [
        TitleComponent,
        SubtitleComponent,
        ParagraphComponent,
        OlComponent,
        UlComponent
    ],
    templateUrl: './business.component.html',
    styleUrl: './business.component.scss'
})
export class BusinessComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }

}
