import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/sistem/login/login.component';
import { SignupComponent } from './components/sistem/signup/signup.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { BeforeLoginService } from './services/before-login.service';
import { AfterLoginService } from './services/after-login.service';

import { PersonaFormComponent } from './components/persona/persona-form/persona-form.component';
import { PersonaDependienteComponent } from './components/persona/persona-dependiente/persona-dependiente.component';

import { HomeComponent } from './components/home/home.component';

import { EgresadoformComponent } from './components/admin/egresado/egresadoform/egresadoform.component';
import { EgresadoindexComponent } from './components/admin/egresado/egresadoindex/egresadoindex.component';

import { FacultadComponent } from './components/admin/facultad/facultad.component';

import { EventosComponent } from './components/others/eventos/eventos.component';

import { SugerenciasindexComponent } from './components/others/sugerenciasindex/sugerenciasindex.component';

import { EgresadoperfilComponent } from './components/egresadoperfil/egresadoperfil.component';

import { UsersComponent } from './components/admin/users/users.component';
import { VeregresadoComponent } from './components/admin/egresado/veregresado/veregresado.component';

import { ResponderSugerenciasComponent } from './components/others/sugerenciasindex/responder-sugerencias/responder-sugerencias.component';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [BeforeLoginService]
  },
  {
    path: 'usuarios',
    component: UsersComponent
  },
  { path: 'veregresado/:id',  component: VeregresadoComponent },
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
    path: 'sugerencias/responder',
    component: ResponderSugerenciasComponent,
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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
