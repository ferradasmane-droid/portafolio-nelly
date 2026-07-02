import { defineStore } from 'pinia'

export const useProjectsStore = defineStore('projects', {
  state: () => ({
    projects: [
      {
        id: 1,
        title: 'App del Clima - Módulo 8',
        type: 'Proyecto final',
        description:
          'Aplicación SPA desarrollada con Vue 3 que consume la API Open-Meteo. Incluye clima actual, pronóstico semanal, estadísticas, alertas meteorológicas, login, favoritos, perfil de usuario y pruebas unitarias.',
        technologies: [
          'Vue 3',
          'Vite',
          'Vue Router',
          'Pinia',
          'Open-Meteo API',
          'Vitest',
        ],
        repo: 'https://github.com/ferradasmane-droid/vue-app-clima-m8',
        demo: '',
        status: 'Finalizado',
      },
      {
        id: 2,
        title: 'Portal Turístico Chiloé',
        type: 'Proyecto web turístico',
        description:
          'Propuesta de sitio web orientada a promover el turismo en Chiloé, mostrando comunas, paisajes, cultura local, gastronomía, alojamientos y actividades turísticas con una interfaz clara y visualmente atractiva.',
        technologies: ['Vue 3', 'JavaScript', 'CSS', 'Responsive Design'],
        repo: '',
        demo: '',
        status: 'En desarrollo',
      },
      {
        id: 3,
        title: 'Centro de Eventos Vue',
        type: 'Práctica Vue',
        description:
          'Aplicación práctica desarrollada con Vue para trabajar eventos del DOM, modificadores, búsqueda, favoritos y renderizado dinámico.',
        technologies: ['Vue 3', 'Eventos', 'v-model', 'CSS'],
        repo: '',
        demo: '',
        status: 'Proyecto académico',
      },
      {
        id: 4,
        title: 'Login con Testing',
        type: 'Pruebas unitarias',
        description:
          'Formulario de login probado con Vitest y Vue Test Utils, validando renderizado, comportamiento y eventos del componente.',
        technologies: ['Vue 3', 'Vitest', 'Vue Test Utils', 'Testing'],
        repo: '',
        demo: '',
        status: 'Proyecto académico'
      },
    ],
  }),

  getters: {
    featuredProjects: (state) => state.projects,
  },
})