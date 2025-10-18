# 🌲 NatureApp

<div align="center">

**Plataforma de gestión y exploración de lugares naturales y senderos**

[![Angular](https://img.shields.io/badge/Angular-20.2.2-red?style=for-the-badge&logo=angular)](https://angular.io/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Mapbox](https://img.shields.io/badge/Mapbox-GL_JS-4264fb?style=for-the-badge&logo=mapbox)](https://www.mapbox.com/)
[![Ant Design](https://img.shields.io/badge/Ant_Design-NG_ZORRO-0170FE?style=for-the-badge&logo=antdesign)](https://ng.ant.design/)

</div>

---

## 📋 Descripción

**NatureApp** es una aplicación web moderna desarrollada con Angular que permite gestionar, visualizar y explorar lugares naturales, rutas de senderismo y reseñas de usuarios. Integra mapas interactivos de Mapbox para ofrecer una experiencia visual inmersiva.

### ✨ Características Principales

- 🗺️ **Mapa Interactivo** - Visualización de lugares naturales con Mapbox GL JS
- 📍 **Gestión de Lugares** - CRUD completo de lugares naturales con galería de imágenes
- 🥾 **Rutas y Senderos** - Información detallada de trails (distancia, tiempo, dificultad)
- ⭐ **Sistema de Reseñas** - Valoraciones y comentarios de usuarios
- 🎨 **Diseño Moderno** - UI consistente con Ant Design (Ng-Zorro)
- 📱 **Responsive** - Adaptable a dispositivos móviles y tablets

---

## 🚀 Inicio Rápido

### Prerrequisitos

Asegúrate de tener instalado:

- **Node.js** (v18 o superior)
- **npm** (v9 o superior)
- **Angular CLI** v20.2.2

```bash
npm install -g @angular/cli@20.2.2
```

### Instalación

1. **Clona el repositorio**

```bash
git clone https://github.com/pipeanayap/NatureApp.git
cd NatureApp
```

2. **Instala las dependencias**

```bash
npm install
```

3. **Configura las variables de entorno**

Crea un archivo `.env` en la raíz del proyecto basándote en `.env.example`:

```env
API_URL=http://localhost:5269/api
MAPBOX_TOKEN=tu_token_de_mapbox_aqui
```

4. **Genera el archivo de configuración**

```bash
npm run setup:env
```

5. **Inicia el servidor de desarrollo**

```bash
npm start
```

La aplicación estará disponible en `http://localhost:4200/`

---

## 🏗️ Arquitectura del Proyecto

```
src/
├── app/
│   ├── core/                    # Servicios y modelos principales
│   │   ├── models/              # Interfaces TypeScript
│   │   │   ├── place.model.ts
│   │   │   ├── trail.model.ts
│   │   │   └── review.model.ts
│   │   └── services/            # Servicios HTTP
│   │       ├── place.ts
│   │       └── trail.ts
│   ├── pages/                   # Componentes de páginas
│   │   ├── admin-layout/        # Layout principal con sidebar
│   │   ├── inicio-component/    # Mapa interactivo
│   │   ├── places-component/    # Lista de lugares
│   │   ├── places-detail/       # Detalle de lugar
│   │   └── trail-component/     # Lista de senderos
│   ├── shared/                  # Componentes compartidos
│   │   └── side-bar/            # Barra lateral de navegación
│   └── environments/            # Configuración de entornos
└── styles.scss                  # Estilos globales
```

---

## 🛠️ Tecnologías Utilizadas

| Tecnología | Versión | Uso |
|-----------|---------|-----|
| **Angular** | 20.2.2 | Framework principal |
| **TypeScript** | 5.9.2 | Lenguaje de programación |
| **Mapbox GL JS** | - | Mapas interactivos |
| **Ng-Zorro (Ant Design)** | - | Componentes UI |
| **RxJS** | ~7.8.0 | Programación reactiva |
| **SCSS** | - | Preprocesador CSS |

---

## 📦 Scripts Disponibles

```bash
# Desarrollo
npm start              # Inicia servidor de desarrollo
npm run setup:env      # Genera archivo de configuración

# Build
npm run build          # Compilación para producción
npm run watch          # Build en modo watch

# Testing
npm test               # Ejecuta tests unitarios
```

---

## 🎨 Componentes Principales

### 🗺️ Inicio (Mapa)
Mapa interactivo centrado en México que muestra todos los lugares naturales con marcadores personalizados.

### 📍 Lugares
Tabla con listado completo de lugares naturales, mostrando:
- Nombre y descripción
- Categoría y accesibilidad
- Ubicación geográfica
- Acción para ver detalles

### 🏞️ Detalle de Lugar
Vista completa con:
- Mapa ubicación específica
- Galería de imágenes
- Información detallada
- Senderos disponibles
- Reseñas de usuarios

### 🥾 Senderos
Listado de todas las rutas disponibles con:
- Distancia en kilómetros
- Tiempo estimado
- Nivel de dificultad (Fácil/Moderado/Difícil)
- Tipo (Loop o Lineal)
- Lugar asociado

---

## 🔧 Configuración del Backend

La aplicación se conecta a una API REST desarrollada en .NET Core:

**Base URL:** `http://localhost:5269/api`

### Endpoints disponibles:

- `GET /Place` - Obtener todos los lugares
- `GET /Place/{id}` - Obtener lugar por ID
- `GET /Trail` - Obtener todos los senderos

---

## 🌍 Variables de Entorno

| Variable | Descripción | Ejemplo |
|----------|-------------|---------|
| `API_URL` | URL del backend | `http://localhost:5269/api` |
| `MAPBOX_TOKEN` | Token de Mapbox | `pk.eyJ1...` |

---

## 🎯 Roadmap

- [ ] Sistema de autenticación de usuarios
- [ ] CRUD completo desde el frontend
- [ ] Filtros y búsqueda avanzada
- [ ] Modo offline con PWA
- [ ] Exportación de rutas en formato GPX
- [ ] Sistema de favoritos

---

## 👥 Contribución

Las contribuciones son bienvenidas! Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add: nueva característica'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

## 📄 Licencia

Este proyecto es parte de un trabajo académico para **La Salle - 6to Semestre - Sistemas Georeferenciados**.

---

## 📞 Contacto

**Repositorio:** [github.com/pipeanayap/NatureApp](https://github.com/pipeanayap/NatureApp)

---

<div align="center">

Desarrollado con ❤️ usando Angular y Mapbox

**[⬆ Volver arriba](#-natureapp)**

</div>
