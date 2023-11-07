import { Component } from '@angular/core';
import { Residence } from '../core/models/Residence';
@Component({
  selector: 'app-residences',
  templateUrl: './residences.component.html',
  styleUrls: ['./residences.component.css']
})
export class ResidencesComponent {
  listResidences:Residence[]=[
    {id:1,"name": "El fel","address":"Borj Cedria",
    "image":"../../assets/images/taswirav1.jfif"},
    {id:2,"name": "El yasmine",
    "address":"Ezzahra","image":"../../assets/images/taswirav2.jfif"},
    {id:3,"name": "El Arij",
    "address":"Rades","image":"../../assets/images/taswirav3.jfif"},
    {id:4,"name": "El Anber","address":"Manzah 5",
    "image":"../../assets/images/taswirav4.jfif"}
    ];

}
