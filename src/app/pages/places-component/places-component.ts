import { Component } from '@angular/core';
import { PlaceService } from '../../core/services/place';
import { Place } from '../../core/models/place.model';

@Component({
  selector: 'app-places-component',
  standalone : false,
  templateUrl: './places-component.html',
  styleUrl: './places-component.scss'
})
export class PlacesComponent {

  constructor(private placeService : PlaceService){

  }

  places : Place[] = [];

  ngOnInit():void{
    this.placeService.getAllPlaces().subscribe((res) => {
      this.places = res; // ¡Aquí estaba el problema! Faltaba asignar los datos
      console.log('Orders loaded:', res);
    });

    
  }

  showModal(place : Place){
    console.log(place)
  }
}
