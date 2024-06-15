import {AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild} from '@angular/core';
import {Event} from "@app/app.utils";
import {EventBus} from "@app/app.event.bus";
import SvgPanZoom from 'svg-pan-zoom';
import {DiagramComponent} from "@pages/components/diagram/diagram.component";
import {TitleComponent} from "@pages/components/title/title.component";
import {SubtitleComponent} from "@pages/components/subtitle/subtitle.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";
import {DomSanitizer, SafeHtml} from "@angular/platform-browser";
import {HttpClient} from "@angular/common/http";
import {UlComponent} from "@pages/components/ul/ul.component";
import {RouterLink} from "@angular/router";

@Component({
    selector: 'app-behaviour',
    standalone: true,
    imports: [
        DiagramComponent,
        TitleComponent,
        SubtitleComponent,
        ParagraphComponent,
        UlComponent,
        RouterLink
    ],
    templateUrl: './behaviour.component.html',
    styleUrl: './behaviour.component.scss'
})
export class BehaviourComponent implements OnInit, AfterViewInit {
    @ViewChild('diagram1', {static: false})
    private diagram1!: ElementRef<SVGSVGElement>;
    public panZoom1!: SvgPanZoom.Instance;

    @ViewChild('diagram2', {static: false})
    private diagram2!: ElementRef<SVGSVGElement>;
    public panZoom2!: SvgPanZoom.Instance;


    private displacement: number = 25;

    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }

    ngAfterViewInit(): void {
        this.panZoom1 = SvgPanZoom(this.diagram1.nativeElement, {
            zoomEnabled: false,
            controlIconsEnabled: false,
            maxZoom: 1000,
            minZoom: 0.1,
            fit: true,
            center: true,
            preventMouseEventsDefault: true,
        });
        this.panZoom2 = SvgPanZoom(this.diagram2.nativeElement, {
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
