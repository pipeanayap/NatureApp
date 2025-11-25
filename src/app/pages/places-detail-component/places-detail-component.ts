import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlaceService } from '../../core/services/place';
import { Place } from '../../core/models/place.model';
import { AIResponse } from '../../core/models/aiResponse.model';
import * as mapboxgl from 'mapbox-gl';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-places-detail-component',
  standalone: false,
  templateUrl: './places-detail-component.html',
  styleUrl: './places-detail-component.scss'
})
export class PlacesDetailComponent implements OnInit {
  id?: string | null;
  place?: Place;
  map!: mapboxgl.Map;
  loading = true;
  loadingFacts = false;
  aiResponse?: AIResponse;

  constructor(
    private route: ActivatedRoute,
    private placeService: PlaceService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get("id");
    if (this.id) {
      this.loadPlaceDetails();
    }
  }

  loadPlaceDetails(): void {
    this.placeService.getPlaceById(Number(this.id)).subscribe({
      next: (data) => {
        this.place = data;
        this.loading = false;
        setTimeout(() => this.initMap(), 100);
      },
      error: (err) => {
        console.error('Error cargando lugar:', err);
        this.loading = false;
      }
    });
  }

  initMap(): void {
    if (!this.place) return;

    this.map = new mapboxgl.Map({
      accessToken: environment.MAPBOX_TOKEN,
      container: 'detail-map',
      style: 'mapbox://styles/mapbox/outdoors-v12',
      center: [this.place.longitude, this.place.latitude],
      zoom: 14
    });

    new mapboxgl.Marker({ color: '#ff4444' })
      .setLngLat([this.place.longitude, this.place.latitude])
      .addTo(this.map);
  }

  getDifficultyColor(difficulty: string): string {
    const colors: { [key: string]: string } = {
      'Fácil': 'green',
      'Moderado': 'orange',
      'Difícil': 'red'
    };
    return colors[difficulty] || 'blue';
  }

  generateFacts(): void {
    if (!this.id) return;
    
    this.loadingFacts = true;
    this.aiResponse = undefined;

    this.placeService.getFacts(Number(this.id)).subscribe({
      next: (response) => {
        this.aiResponse = response;
        this.loadingFacts = false;
      },
      error: (err) => {
        console.error('Error generando datos curiosos:', err);
        this.loadingFacts = false;
      }
    });
  }
}
