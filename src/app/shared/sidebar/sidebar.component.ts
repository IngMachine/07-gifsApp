import { Component } from '@angular/core';
import { GifsService } from '../../gifs/services/gifs.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent {

  get historial(): string[]{
    return this._gifsService.historial;
  }

  buscar( termino: string): void{
    this._gifsService.buscarGifs( termino );
  }

  constructor(
    private _gifsService: GifsService
  ) { }
}
