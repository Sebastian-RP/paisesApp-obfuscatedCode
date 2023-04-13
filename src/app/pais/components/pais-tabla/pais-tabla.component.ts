import { Component, Input } from '@angular/core';
import { CountryModel } from 'src/app/pais/interfaces/pais.interface';

@Component({
  selector: 'app-pais-tabla',
  templateUrl: './pais-tabla.component.html',
  styleUrls: ['./pais-tabla.component.scss']
})
export class PaisTablaComponent {

@Input() paises: CountryModel[] = [];

}
