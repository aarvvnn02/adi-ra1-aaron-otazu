import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [FormsModule],
  template: `
    <h1>Contacto</h1>
    <p class="intro">Si tienes alguna sugerencia, puedes escribirla aquí.</p>
    <form class="formulario" (ngSubmit)="enviar()">
      <label for="nombre">Nombre</label>
      <input id="nombre" name="nombre" [(ngModel)]="nombre" required>
      <label for="correo">Correo electrónico</label>
      <input id="correo" name="correo" type="email" [(ngModel)]="correo" required>
      <label for="mensaje">Mensaje</label>
      <textarea id="mensaje" name="mensaje" rows="5" [(ngModel)]="mensaje" required></textarea>
      <button class="boton" type="submit">Enviar mensaje</button>
      @if (enviado) {
        <p class="correcto">Mensaje enviado correctamente (demostración).</p>
      }
    </form>
  `,
  styles: [`
    .intro { color: #737b8e; }
    .formulario { background: white; border: 1px solid #e7e9f0; border-radius: 12px; padding: 22px; max-width: 600px; margin-top: 22px; }
    label { display: block; margin: 12px 0 6px; }
    input, textarea { width: 100%; padding: 11px; border: 1px solid #d9dce6; border-radius: 7px; font: inherit; box-sizing: border-box; }
    .boton { margin-top: 16px; border: 0; border-radius: 7px; background: #3546a5; color: white; padding: 11px 16px; cursor: pointer; }
    .correcto { color: #267a4b; }
  `]
})
export class ContactoComponent {
  nombre = '';
  correo = '';
  mensaje = '';
  enviado = false;

  enviar(): void {
    this.enviado = true;
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  }
}