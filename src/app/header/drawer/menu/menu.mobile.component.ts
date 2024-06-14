import {Component, Input} from '@angular/core';
import {Menu} from "@app/app.utils";
import {RouterLink} from "@angular/router";
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils"
import {NgStyle} from "@angular/common";

@Component({
    selector: 'app-menu-mobile',
    standalone: true,
    imports: [
        RouterLink,
        NgStyle
    ],
    templateUrl: './menu.mobile.component.html',
    styleUrl: './menu.mobile.component.scss'
})
export class MenuMobileComponent {
    @Input() menus: Menu [] = [];

    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    public clickInItem() {
        this.eventBus.publish(Event.drawer, false, false);
        this.eventBus.publish(Event.backdrop, false);
    }

    public toggleDisplay() {
        return {'display': 'flex'};
    }
}
