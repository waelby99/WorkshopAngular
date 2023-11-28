import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ResidencesComponent } from './residences/residences.component';
import { FormResidenceComponent } from './form-residence/form-residence.component';
import { AppartementComponent } from './appartement/appartement.component';
import { FormAppartmentComponent } from './form-appartment/form-appartment.component';
import { NotfoundcomponentComponent } from './notfoundcomponent/notfoundcomponent.component';
import { DetailsappartementComponent } from './detailsappartement/detailsappartement.component';

const routes: Routes = [
  {path:'residences',component:ResidencesComponent},
  {path:'formresidence',component:FormResidenceComponent},
  {path:'appartement/:id',component:AppartementComponent},
  {path:'formappartement',component:FormAppartmentComponent},
  {path:'detailsappartement',component:DetailsappartementComponent},
  {path:'**',component:NotfoundcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
