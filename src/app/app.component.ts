import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {BreakpointObserver} from "@angular/cdk/layout";
import {EventBus} from "@app/app.event.bus";
import {Breakpoint, Event} from "@app/app.utils";
import {HeaderComponent} from "@app/header/header.component";
import {MainComponent} from "@app/main/main.component";
import {FirstFooterComponent} from "@app/footer/first/first.component";
import {LastFooterComponent} from "@app/footer/last/last.component";

@Component({
    selector: 'app-root',
    standalone: true,
    imports: [RouterOutlet, HeaderComponent, MainComponent, FirstFooterComponent, LastFooterComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
    isMobile: boolean = false;
    isTablet: boolean = false;
    showFirstFooter: boolean = true;
    isNotFound: boolean = false;

    public constructor(
        private breakpoint: BreakpointObserver,
        private eventBus: EventBus<boolean>
    ) {
        this.isMobile = this.breakpoint.isMatched(Breakpoint.MOBILE);
        window.length;
    }

    public ngOnInit(): void {
        this.eventBus.publish(Event.SHOW_FIRST_FOOTER, false);

        this.breakpoint.observe(
            Breakpoint.MOBILE
        ).subscribe(result => {
            this.isMobile = result.matches;
            this.eventBus.publish(Event.IS_MOBILE, this.isMobile);
        });

        this.breakpoint.observe(
            Breakpoint.TABLET
        ).subscribe(result => {
            this.isTablet = result.matches;
        });

        this.breakpoint.observe(
            Breakpoint.DESKTOP
        ).subscribe(result => {
            this.isTablet = result.matches;
        });

        this.eventBus.subscribe(Event.SHOW_FIRST_FOOTER, (result) => {
            this.showFirstFooter = result;
        });

        this.eventBus.subscribe(Event.NOT_FOUND, (result) => {
            this.isNotFound = result;
        });
    }
}
