import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/sistem/navbar/navbar.component';
import { LoginComponent } from './components/sistem/login/login.component';
import { SignupComponent } from './components/sistem/signup/signup.component';
import { PersonaComponent } from './components/users/persona/persona.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { PersonaService } from './services/persona.service';
import { EmpresasService} from './services/empresas.service';
import { SugerenciasService } from './services/sugerencias.service';
import { PaisesService } from './services/paises.service';
import { DepartamentosService } from './services/departamentos.service';
import { FacultadesService} from './services/facultades.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonaFormComponent } from './components/persona/persona-form/persona-form.component';
import { PersonaDependienteComponent } from './components/persona/persona-dependiente/persona-dependiente.component';
import { HomeComponent } from './components/home/home.component';
import { EgresadoformComponent } from './components/admin/egresado/egresadoform/egresadoform.component';
import { EgresadoindexComponent } from './components/admin/egresado/egresadoindex/egresadoindex.component';
import { FacultadComponent } from './components/admin/facultad/facultad.component';
import { EscuelasComponent } from './components/admin/facultad/escuelas/escuelas.component';
import { EventosComponent } from './components/others/eventos/eventos.component';
import { SidebarComponent } from './components/sistem/sidebar/sidebar.component';
import { SugerenciasindexComponent } from './components/sugerencias/sugerenciasindex/sugerenciasindex.component';
import { EgresadoperfilComponent } from './components/egresadoperfil/egresadoperfil.component';
import { EgresadoComponent } from './components/users/egresado/egresado.component';
import { FormacionesComponent } from './components/users/formaciones/formaciones.component';
import { CapacitacionesComponent } from './components/users/capacitaciones/capacitaciones.component';
import { EmpresasComponent } from './components/users/empresas/empresas.component';
import { ExperienciaComponent } from './components/users/experiencia/experiencia.component';
import { UsersComponent } from './components/admin/users/users.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    PersonaComponent,
    RequestResetComponent,
    ResponseResetComponent,
    PersonaFormComponent,
    PersonaDependienteComponent,
    HomeComponent,
    EgresadoformComponent,
    EgresadoindexComponent,
    FacultadComponent,
    EscuelasComponent,
    EventosComponent,
    SidebarComponent,
    SugerenciasindexComponent,
    EgresadoperfilComponent,
    EgresadoComponent,
    FormacionesComponent,
    CapacitacionesComponent,
    EmpresasComponent,
    ExperienciaComponent,
    UsersComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    SnotifyModule
  ],
  providers: [JarwisService, TokenService, AuthService, AfterLoginService, BeforeLoginService,
    PersonaService, PaisesService,DepartamentosService,FacultadesService, SugerenciasService, EmpresasService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
