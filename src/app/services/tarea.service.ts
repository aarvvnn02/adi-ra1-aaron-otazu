import { Injectable } from '@angular/core';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class TareaService {
  // Lista inicial para que la aplicación tenga algunos ejemplos.
  tareas: Tarea[] = [
    { id: 1, titulo: 'Estudiar Angular', descripcion: 'Repasar los componentes y las rutas.', categoria: 'Estudios', terminada: false, favorita: true },
    { id: 2, titulo: 'Hacer la compra', descripcion: 'Comprar fruta, leche y pan.', categoria: 'Personal', terminada: false, favorita: false },
    { id: 3, titulo: 'Ordenar apuntes', descripcion: 'Poner en orden los apuntes de clase.', categoria: 'Estudios', terminada: true, favorita: false }
  ];

  obtenerTareas(): Tarea[] {
    return this.tareas;
  }

  agregarTarea(titulo: string, descripcion: string, categoria: string): void {
    const nuevaTarea: Tarea = {
      id: Date.now(),
      titulo: titulo,
      descripcion: descripcion,
      categoria: categoria,
      terminada: false,
      favorita: false
    };
    this.tareas.push(nuevaTarea);
  }

  cambiarEstado(id: number): void {
    const tarea = this.tareas.find(item => item.id === id);
    if (tarea) {
      tarea.terminada = !tarea.terminada;
    }
  }

  cambiarFavorito(id: number): void {
    const tarea = this.tareas.find(item => item.id === id);
    if (tarea) {
      tarea.favorita = !tarea.favorita;
    }
  }

  borrarTarea(id: number): void {
    this.tareas = this.tareas.filter(item => item.id !== id);
  }

  obtenerFavoritas(): Tarea[] {
    return this.tareas.filter(tarea => tarea.favorita);
  }

  contarTerminadas(): number {
    return this.tareas.filter(tarea => tarea.terminada).length;
  }
}