# Información

Este proyecto está basado en el boilerplate de Jordi Tarrida de la UOC, versión 3.10.0. Se ha modificado según las indicaciones del profesor de la asignatura Herramientas HTML y CSS II.

## Requisitos

[Node.js](http://nodejs.org/) >= 22.12.0

## Instalación

Clona este repositorio con `git clone`, o descarga el fichero zip.

Usando la terminal, escribe `npm install` para instalar todas las dependencias.

### Desarrollo

Escriba en la terminal `npm run dev` para poder inicializar el servidor de la aplicación. Debería de abrirse automáticamente la dirección `http://localhost:8123/`, si no, escribe la dirección en tu navegador.

### Comandos

| Command                 | Description                                                                                                                                                      |
| ----------------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `npm run dev`           | Hace que arranque el servidor web. Cada vez que se modifique algún fichero, el servidor se reiniciará, y refrescará los cambios automáticamente en el navegador. |
| `npm run build`         | Compila todos los ficheros de la carpeta `src/` y los copia en la carpeta `dist`.                                                                                |
| `dist/`                 | Los ficheros preparados para producción.                                                                                                                         |
| `npm run clean`         | Borra todo el contenido de la carpeta`/dist` folder y las carpetas temporales que se utilizan para la caché.                                                     |
| `npm run stylelint`     | Comprueba que las hojas de estilo pasan todas las reglas que se han definido en el fichero `.stylelintrc` y en las reglas que tiene por defecto                  |
| `npm run stylelint:fix` | Arregla automáticamente la mayor parte de los problemas detectados en las hojas de estilo.                                                                       |
|                         |
