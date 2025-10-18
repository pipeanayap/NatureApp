import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminLayout } from './admin-layout/admin-layout';
import { Router, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio-component/inicio-component';
import { routes } from './pages.routes';
import { PlaceService } from '../core/services/place';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzCardModule } from 'ng-zorro-antd/card';
import { NzTagModule } from 'ng-zorro-antd/tag';
import { NzSpinModule } from 'ng-zorro-antd/spin';
import { NzToolTipModule } from 'ng-zorro-antd/tooltip';
import { PlacesComponent } from './places-component/places-component';
import { PlacesDetailComponent } from './places-detail-component/places-detail-component';
import { TrailComponent } from './trail-component/trail-component';



@NgModule({
  declarations: [AdminLayout, InicioComponent, PlacesComponent, PlacesDetailComponent, TrailComponent],
  imports: [
    NzTagModule, NzTableModule, NzIconModule, NzButtonModule, NzCardModule, NzSpinModule, NzToolTipModule,
    CommonModule, RouterModule.forChild(routes)
  ], 
  providers: [
    PlaceService
  ]
})
export class PagesModule { }
