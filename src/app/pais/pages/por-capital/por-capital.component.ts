import { Component, Input } from '@angular/core';

import { PaisService } from '../../services/pais.service';
import { CountryModel } from '../../interfaces/pais.interface';
import { catchError, of } from 'rxjs';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.scss']
})
export class PorCapitalComponent {

  termino: string = '';
  hayError: boolean = false;
  paises: CountryModel[] = [];

  constructor(private paisService: PaisService) { }

  buscar(termino: string) {
    this.hayError = false;
    this.termino = termino;

    this.paisService.buscarCapital(this.termino)
      .pipe(
        catchError((err) => {
          this.hayError = true;
          this.paises = [];
          return of([]);
        })
      )
      .subscribe((resp: CountryModel[]) => {
        this.paises = resp
        console.log(resp);
      });

  }

}
