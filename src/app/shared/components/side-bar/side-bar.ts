import { Component } from '@angular/core';
import { NzMenuModule } from 'ng-zorro-antd/menu';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { RouterModule } from '@angular/router';
import { PagesModule } from '../../../pages/pages-module';

@Component({
  selector: 'app-side-bar',
  imports: [NzMenuModule, NzIconModule, RouterModule],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.scss'
})
export class SideBar {

}
