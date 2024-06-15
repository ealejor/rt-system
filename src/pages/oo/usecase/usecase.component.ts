import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {TitleComponent} from "@pages/components/title/title.component";
import SvgPanZoom from "svg-pan-zoom";
import {EventBus} from "@app/app.event.bus";
import {Event} from "@app/app.utils";
import {SubtitleComponent} from "@pages/components/subtitle/subtitle.component";
import {ParagraphComponent} from "@pages/components/paragraph/paragraph.component";
import {TextComponent, UseCaseExtended} from "@pages/oo/usecase/text/text.component";
import {Normal} from "@pages/components/table/table.component";

@Component({
    selector: 'app-usecase',
    standalone: true,
    imports: [
        TitleComponent,
        SubtitleComponent,
        ParagraphComponent,
        TextComponent
    ],
    templateUrl: './usecase.component.html',
    styleUrl: './usecase.component.scss'
})
export class UsecaseComponent implements OnInit, AfterViewInit {
    @ViewChild('ducs', {static: false})
    private svgDucs!: ElementRef<SVGSVGElement>;
    public panZoomDucs!: SvgPanZoom.Instance;

    @ViewChild('ducn', {static: false})
    private svgDucn!: ElementRef<SVGSVGElement>;
    public panZoomDucn!: SvgPanZoom.Instance;


    private displacement: number = 25;

    constructor(
        private eventBus: EventBus<boolean>
    ) {
    }

    ngOnInit(): void {
        this.eventBus.publish(Event.footer, true);
    }

    ngAfterViewInit(): void {
        this.panZoomDucs = SvgPanZoom(this.svgDucs.nativeElement, {
            zoomEnabled: false,
            controlIconsEnabled: false,
            maxZoom: 1000,
            minZoom: 0.1,
            fit: true,
            center: true,
            preventMouseEventsDefault: true,
        });
        this.panZoomDucn = SvgPanZoom(this.svgDucn.nativeElement, {
            zoomEnabled: false,
            controlIconsEnabled: false,
            maxZoom: 1000,
            minZoom: 0.1,
            fit: true,
            center: true,
            preventMouseEventsDefault: true,
        });
    }

    zoomIn(panZoom: SvgPanZoom.Instance) {
        panZoom.zoomIn();
    }

    zoomOut(panZoom: SvgPanZoom.Instance) {
        panZoom.zoomOut();
    }

    zoomReset(panZoom: SvgPanZoom.Instance) {
        panZoom.reset();
    }

    moveTop(panZoom: SvgPanZoom.Instance) {
        panZoom.panBy({x: 0, y: -this.displacement});
    }

    moveBottom(panZoom: SvgPanZoom.Instance) {
        panZoom.panBy({x: 0, y: this.displacement});
    }

    moveLeft(panZoom: SvgPanZoom.Instance) {
        panZoom.panBy({x: -this.displacement, y: 0});
    }

    moveRight(panZoom: SvgPanZoom.Instance) {
        panZoom.panBy({x: this.displacement, y: 0});
    }

    usecase1: UseCaseExtended = {
        usecase: 'Registrar cliente.',
        actors: 'Usuario.',
        type: 'Primario.',
        objective: 'Permitir al usuario registrarse en el sistema.',
        resume: 'El usuario accede a la pagina de registro, completa un formulario con sus datos personales y crea una cuenta en el sistema. Esto permite al usuario acceder a funcionalidades adicionales como solicitar taxis y gestionar pagos.',
        normal: [
            {
                actionActors: '1. El usuario accede a la pagina de registro.',
                responseSystem: '2. El sistema presenta un formulario de registro.'
            },
            {actionActors: '3. El usuario completa el formulario con sus datos.', responseSystem: ''},
            {
                actionActors: '4. El usuario envía el formulario.',
                responseSystem: '5. El sistema revisa los datos enviados y los valida.'
            },
            {
                actionActors: '',
                responseSystem: '6. El sistema crea una nueva cuenta y muestra al usuario un mensaje de confirmación.'
            },
        ],
        alternative: [
            'L5 El sistema encuentra fallas en los datos proporcionados por el usuario.',
            'L6. El sistema muestra un mensaje de error y solicita correcciones.',
        ]
    }

    usecase2: UseCaseExtended = {
        usecase: 'Iniciar sesión.',
        actors: 'Usuario.',
        type: 'Primario.',
        objective: 'Permitir al usuario acceder a su cuenta personal del sistema.',
        resume: 'El usuario ingresa al sistema utilizando su nombre de usuario y contraseña previamente registrados, así podrá acceder a su cuenta y a las funcionalidades del sistema.',
        normal: [
            {
                actionActors: '1. El usuario accede a la página de inicio de sesión.',
                responseSystem: '2. El sistema presenta un formulario de inicio de sesión.'
            }, {
                actionActors: '3. El usuario ingresa su nombre de usuario y contraseña.',
                responseSystem: ''
            }, {
                actionActors: '4. El usuario envía el formulario.',
                responseSystem: '5. El sistema valida las credenciales.'
            }, {
                actionActors: '',
                responseSystem: '6. El sistema permite el acceso al usuario y redirige a la pagina principal.'
            }
        ],
        alternative: [
            'L5 El sistema encuentra errores en las credenciales ingresadas. ',
            'L6 El sistema muestra un mensaje de error y solicita correcciones. '
        ]
    }
    usecase3: UseCaseExtended = {
        usecase: 'Solicitar taxi.',
        actors: 'Usuario.',
        type: 'Primario.',
        objective: 'Permitir al usuario solicitar un servicio de taxi.',
        resume: 'El usuario solicita un taxi indicando su ubicación actual y su destino. La solicitud es enviada al administrador para su procesamiento.',
        normal: [
            {
                actionActors: '1. El usuario selecciona la opción de solicitar taxi.',
                responseSystem: '2. El sistema solicita la ubicación actual del usuario y el destino.'
            }, {
                actionActors: '3. El usuario ingresa la información requerida.',
                responseSystem: '4. El sistema envía la solicitud al administrador.'
            }, {
                actionActors: '',
                responseSystem: '5. El sistema muestra una confirmación al usuario.'
            }
        ],
        alternative: [
            'L5 El sistema no encuentra taxis disponibles.',
        ]
    }
    usecase4: UseCaseExtended = {
        usecase: 'Asignar taxi.',
        actors: 'Administrador.',
        type: 'Primario.',
        objective: 'Permitir al administrador asignar un taxi a una solicitud pendiente.',
        resume: 'El administrador asigna un taxi disponible a una solicitud de servicio de taxi y notifica al conductor.',
        normal: [
            {
                actionActors: '1. El administrador revisa las solicitudes pendientes.',
                responseSystem: '2. El sistema muestra las solicitudes pendientes.'
            }, {
                actionActors: '3. El administrador selecciona una solicitud.',
                responseSystem: '4. El sistema muestra la información de la solicitud seleccionada.'
            }, {
                actionActors: '5. El administrador asigna un taxi disponible.',
                responseSystem: '6. El sistema notifica al conductor asignado y actualiza el estado de la solicitud.'
            },
        ],
        alternative: [
            's/n',
        ]
    }
    usecase5: UseCaseExtended = {
        usecase: 'Aceptar Solicitud.',
        actors: 'Conductor.',
        type: 'Primario.',
        objective: 'Permitir al conductor aceptar una solicitud de servicio de taxi.',
        resume: 'El conductor revisa y acepta una solicitud de servicio de taxi asignada por el administrador.',
        normal: [
            {
                actionActors: '',
                responseSystem: '1. El sistema envía una notificación de una nueva solicitud al conductor. '
            }, {
                actionActors: '2. El conductor abre la notificación.',
                responseSystem: '3. El sistema muestra los detalles de la solicitud.'
            }, {
                actionActors: '4. El conductor revisa los detalles de la solicitud.',
                responseSystem: ''
            }, {
                actionActors: '5. El conductor selecciona la opción de aceptar la solicitud.',
                responseSystem: ''
            }, {
                actionActors: '',
                responseSystem: '6. El sistema confirma la aceptación y notifica al usuario sobre la asignación del conductor.'
            },
        ],
        alternative: [
            's/n',
        ]
    }
    usecase6: UseCaseExtended = {
        usecase: 'Realizar Viaje.',
        actors: 'Conductor, Usuario.',
        type: 'Primario.',
        objective: 'Permitir al conductor llevar al usuario a su destino.',
        resume: 'El conductor realiza el viaje llevando al usuario desde su ubicación de inicio hasta su destino.',
        normal: [
            {
                actionActors: '1. El conductor se dirige al punto de recogida.',
                responseSystem: '2. El sistema registra la hora de inicio del viaje.'
            }, {
                actionActors: '3. El usuario sube al taxi.',
                responseSystem: ''
            }, {
                actionActors: '4. El conductor inicia el viaje hacia el destino indicado.',
                responseSystem: '5. El sistema registra el tiempo y la distancia del viaje.'
            }, {
                actionActors: '6. El conductor llega al destino.',
                responseSystem: '7. El sistema registra la hora de finalización del viaje.'
            }
        ],
        alternative: [
            's/n',
        ]
    }
    usecase7: UseCaseExtended = {
        usecase: 'Realiza el pago.',
        actors: 'Usuario.',
        type: 'Primario.',
        objective: 'Permitir al usuario pagar por el servicio de taxi.',
        resume: 'El usuario paga por el servicio de taxi utilizando efectivo o transferencia bancaria. El sistema registra el pago.',
        normal: [
            {
                actionActors: '',
                responseSystem: '1. El sistema muestra el monto a pagar. '
            }, {
                actionActors: '2. El usuario selecciona el método de pago: efectivo o transferencia.',
                responseSystem: ''
            }, {
                actionActors: '3. El usuario realiza el pago en efectivo.',
                responseSystem: '4. El sistema registra el pago en efectivo.'
            }, {
                actionActors: '5. El usuario realiza una transferencia bancaria.',
                responseSystem: '6. El sistema confirma la transferencia y registra el pago.'
            }, {
                actionActors: '',
                responseSystem: '7. El sistema emite un recibo para el usuario. '
            },
        ],
        alternative: [
            'L5 Si el pago no es válido, el sistema muestra un mensaje de error y solicita una corrección.',
        ]
    }
    usecase8: UseCaseExtended = {
        usecase: 'Generar Reporte.',
        actors: 'Administrador.',
        type: 'Primario.',
        objective: 'Permitir al administrador generar reportes del sistema.',
        resume: 'El administrador genera reportes del sistema, tales como reportes de viajes, pagos y conductores, para análisis y toma de decisiones.',
        normal: [
            {
                actionActors: '1. El administrador selecciona la opción de generar reporte.',
                responseSystem: '2. El sistema muestra opciones de reportes: viajes, pagos, conductores.'
            }, {
                actionActors: '3. El administrador selecciona el tipo de reporte deseado.',
                responseSystem: '4. El sistema genera y muestra el reporte solicitado.'
            }, {
                actionActors: '5. El administrador descarga o imprime el reporte.',
                responseSystem: ''
            }
        ],
        alternative: [
            's/n',
        ]
    }


}
