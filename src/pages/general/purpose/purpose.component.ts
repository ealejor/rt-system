import {Component, OnInit} from '@angular/core';
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";
import {TitleComponent} from "@pages/components/title/title.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";
import {SubtitleComponent} from "@pages/components/subtitle/subtitle.component";
import {OlComponent} from "@pages/components/ol/ol.component";
import {UlComponent} from "@pages/components/ul/ul.component";

interface IObj {
    ol: string;
    ul: string[];
}

@Component({
    selector: 'app-purpose',
    standalone: true,
    imports: [
        TitleComponent,
        ParagraphComponent,
        SubtitleComponent,
        OlComponent,
        UlComponent
    ],
    templateUrl: './purpose.component.html',
    styleUrl: './purpose.component.scss'
})
export class PurposeComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }

    par1 = 'El propósito del estudio es diseñar, desarrollar e implementar un sistema de reservas de taxis automatizado que optimice la asignación de recursos, mejore la experiencia del usuario y contribuya a una movilidad urbana más eficiente y sostenible. El sistema debe ser capaz de gestionar reservas en tiempo real, proporcionar información transparente y segura a los usuarios, y escalar para atender la creciente demanda de servicios de transporte en las ciudades modernas.';
    par2 = 'Desarrollar un sistema de reservas de taxis automatizado, eficiente y seguro que optimice la asignación de recursos, mejore la experiencia del usuario y contribuya a la movilidad urbana sostenible.';

    obj: IObj[] = [
        {
            ol: 'Optimización de Asignación de Taxis:',
            ul: [
                'Diseñar e implementar algoritmos de asignación que minimicen el tiempo de espera del usuario y el tiempo de viaje de los taxis.',
                'Integrar un sistema de geolocalización en tiempo real para la asignación precisa de taxis.',
            ]
        },
        {
            ol: 'Gestión Eficiente de Reservas:',
            ul: [
                'Desarrollar funcionalidades para manejar reservas en tiempo real y reservas programadas, evitando conflictos y duplicaciones.',
                'Implementar un sistema de notificaciones para informar a los usuarios sobre el estado de sus reservas.',
            ]
        },
        {
            ol: 'Transparencia y Comunicación en Tiempo Real:',
            ul: [
                'Proveer información en tiempo real sobre la ubicación del taxi, el tiempo estimado de llegada y las tarifas.',
                'Facilitar una comunicación efectiva entre usuarios y conductores mediante la implementación de un sistema de mensajería instantánea dentro de la aplicación.',
            ]
        },
        {
            ol: 'Mejoras en Seguridad y Confianza:',
            ul: [
                'Implementar un sistema de verificación y evaluación para conductores y usuarios, mejorando la seguridad y la confianza en el servicio.',
                'Desarrollar funcionalidades de emergencia y soporte en tiempo real para casos de incidentes durante el viaje.',
            ]
        },
        {
            ol: 'Diseño de Interfaz de Usuario Intuitiva:',
            ul: [
                'Diseñar una aplicación móvil y una plataforma web con una interfaz amigable y fácil de usar, accesible para usuarios de todas las edades.',
                'Realizar pruebas de usabilidad para asegurar que la interfaz sea intuitiva y satisfactoria para los usuarios.',
            ]
        },
        {
            ol: 'Integración y Escalabilidad:',
            ul: [
                'Asegurar la integración del sistema con métodos de pago electrónico ' +
                'y otras plataformas de transporte urbano.',
                'Diseñar el sistema para ser escalable, capaz de manejar un gran volumen' +
                ' de usuarios y transacciones sin pérdida de rendimiento.',
            ]
        },
        {
            ol: 'Monitoreo y Mantenimiento Continuo:',
            ul: [
                'Implementar herramientas de monitoreo para evaluar el rendimiento del sistema y la satisfacción del usuario.',
                'Establecer un plan de mantenimiento y actualización continua para incorporar mejoras y resolver problemas rápidamente.',
            ]
        }
    ];

    result: string[] = [
        'Un sistema de reservas de taxis que mejore significativamente la eficiencia operativa y la experiencia del usuario.',
        'Reducción de los tiempos de espera y de viaje mediante una mejor asignación de taxis.',
        'Aumento de la transparencia y la confianza de los usuarios gracias a la información en tiempo real y las medidas de seguridad implementadas.',
        'Una interfaz de usuario que sea accesible y fácil de usar, promoviendo una mayor adopción del sistema.',
        'Un sistema integrado y escalable que pueda adaptarse a futuras necesidades y demandas de los usuarios y del mercado.'
    ];
}
