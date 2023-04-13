import { Component } from '@angular/core';
import { PaisService } from '../../services/pais.service';
import { CountryModel } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.scss']
})
export class PorRegionComponent {

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceania'];
  regionActiva: string = '';
  paises: CountryModel[] = [];

  constructor(private paisService: PaisService) {}

  getClaseCss(region: string) {
    return (region === this.regionActiva) ? 'btn-primary' : 'btn-outline-primary'
  }

  activarRegion(region: string) {
    this.regionActiva = region;

    this.paisService.buscarPorRegion(region)
      .subscribe((resp: CountryModel[]) => {
        this.paises = resp
      });
    //TODO: hacer llamado al servicio
  }
}
