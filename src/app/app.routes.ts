import {Routes} from '@angular/router';
import {HomeComponent} from "@pages/home/home.component";
import {IntroductionComponent} from "@pages/general/introduction/introduction.component";
import {BackgroundComponent} from "@pages/general/background/background.component";
import {ApproachComponent} from "@pages/general/approach/approach.component";
import {TreeComponent} from "@pages/general/tree/tree.component";
import {PurposeComponent} from "@pages/general/purpose/purpose.component";
import {MethodologyComponent} from "@pages/general/methodology/methodology.component";
import {MethodsComponent} from "@pages/general/methods/methods.component";
import {PlanningComponent} from "@pages/general/planning/planning.component";
import {InstitutionalComponent} from "@pages/theoretical/institutional/institutional.component";
import {DevelopmentComponent} from "@pages/theoretical/development/development.component";
import {InventoryComponent} from "@pages/theoretical/inventory/inventory.component";
import {EnvironmentalComponent} from "@pages/structured/environmental/environmental.component";
import {BehaviourComponent} from "@pages/structured/behaviour/behaviour.component";
import {BusinessComponent} from "@pages/oo/business/business.component";
import {SystemComponent} from "@pages/oo/system/system.component";
import {SequenceComponent} from "@pages/oo/sequence/sequence.component";
import {TuitionComponent} from "@pages/oo/tuition/tuition.component";
import {VideoComponent} from "@pages/video/video.component";
import {AboutComponent} from "@pages/about/about.component";
import {NotfoundComponent} from "@pages/notfound/notfound.component";
import {FormulationComponent} from "@pages/general/formulation/formulation.component";
import {UsecaseComponent} from "@pages/oo/usecase/usecase.component";

export const routes: Routes = [
    // Inicio
    {path: '', component: HomeComponent},
    // Generalidades
    {
        path: 'generalidades/introducción', component: IntroductionComponent,
    },
    {
        path: 'generalidades/antecedentes', component: BackgroundComponent
    },
    {
        path: 'generalidades/planteamiento-del-problema', component: ApproachComponent
    },
    {
        path: 'generalidades/árbol-de-problemas', component: TreeComponent
    },
    {
        path: 'generalidades/formulación-del-problema', component: FormulationComponent
    },
    {
        path: 'generalidades/propósito-de-estudio', component: PurposeComponent
    },
    {
        path: 'generalidades/planteamiento-del-problema', component: ApproachComponent
    },
    /*{
        path: 'generalidades/metodología-de-la-investigación', component: MethodologyComponent
    },*/
    {
        path: 'generalidades/métodos-medios-e-instrumentos', component: MethodsComponent
    },
    {
        path: 'generalidades/planificación-de-actividades', component: PlanningComponent
    },
    // Marco teórico
    {
        path: 'marco-teórico/marco-institucional', component: InstitutionalComponent
    },
    {
        path: 'marco-teórico/metodología-de-desarrollo', component: DevelopmentComponent
    },
    {
        path: 'marco-teórico/inventario', component: InventoryComponent
    },
    // Análisis y diseño estructurado
    {
        path: 'estructurado/modelo-ambiental', component: EnvironmentalComponent
    },
    {
        path: 'estructurado/modelo-de-comportamiento', component: BehaviourComponent
    },
    // Análisis y diseño orientado a objetos
    {
        path: 'orientado-a-objetos/diagrama-casos-de-uso-del-negocio', component: BusinessComponent
    },
    {
        path: 'orientado-a-objetos/diagrama-casos-de-uso-del-sistema', component: SystemComponent
    },
    {
        path: 'orientado-a-objetos/diagrama-de-casos-de-uso', component: UsecaseComponent
    },
    {
        path: 'orientado-a-objetos/diagrama-de-secuencia', component: SequenceComponent
    },
    {
        path: 'orientado-a-objetos/diagrama-de-clases', component: TuitionComponent
    },
    // Video
    {path: 'video', component: VideoComponent},
    {path: 'acerca-de', component: AboutComponent},
    {path: '**', component: NotfoundComponent, pathMatch: 'full'}
];
