import { Injectable } from '@angular/core';
import { Observable, timer } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor() { }

  loadMenu(): Observable<Menu[]> {
    return timer(500)
      .pipe(
        map(() => {
          return [
            {
              chef: 'Dario Ch', date: new Date(),
              img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTblAwMSr7tXSxZqavA3b4YtCxSjGEA5zEaxs97mkvApPe9Kkfmrw'
            },
            {
              chef: 'Fernando Ch', date: new Date(),
              img: 'https://i0.wp.com/outoftownblog.com/wp-content/uploads/2016/03/Paella-Valenciana.jpg?fit=1024%2C576&ssl=1'
            },
            {
              chef: 'Chamorro', date: new Date(),
              img: 'http://ernestolechona.com/mobile/wp-content/uploads/2013/05/tamaltolimense-800x500.jpg'
            },
            {
              chef: 'Pepito', date: new Date(),
              img: 'https://i0.wp.com/outoftownblog.com/wp-content/uploads/2016/03/Paella-Valenciana.jpg?fit=1024%2C576&ssl=1'
            },
            {
              chef: 'Juanita', date: new Date(),
              img: 'https://recipes.timesofindia.com/photo/53110049.cms'
            },
            {
              chef: 'Pepita', date: new Date(),
              img: 'https://i0.wp.com/outoftownblog.com/wp-content/uploads/2016/03/Paella-Valenciana.jpg?fit=1024%2C576&ssl=1'
            }
          ];
        })
      );
  }

}


export class Menu {
  constructor(public img: string,
    public chef: string,
    public date: Date) { }
}
