import {Component, OnInit} from '@angular/core';
import {FormsModule} from "@angular/forms";
import {BreakpointObserver} from "@angular/cdk/layout";
import {Breakpoint, Event} from "@app/app.utils";

@Component({
    selector: 'app-first-footer',
    standalone: true,
    imports: [
        FormsModule
    ],
    templateUrl: './first.component.html',
    styleUrl: './first.component.scss'
})
export class FirstFooterComponent implements OnInit {
    value: string = '';

    send(): void {
        this.value = '';
    }

    public isMobile: boolean = false;

    constructor(private responsive: BreakpointObserver) {
        this.isMobile = this.responsive.isMatched(Breakpoint.MOBILE);
    }

    public ngOnInit(): void {
        this.responsive.observe(Event.IS_MOBILE).subscribe(result => {
            this.isMobile = result.matches;
        });
    }
}
