import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import { ProfileComponent } from './components/profile/profile.component';
import { RequestResetComponent } from './components/password/request-reset/request-reset.component';
import { ResponseResetComponent } from './components/password/response-reset/response-reset.component';
import { AppRoutingModule } from './/app-routing.module';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { JarwisService } from './services/jarwis.service';
import { TokenService } from './services/token.service';
import { PersonaService } from './services/persona.service';
import { PaisesService } from './services/paises.service';
import { DepartamentosService } from './services/departamentos.service';
import { FacultadesService} from './services/facultades.service';
import { AuthService } from './services/auth.service';
import { AfterLoginService } from './services/after-login.service';
import { BeforeLoginService } from './services/before-login.service';
import { SnotifyModule, SnotifyService, ToastDefaults } from 'ng-snotify';
import { ReactiveFormsModule } from '@angular/forms';
import { PersonaIndexComponent } from './components/persona/persona-index/persona-index.component';
import { PersonaFormComponent } from './components/persona/persona-form/persona-form.component';
import { PersonaDependienteComponent } from './components/persona/persona-dependiente/persona-dependiente.component';
import { HomeComponent } from './components/home/home.component';
import { EgresadoformComponent } from './components/egresado/egresadoform/egresadoform.component';
import { EgresadoindexComponent } from './components/egresado/egresadoindex/egresadoindex.component';
import { FacultadComponent } from './components/facultad/facultad.component';
import { EscuelasComponent } from './components/facultad/escuelas/escuelas.component';
import { UserFormComponent } from './components/profile/user-form/user-form.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SugerenciasformComponent } from './components/sugerencias/sugerenciasform/sugerenciasform.component';
import { SugerenciasindexComponent } from './components/sugerencias/sugerenciasindex/sugerenciasindex.component';
import { EmpresasindexComponent } from './components/empresas/empresasindex/empresasindex.component';
import { EmpresasformComponent } from './components/empresas/empresasform/empresasform.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    LoginComponent,
    SignupComponent,
    ProfileComponent,
    RequestResetComponent,
    ResponseResetComponent,
    PersonaIndexComponent,
    PersonaFormComponent,
    PersonaDependienteComponent,
    HomeComponent,
    EgresadoformComponent,
    EgresadoindexComponent,
    FacultadComponent,
    EscuelasComponent,
    UserFormComponent,
    EventosComponent,
    SidebarComponent,
    SugerenciasformComponent,
    SugerenciasindexComponent,
    EmpresasindexComponent,
    EmpresasformComponent
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
    PersonaService, PaisesService,DepartamentosService,FacultadesService,
    { provide: 'SnotifyToastConfig', useValue: ToastDefaults },
    SnotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
