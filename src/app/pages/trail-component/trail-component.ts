import { Component, OnInit } from '@angular/core';
import { Trail as TrailService } from '../../core/services/trail';
import { Trail as TrailModel } from '../../core/models/trail.model';

@Component({
  selector: 'app-trail-component',
  standalone: false,
  templateUrl: './trail-component.html',
  styleUrl: './trail-component.scss'
})
export class TrailComponent implements OnInit {
  trails: TrailModel[] = [];
  isLoading = true;

  constructor(private trailService: TrailService) {}

  ngOnInit(): void {
    this.loadTrails();
  }

  loadTrails(): void {
    this.trailService.getAllTrails().subscribe({
      next: (data: any) => {
        this.trails = data;
        this.isLoading = false;
      },
      error: (error: any) => {
        console.error('Error loading trails:', error);
        this.isLoading = false;
      }
    });
  }

  getDifficultyColor(difficulty: string): string {
    const colors: { [key: string]: string } = {
      'Fácil': 'green',
      'Moderado': 'orange',
      'Difícil': 'red'
    };
    return colors[difficulty] || 'default';
  }
}
