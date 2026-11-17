import { Component } from '@angular/core';
import { CategoriaCardComponent } from '../../components/categoria-card/categoria-card.component';

@Component({
  selector: 'app-categorias',
  standalone: true,
  imports: [CategoriaCardComponent],
  template: `
    <h1>Categorías</h1>
    <p class="intro">Puedes organizar tus tareas según el tipo de actividad.</p>
    <div class="rejilla">
      <app-categoria-card nombre="Estudios" descripcion="Clases, ejercicios y exámenes." icono="📚" />
      <app-categoria-card nombre="Personal" descripcion="Cosas de casa y actividades personales." icono="🏠" />
      <app-categoria-card nombre="Trabajo" descripcion="Tareas y asuntos del trabajo." icono="💼" />
      <app-categoria-card nombre="Otros" descripcion="Cualquier otra cosa pendiente." icono="📌" />
    </div>
  `,
  styles: [`
    .intro { color: #737b8e; }
    .rejilla { display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 25px; }
    @media (max-width: 600px) { .rejilla { grid-template-columns: 1fr; } }
  `]
})
export class CategoriasComponent {}