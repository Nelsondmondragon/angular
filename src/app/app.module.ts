import { NgModule } from '@angular/core';
import {
  BrowserModule,
  provideClientHydration,
} from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
//import { AngularSlickgridModule, ContainerService } from 'angular-slickgrid'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { SignupModule } from './generales/signup/signup.module';
import { logginInterceptor } from './generales/interceptors/loggin.interceptor';
import { authInterceptor } from './generales/interceptors/auth.interceptor';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, FormsModule, SignupModule],
  providers: [
    provideClientHydration(),
    provideHttpClient(withInterceptors([logginInterceptor, authInterceptor])),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
