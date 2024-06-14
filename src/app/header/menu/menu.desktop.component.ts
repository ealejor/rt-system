import {Component, Input} from '@angular/core';
import {RouterLink} from "@angular/router";
import {NgTemplateOutlet} from "@angular/common";
import {Menu} from "@app/app.utils";

@Component({
    selector: 'app-menu-desktop',
    standalone: true,
    imports: [RouterLink, NgTemplateOutlet],
    templateUrl: './menu.desktop.component.html',
    styleUrl: './menu.desktop.component.scss'
})
export class MenuDesktopComponent {
    @Input() menus: Menu [] = [];

    public onMouseHover(menu: Menu): void {
        menu.opened = true
    }

    public onMouseLeave(menu: Menu) {
        menu.opened = false
    }

    public onMouseClick(menu: Menu) {
        menu.opened = !menu.opened
    }

    public cancel(event: MouseEvent) {
        event.stopPropagation();
        event.preventDefault();
    }

    public other(menu: Menu) {
        //menu.opened = !menu.opened
    }
}
