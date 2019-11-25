import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

import { PersonaIndexComponent } from './components/persona/persona-index/persona-index.component';
import { PersonaFormComponent } from './components/persona/persona-form/persona-form.component';
import { PersonaDependienteComponent } from './components/persona/persona-dependiente/persona-dependiente.component';

import { HomeComponent } from './components/home/home.component';

import { EgresadoformComponent } from './components/admin/egresado/egresadoform/egresadoform.component';
import { EgresadoindexComponent } from './components/admin/egresado/egresadoindex/egresadoindex.component';

import { FacultadComponent } from './components/admin/facultad/facultad.component';

import { EventosComponent } from './components/eventos/eventos.component';

import { SugerenciasindexComponent } from './components/sugerencias/sugerenciasindex/sugerenciasindex.component';

import { EmpresasindexComponent } from './components/admin/empresasindex/empresasindex.component';
import { CapacitacionesfromComponent } from './components/capacitaciones/capacitacionesfrom/capacitacionesfrom.component';
import { CapacitacionesindexComponent } from './components/capacitaciones/capacitacionesindex/capacitacionesindex.component';


import { EgresadoperfilComponent } from './components/egresadoperfil/egresadoperfil.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'holamundo',
    component: LoginComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'signup',
    component: SignupComponent,
    canActivate: [BeforeLoginService]
  },

  {
    path: 'persona',
    component: PersonaIndexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'personaform',
    component: PersonaFormComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'personaform/:id',
    component: PersonaFormComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'eventos',
    component: EventosComponent
  },
  {
    path: 'personadependiente/:id',
    component: PersonaDependienteComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'egresado',
    component: EgresadoindexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'egresadoform',
    component: EgresadoformComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'perfilegresados',
    component: EgresadoperfilComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'sugerencias',
    component: SugerenciasindexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'empresas',
    component: EmpresasindexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'request-password-reset',
    component: RequestResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'response-password-reset',
    component: ResponseResetComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'facultades',
    component: FacultadComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'capacitaciones',
    component: CapacitacionesindexComponent,
    canActivate: [AfterLoginService]
  },
  {
    path: 'capacitacionesfrom',
    component: CapacitacionesfromComponent,
    canActivate: [AfterLoginService]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
