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
                {
                    path: '/orientado-a-objetos/diagrama-casos-de-uso-del-negocio',
                    title: 'Diagrama casos de uso del negocio'
                },
                {
                    path: '/orientado-a-objetos/diagrama-casos-de-uso-del-sistema',
                    title: 'Diagrama casos de uso del sistema'
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
