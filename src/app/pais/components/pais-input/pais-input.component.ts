import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html',
  styleUrls: ['./pais-input.component.scss']
})
export class PaisInputComponent implements OnInit{

  @Input() placeHolder: string = '';

  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  @Output() onDebaunce: EventEmitter<string> = new EventEmitter();

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  ngOnInit(): void {
    this.debouncer
      .pipe(debounceTime(300))
      .subscribe(valor => {
        console.log('debounce', valor);
        
      this.onDebaunce.emit(valor);
    });
  }

  buscar() {
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(event: any) {
    const valor = event.target.value;
    this.debouncer.next(this.termino);
  }
}
