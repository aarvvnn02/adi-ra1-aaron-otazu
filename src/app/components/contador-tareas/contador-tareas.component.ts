import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-contador-tareas',
  standalone: true,
  template: `
    <div class="contador">
      <span>{{ etiqueta }}</span>
      <strong>{{ cantidad }}</strong>
    </div>
  `,
  styles: [`
    .contador { background: white; border: 1px solid #e7e9f0; border-radius: 12px; padding: 18px; }
    span { display: block; color: #737b8e; font-size: 14px; }
    strong { display: block; color: #3546a5; font-size: 30px; margin-top: 6px; }
  `]
})
export class ContadorTareasComponent {
  @Input() etiqueta = '';
  @Input() cantidad = 0;
}