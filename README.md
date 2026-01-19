# Catálogo de Productos - Angular

## Descripción

Esta es una aplicación web de catálogo de productos desarrollada con Angular, que permite a los usuarios explorar y filtrar una colección de televisores y sistemas de audio. La aplicación presenta una interfaz moderna y responsiva con un diseño de gradiente oscuro.

## Arquitectura de Angular

La aplicación utiliza la arquitectura de componentes standalone de Angular, con los siguientes elementos principales:

- **Componentes Standalone**: App, Header, Filter, ProductList y ProductCard.
- **Servicio**: ProductService para manejar la lógica de productos.
- **Comunicación**: @Input/@Output para comunicación entre componentes.
- **Modelo de Datos**: Interfaz Product para tipado fuerte.

## Requisitos Previos

- Node.js (versión 18 o superior)
- npm o yarn

## Instalación

1. Clona el repositorio o descarga los archivos.
2. Navega al directorio del proyecto:
   ```bash
   cd catalogo
   ```
3. Instala las dependencias:
   ```bash
   npm install
   ```

## Ejecución

### Desarrollo Local

Para ejecutar la aplicación en modo desarrollo (con hot reload):

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200`.

### Producción

Para construir y servir la aplicación en modo producción:

1. Construye la aplicación:
   ```bash
   npm run build
   ```

2. Sirve los archivos generados (ubicados en `dist/demo`):
   - Opción 1: Usando un servidor simple (requiere instalación global):
     ```bash
     npx serve dist/demo
     ```
   - Opción 2: Usando http-server:
     ```bash
     npx http-server dist/demo -p 8080
     ```
   - Opción 3: Para despliegue en un servidor web como Nginx o Apache, copia los contenidos de `dist/demo` al directorio raíz del servidor.

## Estructura del Proyecto

```
src/
├── app/
│   ├── components/
│   │   ├── filter/
│   │   ├── header/
│   │   ├── product-card/
│   │   └── product-list/
│   └── services/
│       └── product.service.ts
├── assets/
├── global_styles.css
├── index.html
└── main.ts
```

## Funcionalidades

- Visualización de catálogo de productos (TVs y speakers)
- Filtrado por marca
- Interfaz responsiva y moderna

## Tecnologías Utilizadas

- Angular 21
- TypeScript
- RxJS
- Zone.js

## Contribución

Para contribuir al proyecto:

1. Fork el repositorio
2. Crea una rama para tu feature (`git checkout -b feature/nueva-funcionalidad`)
3. Commit tus cambios (`git commit -am 'Agrega nueva funcionalidad'`)
4. Push a la rama (`git push origin feature/nueva-funcionalidad`)
5. Abre un Pull Request

## Licencia

Este proyecto está bajo la Licencia MIT.