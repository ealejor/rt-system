import {Component, OnInit} from '@angular/core';
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";
import {TitleComponent} from "@pages/components/title/title.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";
import {OlComponent} from "@pages/components/ol/ol.component";
import {UlComponent} from "@pages/components/ul/ul.component";

interface Bullet {
    value: string;
    subbullets?: string[];
}

interface Data {
    subtitle: string;
    bullets: Bullet[];
}

@Component({
    selector: 'app-methods',
    standalone: true,
    imports: [
        TitleComponent,
        ParagraphComponent,
        OlComponent,
        UlComponent
    ],
    templateUrl: './methods.component.html',
    styleUrl: './methods.component.scss'
})
export class MethodsComponent implements OnInit {
    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }

    data: Data[] = [
        {
            subtitle: 'Planificación del Juego (Planning Game)',
            bullets: [
                {
                    value: 'Reunión Inicial: Reúne al equipo de desarrollo y a los stakeholders (propietarios de la empresa de radio taxis, conductores, despachadores) para definir los requisitos principales del sistema. Identifica las funcionalidades clave como la reserva de taxis, seguimiento en tiempo real, gestión de conductores, y pago electrónico.'
                }, {
                    value: 'Historias de Usuario: Divide los requisitos en historias de usuario pequeñas y manejables. Por ejemplo:',
                    subbullets: [
                        'Como usuario, quiero poder reservar un taxi desde la aplicación.',
                        'Como conductor, quiero ver las solicitudes de viaje en tiempo real.',
                        'Como despachador, quiero poder asignar taxis a las solicitudes de los clientes.'
                    ]
                }
            ]
        }, {
            subtitle: 'Desarrollo Incremental e Iteraciones',
            bullets: [
                {
                    value: 'Iteraciones Cortas: Planifica iteraciones cortas, típicamente de 1 a 2 semanas. Cada iteración debe tener un objetivo claro y entregar una versión funcional del sistema con características incrementales.',
                }, {
                    value: 'Feedback Continuo: Al final de cada iteración, presenta el trabajo completado a los stakeholders para obtener retroalimentación y ajustar los requisitos si es necesario.'
                }
            ]
        }, {
            subtitle: 'Programación en Pares (Pair Programming)',
            bullets: [
                {
                    value: 'Colaboración Constante: Asigna dos desarrolladores para trabajar juntos en una estación de trabajo. Esto mejora la calidad del código, facilita la revisión inmediata y fomenta el intercambio de conocimientos.'
                }, {
                    value: 'Rotación de Pares: Cambia las parejas de programadores regularmente para asegurar que todos los miembros del equipo estén familiarizados con el código base.'
                }
            ]
        }, {
            subtitle: 'Pruebas Continuas (Continuous Testing)',
            bullets: [
                {
                    value: 'Pruebas Unitarias: Escribir pruebas unitarias antes de desarrollar nuevas funcionalidades. Esto asegura que cada componente del sistema funcione correctamente.'
                }, {
                    value: 'Pruebas de Integración: Implementa pruebas de integración para verificar que los diferentes módulos del sistema (reserva de taxis, seguimiento, pagos) interactúen correctamente.'
                }, {
                    value: 'Pruebas de Aceptación: Desarrolla pruebas de aceptación basadas en las historias de usuario para validar que las funcionalidades cumplan con los requisitos del cliente.'
                }
            ]
        }, {
            subtitle: 'Integración Continua (Continuous Integration)',
            bullets: [
                {
                    value: 'Integración Frecuente: Integra y prueba el código varias veces al día para detectar y corregir problemas rápidamente.'
                }, {
                    value: 'Automatización: Utiliza herramientas de integración continua como Jenkins o Travis CI para automatizar el proceso de compilación y pruebas.'
                }
            ]
        }, {
            subtitle: 'Refactorización',
            bullets: [
                {
                    value: 'Mejora Continua del Código: Refactoriza el código regularmente para mejorar su estructura y eliminar duplicidades, sin cambiar su comportamiento externo.'
                }, {
                    value: 'Código Limpio: Asegúrate de que el código sea fácil de entender y mantener, aplicando principios de diseño simples.'
                }
            ]
        }, {
            subtitle: 'Propiedad Colectiva del Código',
            bullets: [
                {
                    value: 'Acceso Compartido: Permite que todos los desarrolladores puedan modificar cualquier parte del código.'
                }, {
                    value: 'Responsabilidad Compartida: Fomenta un sentido de responsabilidad compartida sobre la calidad del código.'
                }
            ]
        }, {
            subtitle: 'Trabajo Sostenible (Sustainable Pace)',
            bullets: [
                {
                    value: 'Evitar Burnout: Mantén un ritmo de trabajo sostenible para el equipo. Evita largas horas de trabajo que puedan llevar al agotamiento.'
                }, {
                    value: 'Balance Trabajo-Vida: Promueve un balance saludable entre el trabajo y la vida personal de los desarrolladores.'
                }
            ]
        }, {
            subtitle: 'Cliente In-Situ (On-Site Customer)',
            bullets: [
                {
                    value: 'Disponibilidad del Cliente: Asegura que un representante del cliente esté disponible para proporcionar retroalimentación inmediata y responder preguntas sobre los requisitos.'
                }, {
                    value: 'Colaboración Directa: Fomenta una comunicación directa y continua con el cliente para asegurar que el sistema cumpla con sus expectativas.'
                }
            ]
        }
    ]
}
