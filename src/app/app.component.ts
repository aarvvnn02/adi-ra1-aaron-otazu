import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive],
  template: `
    <header class="cabecera">
      <div class="contenedor barra">
        <a class="logo" routerLink="/">Mis tareas</a>
        <nav>
          <a routerLink="/" routerLinkActive="activo" [routerLinkActiveOptions]="{ exact: true }">Inicio</a>
          <a routerLink="/tareas" routerLinkActive="activo">Tareas</a>
          <a routerLink="/categorias" routerLinkActive="activo">Categorías</a>
          <a routerLink="/favoritos" routerLinkActive="activo">Favoritos</a>
          <a routerLink="/contacto" routerLinkActive="activo">Contacto</a>
        </nav>
      </div>
    </header>

    <main class="contenedor contenido">
      <router-outlet></router-outlet>
    </main>

    <footer>Proyecto de clase · Desarrollo de Aplicaciones Multiplataforma</footer>
  `,
  styles: [`
    .cabecera { background: white; border-bottom: 1px solid #e6e8ef; }
    .barra { min-height: 70px; display: flex; align-items: center; justify-content: space-between; gap: 20px; }
    .logo { font-size: 23px; font-weight: 800; color: #3546a5; text-decoration: none; }
    nav { display: flex; flex-wrap: wrap; gap: 8px; }
    nav a { color: #555d70; text-decoration: none; padding: 9px 12px; border-radius: 8px; }
    nav a:hover, nav a.activo { background: #eef0ff; color: #3546a5; }
    .contenido { min-height: calc(100vh - 145px); padding-top: 34px; padding-bottom: 50px; }
    footer { text-align: center; color: #858b9b; padding: 22px; font-size: 13px; }
    @media (max-width: 700px) { .barra { align-items: flex-start; flex-direction: column; padding: 16px 0; } }
  `]
})
export class AppComponent {}