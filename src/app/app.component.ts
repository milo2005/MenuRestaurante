import { Component } from '@angular/core';
import { MenuService, Menu } from './services/menu.service';

@Component({
  // La etiqueta para usar el componente
  selector: 'app-root',
  // la ruta del archivo de template
  templateUrl: './app.component.html',
  // las rutas de los archivos de estilos
  styleUrls: ['./app.component.css'],
  // Servicios disponibles a partir de este nivel
  providers: [],
  // Template del componente
  // template: '<p> Hola </p>'
})
export class AppComponent {
  title = 'app';
  data: Menu[] = [];

  constructor(service: MenuService) {
    service.loadMenu()
      .subscribe(x => this.data = x);
  }
}
