import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Event} from "@app/app.utils";
import {EventBus} from "@app/app.event.bus";
import {TitleComponent} from "@pages/components/title/title.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";
import {RouterLink} from "@angular/router";


@Component({
    selector: 'app-video',
    standalone: true,
    imports: [
        TitleComponent,
        ParagraphComponent,
        RouterLink
    ],
    templateUrl: './video.component.html',
    styleUrl: './video.component.scss'
})
export class VideoComponent implements OnInit {
    isMobile: boolean = true;

    constructor(
        private responsive: BreakpointObserver,
        private eventBus: EventBus<boolean>
    ) {
    }

    public ngOnInit(): void {
        this.responsive.observe(
            "(max-width: 768px)"
        ).subscribe(result => {
            this.isMobile = result.matches;
        });
        this.eventBus.publish(Event.footer, true);
    }
}
