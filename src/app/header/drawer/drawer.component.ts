import {Component, Input} from '@angular/core';
import {MenuMobileComponent} from "@app/header/drawer/menu/menu.mobile.component";
import {Menu, Event} from "@app/app.utils";
import {EventBus} from "@app/app.event.bus";

@Component({
    selector: 'app-drawer',
    standalone: true,
    imports: [
        MenuMobileComponent
    ],
    templateUrl: './drawer.component.html',
    styleUrl: './drawer.component.scss'
})
export class DrawerComponent {
    currentYear: number;

    @Input() menus: Menu [] = [];

    constructor(
        private eventBus: EventBus<boolean>
    ) {
        this.currentYear = new Date().getFullYear();
    }

    public clickInIconCloseOrItem(): void {
        this.eventBus.publish(Event.drawer, false);
        this.eventBus.publish(Event.backdrop, false);
    }
}
