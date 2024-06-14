import {AfterViewInit, Component, ElementRef, ViewChild} from '@angular/core';
import SvgPanZoom from "svg-pan-zoom";
import {Event} from "@app/app.utils";

@Component({
    selector: 'app-diagram',
    standalone: true,
    imports: [],
    templateUrl: './diagram.component.html',
    styleUrl: './diagram.component.scss'
})
export class DiagramComponent implements AfterViewInit {
    @ViewChild('diagram', {static: false}) svg!: ElementRef<SVGSVGElement>;
    public panZoom!: SvgPanZoom.Instance;

    ngAfterViewInit() {
        this.panZoom = SvgPanZoom(this.svg.nativeElement, {
            zoomEnabled: true,
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
        this.panZoom.panBy({x: 0, y: -10}); // Desplaza 5 píxeles hacia arriba
    }

    moveBottom() {
        this.panZoom.panBy({x: 0, y: 10}); // Desplaza 5 píxeles hacia abajo
    }

    moveLeft() {
        this.panZoom.panBy({x: -10, y: 0}); // Desplaza 5 píxeles hacia la izquierda
    }

    moveRight() {
        this.panZoom.panBy({x: 10, y: 0}); // Desplaza 5 píxeles hacia la derecha
    }
}
