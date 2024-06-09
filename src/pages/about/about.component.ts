import {Component, OnInit} from '@angular/core';
import {BreakpointObserver} from "@angular/cdk/layout";

@Component({
    selector: 'app-about',
    standalone: true,
    imports: [],
    templateUrl: './about.component.html',
    styleUrl: './about.component.scss'
})
export class AboutComponent implements OnInit {
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
