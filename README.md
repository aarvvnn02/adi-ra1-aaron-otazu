# Gestor de tareas

Este es un proyecto sencillo hecho con Angular para la actividad de Ampliación de Desarrollo de Interfaces (RA1).

## ¿Para qué sirve la aplicación?

La aplicación permite gestionar fácilmente las tareas diarias, ofreciendo opciones para añadirlas, marcarlas como completadas, guardarlas en favoritos y eliminarlas cuando ya no sean necesarias.

## Páginas de la aplicación

- Inicio: muestra un pequeño resumen de la aplicación y algunas tareas.
- Tareas: desde aquí se pueden añadir tareas, marcarlas como terminadas, ponerlas en favoritos o eliminarlas.
- Categorías: muestra diferentes categorías para tener las tareas mejor organizadas.
- Favoritos: aquí aparecen todas las tareas que se han marcado con una estrella.
- Contacto: tiene un formulario sencillo de ejemplo.

## Componentes presentacionales

- TareaCardComponent: se encarga de mostrar cada tarea y avisar cuando se pulsa alguno de sus botones.
- CategoriaCardComponent: muestra la información de cada categoría.
- ContadorTareasComponent: muestra un número junto a una pequeña descripción.
- MensajeVacioComponent: muestra un mensaje cuando no hay tareas o elementos que enseñar.

## Cómo está organizado el proyecto

- components: contiene los componentes que se pueden reutilizar en diferentes partes de la aplicación.
- pages: aquí están las distintas páginas.
- services: contiene el servicio encargado de guardar y modificar las tareas.
- models: define la estructura que tiene cada tarea.
- assets: carpeta donde se guardan las imágenes y otros recursos.

## Cómo instalar y poner en marcha el proyecto

Para poder utilizarlo, es necesario tener instalados Node.js y Angular CLI.

1. Abrir una terminal dentro de la carpeta del proyecto.
2. Escribir "npm.cmd install" para instalar todo lo necesario.
3. Ejecutar "npm.cmd start" para iniciar la aplicación.
4. Abrir en el navegador "http://localhost:4200".

## Cómo compilar el proyecto

Para compilar la aplicación para producción, se debe ejecutar "ng build". Los archivos generados se almacenarán en la carpeta "dist".

## Pruebas

Para ejecutar las pruebas unitarias del servicio de gestión de tareas, hay que utilizar el comando "npm test".

## Algunas cosas a tener en cuenta

Las tareas se almacenan temporalmente en memoria, por lo que al recargar la página se recuperará la información inicial. Además, el formulario de contacto es únicamente demostrativo y no envía correos electrónicos reales.  