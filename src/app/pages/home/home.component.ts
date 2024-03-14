import { Component, OnInit } from '@angular/core';
import { PersonaComponent } from '../persona/persona.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PersonaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  nombre: string = "Maria de las Nieves"

  ngOnInit(): void {

  }

  mostrarModal(): void {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });

  }

}
