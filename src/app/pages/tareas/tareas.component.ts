import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaService } from '../../services/tarea.service';
import { TareaCardComponent } from '../../components/tarea-card/tarea-card.component';
import { MensajeVacioComponent } from '../../components/mensaje-vacio/mensaje-vacio.component';

@Component({
  selector: 'app-tareas',
  standalone: true,
  imports: [FormsModule, TareaCardComponent, MensajeVacioComponent],
  template: `
    <h1>Mis tareas</h1>
    <p class="intro">Añade tareas y marca las que ya hayas terminado.</p>

    <form class="formulario" (ngSubmit)="agregar()">
      <h2>Nueva tarea</h2>
      <label for="titulo">Título</label>
      <input id="titulo" name="titulo" [(ngModel)]="titulo" placeholder="Ej. Estudiar para el examen" required>
      <label for="descripcion">Descripción</label>
      <input id="descripcion" name="descripcion" [(ngModel)]="descripcion" placeholder="Escribe una pequeña descripción">
      <label for="categoria">Categoría</label>
      <select id="categoria" name="categoria" [(ngModel)]="categoria">
        <option>Estudios</option>
        <option>Personal</option>
        <option>Trabajo</option>
      </select>
      <button class="boton" type="submit">Añadir tarea</button>
    </form>

    <h2>Lista de tareas ({{ servicio.obtenerTareas().length }})</h2>
    @if (servicio.obtenerTareas().length > 0) {
      <div class="rejilla">
        @for (tarea of servicio.obtenerTareas(); track tarea.id) {
          <app-tarea-card [tarea]="tarea"
            (cambiar)="servicio.cambiarEstado($event)"
            (favorito)="servicio.cambiarFavorito($event)"
            (eliminar)="servicio.borrarTarea($event)"></app-tarea-card>
        }
      </div>
    } @else {
      <app-mensaje-vacio titulo="No tienes tareas" mensaje="Puedes añadir una tarea usando el formulario." />
    }
  `,
  styles: [`
    .intro { color: #737b8e; }
    .formulario { background: white; border: 1px solid #e7e9f0; border-radius: 12px; padding: 22px; max-width: 600px; margin: 22px 0 30px; }
    label { display: block; margin: 12px 0 6px; font-size: 14px; }
    input, select { width: 100%; padding: 11px; border: 1px solid #d9dce6; border-radius: 7px; font: inherit; }
    .boton { margin-top: 16px; border: 0; border-radius: 7px; background: #3546a5; color: white; padding: 11px 16px; cursor: pointer; }
    .rejilla { display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; }
    @media (max-width: 650px) { .rejilla { grid-template-columns: 1fr; } }
  `]
})
export class TareasComponent {
  titulo = '';
  descripcion = '';
  categoria = 'Estudios';

  constructor(public servicio: TareaService) {}

  agregar(): void {
    if (this.titulo.trim() !== '') {
      this.servicio.agregarTarea(this.titulo, this.descripcion, this.categoria);
      this.titulo = '';
      this.descripcion = '';
      this.categoria = 'Estudios';
    }
  }
}