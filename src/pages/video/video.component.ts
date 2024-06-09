import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";
import {ZoomingComponent} from "@app/pages/zooming/zooming.component";
import SvgPanZoom from 'svg-pan-zoom';



@Component({
    selector: 'app-video',
    standalone: true,
    imports: [
        ZoomingComponent
    ],
    templateUrl: './video.component.html',
    styleUrl: './video.component.scss'
})
export class VideoComponent implements OnInit {
    isMobile: boolean = true;

    constructor(private responsive: BreakpointObserver) {
    }

    public ngOnInit(): void {
        this.responsive.observe(
            "(max-width: 768px)"
        ).subscribe(result => {
            this.isMobile = result.matches;
        });
    }
}
