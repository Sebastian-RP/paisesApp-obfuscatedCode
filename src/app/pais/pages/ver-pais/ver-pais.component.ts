import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap, tap } from 'rxjs';

import { PaisService } from '../../services/pais.service';
import { CountryModel } from '../../interfaces/pais.interface';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styleUrls: ['./ver-pais.component.scss']
})
export class VerPaisComponent implements OnInit {

  public pais!: CountryModel;

  constructor(
    private activateRoute: ActivatedRoute,
    private paisService: PaisService
    ) {}

  ngOnInit(): void {
    this.activateRoute.params
    .pipe(
      switchMap(({ id }) => this.paisService.getPaisByAlphaCode(id)),
      tap(console.log)
    )
    .subscribe(pais => this.pais = pais[0]);


    // this.activateRoute.params
    //   .subscribe(({id}) =>{
    //     this.paisService.getPaisByAlphaCode(id)
    //       .subscribe((pais: CountryModel[]) => {
    //         console.log(pais);
    //         this.pais = pais[0]
    //       })
    //   } );
  }

}