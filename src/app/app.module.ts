import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ResidencesComponent } from './residences/residences.component';
import { AppartementComponent } from './appartement/appartement.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { DetailsappartementComponent } from './detailsappartement/detailsappartement.component';


@NgModule({
  declarations: [
    AppComponent,
    ResidencesComponent,
    AppartementComponent,
    FormResidenceComponent,
    FormAppartmentComponent,
    NotfoundcomponentComponent,
    DetailsappartementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
