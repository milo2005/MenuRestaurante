import { Component } from '@angular/core';
import { MenuService, Menu } from './services/menu.service';
import { finalize } from 'rxjs/operators';

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
  loading = false;

  constructor(service: MenuService) {
    this.loading = true;
    service.loadMenu()
      .pipe(
        finalize(() => this.loading = false)
      )
      .subscribe(x => this.data = x, err => console.log(err));
  }

  showName(menu: Menu) {
    alert(menu.chef);
  }
}
