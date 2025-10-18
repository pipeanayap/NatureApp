import { Component } from '@angular/core';
import * as mapboxgl from 'mapbox-gl'; 
import { environment } from '../../../environments/environment';
import { PlaceService } from '../../core/services/place';



@Component({
  selector: 'app-inicio-component',
  standalone : false,
  templateUrl: './inicio-component.html',
  styleUrl: './inicio-component.scss'
})
export class InicioComponent {

  map!: mapboxgl.Map;
  style = 'mapbox://styles/mapbox/streets-v11';
  markers : mapboxgl.Marker[] = [];
  //backtip
  constructor(private placeService : PlaceService){}
 
ngOnInit(): void {
  this.map = new mapboxgl.Map({
    accessToken: environment.MAPBOX_TOKEN,
    style: this.style,
    container: "map",
    center: [0, 0],
    zoom: 2
  });

  this.map.on('load', () => {
    this.placeService.getAllPlaces().subscribe((storeResponse) => {
      storeResponse.forEach((store) => {
        const marker = new mapboxgl.Marker()
          .setLngLat([store.longitude, store.latitude])
          .addTo(this.map);
        this.markers.push(marker);
      });
    });
  });
}
}
