import {Component, OnInit} from '@angular/core';
import {NgOptimizedImage} from "@angular/common";
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";

@Component({
    selector: 'app-home',
    standalone: true,
    imports: [
        NgOptimizedImage
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
    constructor(private eventBus: EventBus<boolean>) {
    }

    images: string[] = [
        'img/taxi_1.png',
        'img/taxi_2.png',
        'img/taxi_3.png'
    ];

    public currentIndex: number = 0;
    private intervalId: any;

    ngOnInit(): void {
        this.startSlideshow();
        this.eventBus.publish(Event.footer, false);
    }

    startSlideshow(): void {
        this.stopSlideshow();
        this.intervalId = setInterval(() => this.next(), 5000); // Change image every 5 seconds
    }

    stopSlideshow(): void {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }

    prev(): void {
        this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
        this.startSlideshow();
    }

    next(): void {
        this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
        this.startSlideshow();
    }
}
