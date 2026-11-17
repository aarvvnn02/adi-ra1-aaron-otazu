import { Component } from '@angular/core';
import { TareaService } from '../../services/tarea.service';
import { TareaCardComponent } from '../../components/tarea-card/tarea-card.component';
import { MensajeVacioComponent } from '../../components/mensaje-vacio/mensaje-vacio.component';

@Component({
  selector: 'app-favoritos',
  standalone: true,
  imports: [TareaCardComponent, MensajeVacioComponent],
  template: `
    <h1>Mis favoritos</h1>
    <p class="intro">Aquí aparecen las tareas que has marcado con una estrella.</p>
    @if (servicio.obtenerFavoritas().length > 0) {
      <div class="rejilla">
        @for (tarea of servicio.obtenerFavoritas(); track tarea.id) {
          <app-tarea-card [tarea]="tarea"
            (cambiar)="servicio.cambiarEstado($event)"
            (favorito)="servicio.cambiarFavorito($event)"
            (eliminar)="servicio.borrarTarea($event)"></app-tarea-card>
        }
      </div>
    } @else {
      <app-mensaje-vacio titulo="Todavía no tienes favoritos" mensaje="Pulsa la estrella de una tarea para guardarla aquí." />
    }
  `,
  styles: [`
    .intro { color: #737b8e; margin-bottom: 25px; }
    .rejilla { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
    @media (max-width: 650px) { .rejilla { grid-template-columns: 1fr; } }
  `]
})
export class FavoritosComponent {
  constructor(public servicio: TareaService) {}
}