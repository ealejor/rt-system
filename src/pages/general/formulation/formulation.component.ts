import {Component, OnInit} from '@angular/core';
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";
import {TitleComponent} from "@pages/components/title/title.component";
import {SubtitleComponent} from "@pages/components/subtitle/subtitle.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";
import {OlComponent} from "@pages/components/ol/ol.component";
import {UlComponent} from "@pages/components/ul/ul.component";

@Component({
    selector: 'app-formulation',
    standalone: true,
    imports: [
        TitleComponent,
        SubtitleComponent,
        ParagraphComponent,
        OlComponent,
        UlComponent
    ],
    templateUrl: './formulation.component.html',
    styleUrl: './formulation.component.scss'
})
export class FormulationComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }

    data: string[] = [
        'Desarrollar un sistema de reservas de taxis automatizado que permita a los usuarios reservar taxis de manera rápida y sencilla, utilizando una aplicación móvil y/o una plataforma web.',
        'Optimizar la asignación de taxis utilizando algoritmos de asignación basados en la ubicación en tiempo real de los taxis y los usuarios.',
        'Proporcionar transparencia y comunicación en tiempo real, incluyendo seguimiento del taxi, estimaciones de tiempo de llegada y tarifas estimadas.',
        'Implementar medidas de seguridad y verificación para conductores y pasajeros, aumentando la confianza en el sistema.',
        'Diseñar una interfaz de usuario intuitiva y accesible, asegurando una experiencia de usuario positiva y eficiente.',
        'Garantizar la integración con sistemas de pago y otras plataformas de transporte, facilitando una experiencia de usuario fluida y sin interrupciones.',
        'Asegurar la escalabilidad del sistema, permitiendo manejar un alto volumen de reservas y usuarios sin degradación del servicio.'
    ]
}
