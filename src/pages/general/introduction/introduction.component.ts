import {Component, OnInit} from '@angular/core';
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";
import {TitleComponent} from "@pages/components/title/title.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";

@Component({
    selector: 'app-introduction',
    standalone: true,
    imports: [
        TitleComponent,
        ParagraphComponent
    ],
    templateUrl: './introduction.component.html',
    styleUrl: './introduction.component.scss'
})
export class IntroductionComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }
}
