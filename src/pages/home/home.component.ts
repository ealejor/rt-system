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
    currentIndex: number = 0;

    ngOnInit(): void {
        // Optionally, you can set up an interval to auto-slide the images
        setInterval(() => this.next(), 5000); // Change image every 5 seconds
        this.eventBus.publish(Event.SHOW_FIRST_FOOTER, false);
    }

    prev(): void {
        this.currentIndex = (this.currentIndex === 0) ? this.images.length - 1 : this.currentIndex - 1;
    }

    next(): void {
        this.currentIndex = (this.currentIndex === this.images.length - 1) ? 0 : this.currentIndex + 1;
    }
}
