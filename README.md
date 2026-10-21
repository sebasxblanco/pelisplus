# PelisPlus

Práctica de Evaluación Continua 2 de Diseño y despliegue de aplicaciones multiplataforma.
PelisPlus es una aplicación web con React que consume la API de [The Movie Database (TMDB)](https://developer.themoviedb.org/docs):
películas populares, búsqueda por título y lista de favoritos guardada en `localStorage`.

## Tecnologías

- React 19 con Vite 8
- React Router 8 (rutas `/` y `/favorites`)
- Context API para los favoritos

## Puesta en marcha

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Crear el archivo `.env` a partir del ejemplo y poner la API Key de TMDB
   (se obtiene gratis registrándose en https://www.themoviedb.org/):

   ```bash
   cp .env.example .env
   # editar .env: VITE_TMDB_API_KEY=tu_api_key
   ```

   El `.env` está en `.gitignore` y no se sube al repositorio.

3. Arrancar en desarrollo:

   ```bash
   npm run dev
   ```

## Estructura

```
src/
├── App.jsx                  Rutas con React Router y provider del contexto
├── main.jsx                 Punto de entrada
├── index.css                Estilos globales
├── components/
│   ├── NavBar.jsx           Barra de navegación fija y responsive
│   └── MovieCard.jsx        Tarjeta: póster, título, año y botón de favorito
├── pages/
│   ├── Home.jsx             Populares, búsqueda, carga y errores
│   └── Favorites.jsx        Lista de favoritos o mensaje si está vacía
├── contexts/
│   └── MovieContext.jsx     Estado global de favoritos y hook useMovieContext
├── services/
│   └── api.js               Peticiones a TMDB
└── css/                     Estilos de cada componente
```
