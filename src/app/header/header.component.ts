import {Component, OnInit} from '@angular/core';
import {NgStyle} from "@angular/common";
import {BreakpointObserver} from "@angular/cdk/layout";
import {DrawerComponent} from "@app/header/drawer/drawer.component";
import {MenuDesktopComponent} from "@app/header/menu/menu.desktop.component";
import {Breakpoint, Event} from "@app/app.utils";
import {EventBus} from "@app/app.event.bus";

export interface EventData {
    isMobile: boolean;
}

@Component({
    selector: 'app-header',
    standalone: true,
    imports: [
        NgStyle,
        DrawerComponent,
        MenuDesktopComponent
    ],
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

    isMobile: boolean = false;
    openDrawer: boolean = false;
    openBackdrop: boolean = false;

    public constructor(
        private breakpoint: BreakpointObserver,
        private eventBus: EventBus<boolean>
    ) {
        this.isMobile = this.breakpoint.isMatched(Breakpoint.MOBILE);
    }

    /**
     * @description
     */
    public ngOnInit(): void {
        this.eventBus.subscribe(Event.IS_MOBILE, (value) => {
            this.isMobile = value;
        });
    }

    /**
     * Este método se invoca cuando se hace clic en el **telón de fondo** (backdrop).
     * Establece las propiedades `openDrawer` y `openBackdrop` en `false` para cerrar el **cajón
     * de navegación** y el **telón de fondo**.
     */
    public clickInBackdrop(): void {
        this.openDrawer = false;
        this.openBackdrop = false;
    }

    /**
     * Este método se invoca cuando se hace clic en el icono de la hamburguesa (iconBurger).
     * Establece las propiedades `openDrawer` y `openBackdrop` en `true` para abrir el **cajón
     * de navegación** y **el telón de fondo**.
     */
    public clickInIconBurger(): void {
        this.openDrawer = true;
        this.openBackdrop = true;
    }

    /**
     * Este método se invoca cuando se hace clic en el icono de cierre (iconClose) o en un elemento del menú (item).
     * Establece las propiedades `openDrawer` y `openBackdrop` en `false` para cerrar el **cajón de
     * navegación** y el **telón de fondo**.
     */
    public clickInIconCloseOrItem(): void {
        this.openDrawer = false;
        this.openBackdrop = false;
    }
}
