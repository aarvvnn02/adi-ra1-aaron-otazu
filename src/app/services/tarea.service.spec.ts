import { TestBed } from '@angular/core/testing';
import { TareaService } from './tarea.service';

describe('TareaService', () => {
  let servicio: TareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    servicio = TestBed.inject(TareaService);
  });

  it('debe crear el servicio', () => {
    expect(servicio).toBeTruthy();
  });

  it('debe añadir una tarea a la lista', () => {
    const numeroInicial = servicio.obtenerTareas().length;
    servicio.agregarTarea('Tarea de prueba', 'Descripción', 'Estudios');
    expect(servicio.obtenerTareas().length).toBe(numeroInicial + 1);
  });

  it('debe cambiar una tarea a terminada', () => {
    const primeraTarea = servicio.obtenerTareas()[0];
    servicio.cambiarEstado(primeraTarea.id);
    expect(primeraTarea.terminada).toBeTrue();
  });
});