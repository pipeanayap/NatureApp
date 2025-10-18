import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { SideBar } from './shared/components/side-bar/side-bar';
import { PagesModule } from './pages/pages-module';
import { NZ_ICONS } from 'ng-zorro-antd/icon';
import { ShopOutline, AppstoreOutline, FileTextOutline } from '@ant-design/icons-angular/icons';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, SideBar, PagesModule],
  templateUrl: './app.html',
  styleUrl: './app.scss',
  providers: [
    { provide: NZ_ICONS, useValue: [ShopOutline, AppstoreOutline, FileTextOutline] }
  ]
})
export class App {
  protected readonly title = signal('NatureApp');
}
