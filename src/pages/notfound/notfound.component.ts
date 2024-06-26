import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {RouterLink} from "@angular/router";
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";

@Component({
    selector: 'app-notfound',
    standalone: true,
    imports: [
        NgOptimizedImage,
        RouterLink
    ],
    templateUrl: './notfound.component.html',
    styleUrl: './notfound.component.scss'
})
export class NotfoundComponent implements OnInit {
    isMobile: boolean = false;

    constructor(
        private eventBus: EventBus<boolean>
    ) {
        /*this.eventBus.cast<boolean>(Event.NOT_FOUND, true);*/
        this.eventBus.publish(Event.notfound, true);
    }

    public ngOnInit(): void {
        /*this.eventBus.on<boolean>(Event.IS_MOBILE).subscribe(result => {
            this.isMobile = result.data !== undefined ? result.data : this.isMobile;
        });*/
        this.eventBus.subscribe(Event.mobile, result => {
            this.isMobile = result;
        });
    }

    public clickInStart(): void {
        /*this.eventBus.cast<boolean>(Event.NOT_FOUND, false);*/
        this.eventBus.publish(Event.notfound, false);
    }
}
