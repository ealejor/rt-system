import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EventBus} from '@app/app.event.bus';
import {Event} from "@app/app.utils";
import {TitleComponent} from "@pages/components/title/title.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";
import SvgPanZoom from "svg-pan-zoom";

@Component({
    selector: 'app-sequence',
    standalone: true,
    imports: [
        TitleComponent,
        ParagraphComponent
    ],
    templateUrl: './sequence.component.html',
    styleUrl: './sequence.component.scss'
})
export class SequenceComponent implements OnInit, AfterViewInit {
    @ViewChild('diagram', {static: false})
    private svg!: ElementRef<SVGSVGElement>;

    private panZoom!: SvgPanZoom.Instance;
    private displacement: number = 25;

    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }

    ngAfterViewInit(): void {
        this.panZoom = SvgPanZoom(this.svg.nativeElement, {
            zoomEnabled: false,
            controlIconsEnabled: false,
            maxZoom: 1000,
            minZoom: 0.1,
            fit: true,
            center: true,
            preventMouseEventsDefault: true,
        });
    }

    zoomIn() {
        this.panZoom.zoomIn();
    }

    zoomOut() {
        this.panZoom.zoomOut();
    }

    zoomReset() {
        this.panZoom.reset();
    }

    moveTop() {
        this.panZoom.panBy({x: 0, y: -this.displacement});
    }

    moveBottom() {
        this.panZoom.panBy({x: 0, y: this.displacement});
    }

    moveLeft() {
        this.panZoom.panBy({x: -this.displacement, y: 0});
    }

    moveRight() {
        this.panZoom.panBy({x: this.displacement, y: 0});
    }
}
