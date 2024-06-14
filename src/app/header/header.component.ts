import {Component, Input, OnInit} from '@angular/core';
import {NgStyle} from "@angular/common";
import {BreakpointObserver} from "@angular/cdk/layout";
import {DrawerComponent} from "@app/header/drawer/drawer.component";
import {MenuDesktopComponent} from "@app/header/menu/menu.desktop.component";
import {Breakpoint, Event, Menu} from "@app/app.utils";
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
        this.eventBus.subscribe(Event.mobile, (value) => {
            this.isMobile = value;
        });
        this.eventBus.subscribe(Event.drawer, (value) => {
            this.openDrawer = value;
        });
        this.eventBus.subscribe(Event.backdrop, (value) => {
            this.openBackdrop = value;
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

    @Input() menus: Menu[] = [
        {
            path: "/",
            title: 'Inicio',
            opened: false
        },
        {
            title: 'Generalidades',
            opened: false,
            description: 'Tabla de contenido',
            items: [
                {
                    title: 'Introducción',
                    path: '/generalidades/introducción'
                },
                {
                    title: 'Antecedentes',
                    path: '/generalidades/antecedentes'
                },
                {
                    title: 'Planteamiento del problema',
                    path: '/generalidades/planteamiento-del-problema'
                },
                {
                    title: 'Árbol de problemas',
                    path: '/generalidades/árbol-de-problemas'
                },
                {
                    title: 'Formulación del problema',
                    path: '/generalidades/formulación-del-problema'
                },
                {
                    title: 'Propósito de estudio',
                    path: '/generalidades/propósito-de-estudio'
                },
                /*{
                    title: 'Metodología de la investigación',
                    path: '/generalidades/metodología-de-la-investigación'
                } , */
                {
                    title: 'Métodos, medios e instrumentos',
                    path: '/generalidades/métodos-medios-e-instrumentos'
                },
                {
                    title: 'Planificación de actividades',
                    path: '/generalidades/planificación-de-actividades'
                }
            ]
        },
        /*{
            title: 'Marco teórico',
            description: 'Contenido del marco teórico',
            opened: false,
            items: [
                {
                    title: 'Marco institucional',
                    path: '/marco-teórico/marco-institucional'
                },
                {
                    title: 'Metodología de desarrollo',
                    path: '/marco-teórico/metodología-de-desarrollo'
                },
                {
                    title: 'Inventario',
                    path: '/marco-teórico/inventario'
                }
            ]
        },*/
        {
            title: 'Análisis y diseño estructurado',
            opened: false,
            description: 'Implementado con el modelo esencial',
            items: [
                {
                    path: '/estructurado/modelo-ambiental',
                    title: 'Modelo ambiental'
                },
                {
                    path: '/estructurado/modelo-de-comportamiento',
                    title: 'Modelo de comportamiento'
                },
            ]
        },
        {
            title: 'Análisis y diseño orientado a objetos',
            opened: false,
            description: 'Modelo de diseño basado en elementos',
            items: [
                /*{
                    path: '/orientado-a-objetos/diagrama-casos-de-uso-del-negocio',
                    title: 'Diagrama casos de uso del negocio'
                },
                {
                    path: '/orientado-a-objetos/diagrama-casos-de-uso-del-sistema',
                    title: 'Diagrama casos de uso del sistema'
                },*/
                {
                    path: '/orientado-a-objetos/diagrama-de-casos-de-uso',
                    title: 'Diagrama de casos de uso'
                },
                {
                    path: '/orientado-a-objetos/diagrama-de-secuencia',
                    title: 'Diagrama de secuencia'
                },
                {
                    path: '/orientado-a-objetos/diagrama-de-clases',
                    title: 'Diagrama de clases'
                },
            ]
        },
        {
            path: "/video",
            title: 'Video',
            opened: false
        },
    ]
}
