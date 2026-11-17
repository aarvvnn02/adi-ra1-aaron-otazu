import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-mensaje-vacio',
  standalone: true,
  template: `
    <div class="vacio">
      <div>📭</div>
      <h3>{{ titulo }}</h3>
      <p>{{ mensaje }}</p>
    </div>
  `,
  styles: [`
    .vacio { text-align: center; background: white; border: 1px dashed #cfd3df; border-radius: 12px; padding: 35px 18px; color: #737b8e; }
    .vacio div { font-size: 32px; }
    h3 { color: #30364a; margin-bottom: 5px; }
    p { margin: 0; }
  `]
})
export class MensajeVacioComponent {
  @Input() titulo = 'No hay elementos';
  @Input() mensaje = 'Todavía no hay nada que mostrar.';
}