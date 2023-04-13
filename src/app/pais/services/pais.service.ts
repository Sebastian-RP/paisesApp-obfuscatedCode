import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CountryModel } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private apiUrl: string = 'https://restcountries.com/v3.1';

  get httpParams() {
    return new HttpParams().set('fields', 'name,capital,population,cca3,flags');
  }

  constructor( private http: HttpClient ) { };

  buscarPais(termino: string): Observable<CountryModel[]> {
    const url = `${this.apiUrl}/name/${termino}`

    return this.http.get<CountryModel[]>(url);
  }

  buscarCapital(termino: string): Observable<CountryModel[]> { //correguir
    const url = `${this.apiUrl}/capital/${termino}`

    return this.http.get<CountryModel[]>(url);
  }

  buscarPorRegion(termino: string): Observable<CountryModel[]> { //correguir
    const url = `${this.apiUrl}/region/${termino}`

    return this.http.get<CountryModel[]>(url);
  }

  getPaisByAlphaCode(id: string) : Observable<CountryModel> {
    const url = `${this.apiUrl}/alpha/${id}`;
    
    return this.http.get<CountryModel>(url);
  }

}