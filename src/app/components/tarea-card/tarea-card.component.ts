import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Tarea } from '../../models/tarea';

@Component({
  selector: 'app-tarea-card',
  standalone: true,
  template: `
    <article class="tarjeta" [class.hecha]="tarea.terminada">
      <div class="arriba">
        <span class="categoria">{{ tarea.categoria }}</span>
        <button class="estrella" (click)="favorito.emit(tarea.id)" [attr.aria-label]="'Cambiar favorito de ' + tarea.titulo">
          {{ tarea.favorita ? '★' : '☆' }}
        </button>
      </div>
      <h3>{{ tarea.titulo }}</h3>
      <p>{{ tarea.descripcion }}</p>
      <div class="acciones">
        <button class="boton pequeno" (click)="cambiar.emit(tarea.id)">
          {{ tarea.terminada ? 'Marcar pendiente' : 'Marcar hecha' }}
        </button>
        <button class="borrar" (click)="eliminar.emit(tarea.id)">Eliminar</button>
      </div>
    </article>
  `,
  styles: [`
    .tarjeta { background: white; border: 1px solid #e7e9f0; border-radius: 12px; padding: 18px; }
    .tarjeta.hecha { opacity: .7; }
    .tarjeta.hecha h3 { text-decoration: line-through; }
    .arriba, .acciones { display: flex; align-items: center; justify-content: space-between; gap: 10px; }
    .categoria { background: #eef0ff; color: #3546a5; padding: 5px 9px; border-radius: 20px; font-size: 12px; }
    h3 { margin: 15px 0 6px; }
    p { color: #737b8e; min-height: 38px; }
    button { cursor: pointer; border: 0; }
    .estrella { background: none; color: #e2a329; font-size: 24px; }
    .boton { background: #3546a5; color: white; border-radius: 7px; padding: 9px 12px; }
    .pequeno { font-size: 12px; }
    .borrar { color: #c14c56; background: none; }
  `]
})
export class TareaCardComponent {
  @Input() tarea!: Tarea;
  @Output() cambiar = new EventEmitter<number>();
  @Output() favorito = new EventEmitter<number>();
  @Output() eliminar = new EventEmitter<number>();
}