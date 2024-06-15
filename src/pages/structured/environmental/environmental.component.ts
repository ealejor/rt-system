import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EventBus} from '@app/app.event.bus';
import {Event} from "@app/app.utils";
import {TitleComponent} from "@pages/components/title/title.component";
import {SubtitleComponent} from "@pages/components/subtitle/subtitle.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";
import {OlComponent} from "@pages/components/ol/ol.component";
import {UlComponent} from "@pages/components/ul/ul.component";
import SvgPanZoom from "svg-pan-zoom";
import {RouterLink} from "@angular/router";

interface Obj {
    actor: string;
    description: string;
    result: string;
}

interface Data {
    subtitle: string;
    obj: Obj;
}

@Component({
    selector: 'app-environmental',
    standalone: true,
    imports: [
        TitleComponent,
        SubtitleComponent,
        ParagraphComponent,
        OlComponent,
        UlComponent,
        RouterLink
    ],
    templateUrl: './environmental.component.html',
    styleUrl: './environmental.component.scss'
})
export class EnvironmentalComponent implements OnInit, AfterViewInit {
    @ViewChild('diagram', {static: false})
    private svg!: ElementRef<SVGSVGElement>;

    private panZoom!: SvgPanZoom.Instance;
    private displacement: number = 25;

    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }

    ngAfterViewInit(): void {
        this.panZoom = SvgPanZoom(this.svg.nativeElement, {
            zoomEnabled: false,
            controlIconsEnabled: false,
            maxZoom: 1000,
            minZoom: 0.1,
            fit: true,
            center: true,
            preventMouseEventsDefault: true,
        });
    }

    zoomIn() {
        this.panZoom.zoomIn();
    }

    zoomOut() {
        this.panZoom.zoomOut();
    }

    zoomReset() {
        this.panZoom.reset();
    }

    moveTop() {
        this.panZoom.panBy({x: 0, y: -this.displacement});
    }

    moveBottom() {
        this.panZoom.panBy({x: 0, y: this.displacement});
    }

    moveLeft() {
        this.panZoom.panBy({x: -this.displacement, y: 0});
    }

    moveRight() {
        this.panZoom.panBy({x: this.displacement, y: 0});
    }

    data: Data[] = [
        {
            subtitle: 'Solicitud de Servicio de Taxi',
            obj: {
                actor: 'Usuario',
                description: 'El usuario envía una solicitud para un servicio de taxi indicando su ubicación de inicio y destino.',
                result: 'El sistema Radio Taxi procesa la solicitud y busca un conductor disponible.'
            }
        }, {
            subtitle: 'Asignación de Servicio a Conductor',
            obj: {
                actor: 'Sistema Radio Taxi',
                description: 'El sistema asigna un servicio de taxi a un conductor disponible.',
                result: 'El conductor recibe la información del servicio (ubicación de inicio y destino).'
            }
        }, {
            subtitle: 'Confirmación de Servicio por el Conductor',
            obj: {
                actor: 'Conductor',
                description: 'El conductor acepta el servicio asignado.',
                result: 'El sistema Radio Taxi notifica al usuario que el conductor ha aceptado el servicio y está en camino.'
            }
        }, {
            subtitle: 'Actualización de Ubicación del Conductor',
            obj: {
                actor: 'Conductor',
                description: 'El conductor actualiza su ubicación en tiempo real durante el viaje.',
                result: 'El sistema Radio Taxi muestra la ubicación en tiempo real al usuario.'
            }
        }, {
            subtitle: 'Notificación de Llegada del Taxi',
            obj: {
                actor: 'Sistema Radio Taxi',
                description: 'El sistema notifica al usuario cuando el taxi ha llegado a la ubicación de recogida.',
                result: 'El usuario es informado de que el taxi está esperando en la ubicación de inicio.'
            }
        }, {
            subtitle: 'Finalización del Servicio y Pago',
            obj: {
                actor: 'Conductor',
                description: 'El conductor finaliza el servicio y se procesa el pago.',
                result: 'El sistema Radio Taxi envía la información del pago al servicio de pagos (banco) y al Servicio de Impuestos Nacionales (SIN) para la facturación.'
            }
        }, {
            subtitle: 'Confirmación de Pago',
            obj: {
                actor: 'Servicio de Pagos (Banco)',
                description: 'El banco confirma que el pago ha sido procesado con éxito.',
                result: 'El sistema Radio Taxi notifica al usuario y al conductor que el pago ha sido realizado.'
            }
        }, {
            subtitle: 'Generación de Factura',
            obj: {
                actor: 'Sistema Radio Taxi',
                description: 'El sistema genera una factura del servicio de taxi.',
                result: 'La factura es enviada al usuario y al Servicio de Impuestos Nacionales (SIN).'
            }
        }, {
            subtitle: 'Calificación del Servicio',
            obj: {
                actor: 'Usuario',
                description: 'El usuario califica el servicio recibido y proporciona feedback.',
                result: 'El sistema Radio Taxi registra la calificación y el feedback para futuras referencias.'
            }
        }, {
            subtitle: 'Solicitud de Reportes',
            obj: {
                actor: 'Administrador',
                description: 'El administrador solicita reportes sobre el uso del sistema y la eficiencia del servicio.',
                result: 'El sistema Radio Taxi genera los reportes solicitados.'
            }
        }, {
            subtitle: 'Actualización de Tarifas',
            obj: {
                actor: 'Administrador',
                description: 'El administrador actualiza las tarifas del servicio de taxi.',
                result: 'El sistema Radio Taxi actualiza las tarifas para futuros servicios.'
            }
        }, {
            subtitle: 'Generación de Informe de Incidente',
            obj: {
                actor: 'Administrador/Conductor',
                description: 'El administrador o conductor reporta un incidente ocurrido durante el servicio.',
                result: 'El sistema Radio Taxi genera un informe detallado del incidente.'
            }
        }, {
            subtitle: 'Cancelación de Servicio',
            obj: {
                actor: 'Usuario',
                description: 'El usuario cancela una solicitud de servicio antes de que el taxi llegue.',
                result: 'El sistema Radio Taxi procesa la cancelación y notifica al conductor.'
            }
        }, {
            subtitle: 'Verificación de Documentos',
            obj: {
                actor: 'Administrador',
                description: 'El administrador verifica la documentación de los conductores.',
                result: 'El sistema Radio Taxi actualiza el estado de verificación de los conductores.'
            }
        }
    ]
}
