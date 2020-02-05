import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Gato } from '../gato';

@Component({
  selector: 'app-gato-nuevo',
  templateUrl: './gato-nuevo.component.html',
  styleUrls: ['./gato-nuevo.component.css']
})
export class GatoNuevoComponent implements OnInit {

  @Output() mensajeDelHijo = new EventEmitter<Gato>(); // Definimos un mensaje de evento para enviarlo al padre
  gato:Gato;
  constructor() { }

  ngOnInit() {
    this.gato = new Gato('','');
  }

  addGato(gato:Gato) { // Lo enviamos cuando se haga click en el botón de su html
    this.mensajeDelHijo.emit(gato);
    this.gato = new Gato('','');
  }

}
