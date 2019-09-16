import { HospedeService } from './hospede/hospede.service';
import { CheckInService } from './check-in/check-in.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { PhoneMaskDirective } from './_directives/phone-mask.directive';

import { ModalModule } from './_modal/modal.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { CheckInFormComponent } from './check-in/check-in-form/check-in-form.component';
import { CheckInListComponent } from './check-in/check-in-list/check-in-list.component';
import { HospedeFormComponent } from './hospede/hospede-form/hospede-form.component';
import { HospedeListComponent } from './hospede/hospede-list/hospede-list.component';
import { CheckInFilterComponent } from './check-in/check-in-filter/check-in-filter.component';

@NgModule({
  declarations: [
    PhoneMaskDirective,
    AppComponent,
    CheckInFormComponent,
    CheckInListComponent,
    HospedeFormComponent,
    HospedeListComponent,
    CheckInFilterComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    CheckInService,
    HospedeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
