import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-categoria-card',
  standalone: true,
  template: `
    <div class="categoria">
      <div class="icono">{{ icono }}</div>
      <h3>{{ nombre }}</h3>
      <p>{{ descripcion }}</p>
    </div>
  `,
  styles: [`
    .categoria { background: white; border: 1px solid #e7e9f0; border-radius: 12px; padding: 22px; }
    .icono { font-size: 28px; }
    h3 { margin: 12px 0 6px; }
    p { color: #737b8e; margin: 0; }
  `]
})
export class CategoriaCardComponent {
  @Input() nombre = '';
  @Input() descripcion = '';
  @Input() icono = '📌';
}