import { Component, OnInit } from '@angular/core';
import { Persona } from '../models/persona';
import {PersonaService} from './../../services/persona.service';

@Component({
  selector: 'app-persona-registro',
  templateUrl: './persona-registro.component.html',
  styleUrls: ['./persona-registro.component.css']
})
export class PersonaRegistroComponent implements OnInit {
  persona : Persona;
  constructor(private personaService: PersonaService) { }

  ngOnInit() {
    this.persona = new Persona
  }
  resultado : number=0;

  add(){
    if (this.persona.genero == "F") {
  		this.resultado = (220-this.persona.edad)/10;
  	} else {
  		this.resultado = (210-this.persona.edad)/10;
    };
    
    this.persona.pulsacion = this.resultado;
    this.personaService.post(this.persona);

  }

  
  

}
