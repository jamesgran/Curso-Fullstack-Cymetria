import { Component } from '@angular/core';
import { TableComponent } from "../../components/table/table.component";
import { ContadorComponent } from "../../components/contador/contador.component";

@Component({
    selector: 'app-persona',
    standalone: true,
    templateUrl: './persona.component.html',
    styleUrl: './persona.component.css',
    imports: [TableComponent, ContadorComponent]
})
export class PersonaComponent {

  titulo: string = "Componente persona - Tabla componente padre";
  edad: number = 28;
  ocultar: boolean = true;
  contador: number = 0;
  users: {id: number; name: string}[] = [ //se declara objeto con tipos de datos en arreglo
    {id: 0, name: 'Sarah'},
    {id: 1, name: 'Amy'},
    {id: 2, name: 'Rachel'},
    {id: 3, name: 'Jessica'},
    {id: 4, name: 'Poornima'},
    {id: 5, name: 'Alex'},
    {id: 6, name: 'Jessica'},
    {id: 7, name: 'Necsy'},
    {id: 8, name: 'Lucas'},
  ]

  recibirContador(numero: number){
    this.contador= numero;

  }
  

}
