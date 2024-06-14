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

@Component({
    selector: 'app-behaviour',
    standalone: true,
    imports: [
        DiagramComponent,
        TitleComponent,
        SubtitleComponent,
        ParagraphComponent
    ],
    templateUrl: './behaviour.component.html',
    styleUrl: './behaviour.component.scss'
})
export class BehaviourComponent implements OnInit, AfterViewInit {
    @ViewChild('diagram', {static: false}) svg!: ElementRef<SVGSVGElement>;
    public panZoom!: SvgPanZoom.Instance;
    displacement = 50;

    constructor(
        private eventBus: EventBus<boolean>,
        private renderer: Renderer2,
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }

    ngAfterViewInit() {
        const id = document.getElementById('diagram')!;
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
