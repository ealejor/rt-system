import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TitleComponent} from "@pages/components/title/title.component";
import SvgPanZoom from "svg-pan-zoom";
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";
import {SubtitleComponent} from "@pages/components/subtitle/subtitle.component";

@Component({
    selector: 'app-usecase',
    standalone: true,
    imports: [
        TitleComponent,
        SubtitleComponent
    ],
    templateUrl: './usecase.component.html',
    styleUrl: './usecase.component.scss'
})
export class UsecaseComponent implements OnInit, AfterViewInit {
    @ViewChild('ducs', {static: false})
    private svgDucs!: ElementRef<SVGSVGElement>;
    public panZoomDucs!: SvgPanZoom.Instance;

    @ViewChild('ducn', {static: false})
    private svgDucn!: ElementRef<SVGSVGElement>;
    public panZoomDucn!: SvgPanZoom.Instance;


    private displacement: number = 25;

    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }

    ngAfterViewInit(): void {
        this.panZoomDucs = SvgPanZoom(this.svgDucs.nativeElement, {
            zoomEnabled: false,
            controlIconsEnabled: false,
            maxZoom: 1000,
            minZoom: 0.1,
            fit: true,
            center: true,
            preventMouseEventsDefault: true,
        });
        this.panZoomDucn = SvgPanZoom(this.svgDucn.nativeElement, {
            zoomEnabled: false,
            controlIconsEnabled: false,
            maxZoom: 1000,
            minZoom: 0.1,
            fit: true,
            center: true,
            preventMouseEventsDefault: true,
        });
    }

    zoomIn(panZoom: SvgPanZoom.Instance) {
        panZoom.zoomIn();
    }

    zoomOut(panZoom: SvgPanZoom.Instance) {
        panZoom.zoomOut();
    }

    zoomReset(panZoom: SvgPanZoom.Instance) {
        panZoom.reset();
    }

    moveTop(panZoom: SvgPanZoom.Instance) {
        panZoom.panBy({x: 0, y: -this.displacement});
    }

    moveBottom(panZoom: SvgPanZoom.Instance) {
        panZoom.panBy({x: 0, y: this.displacement});
    }

    moveLeft(panZoom: SvgPanZoom.Instance) {
        panZoom.panBy({x: -this.displacement, y: 0});
    }

    moveRight(panZoom: SvgPanZoom.Instance) {
        panZoom.panBy({x: this.displacement, y: 0});
    }
}
