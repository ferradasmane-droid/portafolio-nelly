# Portafolio Web - Nelly Ferrada

## Descripción del proyecto

Este proyecto corresponde a mi portafolio web personal, desarrollado con Vue 3, Vite, Vue Router y Pinia.

El objetivo del portafolio es presentar mi perfil profesional como Desarrolladora Front-End Trainee, mostrar mis habilidades técnicas, evidenciar proyectos realizados durante mi formación y facilitar el contacto para oportunidades laborales, prácticas, colaboración o proyectos freelance.

El portafolio incluye una sección especial de proyectos, donde se presenta la App del Clima del Módulo 8 como proyecto destacado de certificación y portafolio final.

---

## Objetivo del portafolio

Construir un portafolio profesional que permita:

- Presentar mi identidad profesional.
- Mostrar mis habilidades técnicas.
- Organizar proyectos desarrollados durante el curso.
- Agregar enlaces a repositorios públicos de GitHub.
- Facilitar el contacto profesional.
- Evidenciar el uso de buenas prácticas en Vue.
- Mostrar dominio de Vue Router y Pinia.

---

## Secciones del portafolio

El portafolio está organizado en las siguientes secciones:

| Ruta | Sección | Descripción |
|---|---|---|
| `/` | Inicio | Presentación principal del perfil profesional. |
| `/sobre-mi` | Sobre mí | Información personal, objetivo profesional y habilidades. |
| `/proyectos` | Portafolio | Listado de proyectos destacados. |
| `/contacto` | Contacto | Enlaces de contacto, GitHub y LinkedIn. |

---

## Proyecto destacado

### App del Clima - Módulo 8

Proyecto final desarrollado como parte del bootcamp de Desarrollo Front-End.

La aplicación permite consultar el clima actual de comunas de Chiloé utilizando datos reales desde la API Open-Meteo. Incluye vista Home, vista Detalle, pronóstico semanal, estadísticas, alertas meteorológicas, favoritos, login, preferencias de usuario y pruebas unitarias.

Repositorio del proyecto:

[Ver App del Clima M8 en GitHub](https://github.com/ferradasmane-droid/vue-app-clima-m8)

---

## Tecnologías utilizadas

- Vue 3
- Vite
- Vue Router
- Pinia
- Composition API
- `<script setup>`
- JavaScript
- CSS
- Git
- GitHub

---

## Uso de Vue Router

El portafolio utiliza Vue Router para organizar la navegación en distintas vistas.

Las rutas principales son:

```js
{
  path: '/',
  name: 'home',
  component: HomeView,
},
{
  path: '/sobre-mi',
  name: 'about',
  component: AboutView,
},
{
  path: '/proyectos',
  name: 'projects',
  component: ProjectsView,
},
{
  path: '/contacto',
  name: 'contact',
  component: ContactView,
}
```

Vue Router permite que el portafolio tenga una navegación más clara y profesional, separando cada sección en una vista independiente.

---

## Uso de Pinia

El portafolio utiliza Pinia para manejar el estado global de los proyectos.

El store principal es:

```txt
src/stores/projectsStore.js
```

Este store administra la lista de proyectos que se muestran en la sección Portafolio.

Cada proyecto contiene:

- Título.
- Tipo de proyecto.
- Descripción.
- Tecnologías utilizadas.
- Enlace al repositorio.
- Enlace a demo, si corresponde.

Esto permite mantener los datos de los proyectos organizados en un solo lugar y reutilizarlos fácilmente en los componentes.

---

## Estructura principal del proyecto

```bash
portafolio-nelly/
├── src/
│   ├── assets/
│   │   └── main.css
│   ├── components/
│   │   ├── HeaderPortfolio.vue
│   │   └── ProjectCard.vue
│   ├── router/
│   │   └── index.js
│   ├── stores/
│   │   └── projectsStore.js
│   ├── views/
│   │   ├── HomeView.vue
│   │   ├── AboutView.vue
│   │   ├── ProjectsView.vue
│   │   └── ContactView.vue
│   ├── App.vue
│   └── main.js
├── package.json
├── vite.config.js
└── README.md
```

---

## Componentes principales

### `HeaderPortfolio.vue`

Componente encargado de mostrar el encabezado y la navegación principal del portafolio.

### `ProjectCard.vue`

Componente reutilizable utilizado para mostrar cada proyecto dentro de la sección Portafolio.

Recibe la información del proyecto mediante props y muestra:

- Tipo de proyecto.
- Título.
- Descripción.
- Tecnologías.
- Enlace al repositorio.
- Enlace a demo

---

## Vistas principales

### `HomeView.vue`

Vista de inicio del portafolio. Presenta el perfil profesional, una breve descripción personal y accesos a la sección de proyectos y contacto.

### `AboutView.vue`

Vista sobre mí. Incluye perfil profesional, objetivo laboral y habilidades técnicas.

### `ProjectsView.vue`

Vista de portafolio. Muestra los proyectos destacados utilizando los datos almacenados en Pinia.

### `ContactView.vue`

Vista de contacto. Incluye enlaces para correo, GitHub y LinkedIn.

---

## Instalación del proyecto

Para clonar el repositorio:

```bash
git clone https://github.com/ferradasmane-droid/portafolio-nelly.git
```

Entrar a la carpeta del proyecto:

```bash
cd portafolio-nelly
```

Instalar dependencias:

```bash
npm install
```

---

## Ejecutar en modo desarrollo

```bash
npm run dev
```

Luego abrir en el navegador la URL indicada por Vite, por ejemplo:

```txt
http://localhost:5173/
```

---

## Crear versión de producción

```bash
npm run build
```

---

## Repositorio

[Ver repositorio público del portafolio](https://github.com/ferradasmane-droid/portafolio-nelly)

---

---

## Demo

[Ver portafolio en Vercel](https://portafolio-nelly.vercel.app)

---

## Autora

Nelly Ferrada

Portafolio desarrollado con Vue · JavaScript · CSS · GitHub