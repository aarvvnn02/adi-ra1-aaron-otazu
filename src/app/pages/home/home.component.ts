import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { TareaService } from '../../services/tarea.service';
import { ContadorTareasComponent } from '../../components/contador-tareas/contador-tareas.component';
import { TareaCardComponent } from '../../components/tarea-card/tarea-card.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterLink, ContadorTareasComponent, TareaCardComponent],
  template: `
    <section class="bienvenida">
      <p class="sobre">ORGANIZA TU DÍA</p>
      <h1>¡Hola! Estas son tus tareas</h1>
      <p>Una forma sencilla de tener tus cosas al día.</p>
      <a routerLink="/tareas" class="boton">Ver mis tareas</a>
    </section>

    <h2>Resumen</h2>
    <div class="resumen">
      <app-contador-tareas etiqueta="Tareas totales" [cantidad]="servicio.obtenerTareas().length"></app-contador-tareas>
      <app-contador-tareas etiqueta="Tareas terminadas" [cantidad]="servicio.contarTerminadas()"></app-contador-tareas>
      <app-contador-tareas etiqueta="Favoritos" [cantidad]="servicio.obtenerFavoritas().length"></app-contador-tareas>
    </div>

    <div class="titulo-lista">
      <h2>Últimas tareas</h2>
      <a routerLink="/tareas">Ver todas</a>
    </div>
    <div class="rejilla">
      @for (tarea of servicio.obtenerTareas().slice(0, 2); track tarea.id) {
        <app-tarea-card [tarea]="tarea"
          (cambiar)="servicio.cambiarEstado($event)"
          (favorito)="servicio.cambiarFavorito($event)"
          (eliminar)="servicio.borrarTarea($event)"></app-tarea-card>
      }
    </div>
  `,
  styles: [`
    .bienvenida { background: #eef0ff; border-radius: 16px; padding: 34px; margin-bottom: 30px; }
    .sobre { color: #3546a5; font-weight: bold; font-size: 12px; letter-spacing: 1px; }
    h1 { font-size: 32px; margin: 8px 0; }
    .bienvenida p:not(.sobre) { color: #626a7d; }
    .boton { display: inline-block; background: #3546a5; color: white; text-decoration: none; padding: 11px 16px; border-radius: 8px; margin-top: 8px; }
    h2 { font-size: 20px; }
    .resumen, .rejilla { display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; }
    .rejilla { grid-template-columns: repeat(2, 1fr); }
    .titulo-lista { display: flex; justify-content: space-between; align-items: center; margin-top: 28px; }
    .titulo-lista a { color: #3546a5; }
    @media (max-width: 650px) { .resumen, .rejilla { grid-template-columns: 1fr; } h1 { font-size: 25px; } }
  `]
})
export class HomeComponent {
  constructor(public servicio: TareaService) {}
}