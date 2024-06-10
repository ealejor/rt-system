import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {Event} from "@app/app.utils";
import {EventBus} from "@app/app.event.bus";


@Component({
    selector: 'app-video',
    standalone: true,
    imports: [],
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
        this.eventBus.publish(Event.SHOW_FIRST_FOOTER, true);
    }
}
