<template>
  <section id="portafolio" class="section portafolio">
    <div class="section-titulo">
      <p>Portafolio</p>
      <h2>Proyectos destacados</h2>
    </div>

    <div class="projects-grid">
      <article
        v-for="proyecto in proyectos"
        :key="proyecto.titulo"
        class="project-card"
      >
        <div class="project-tag">
          {{ proyecto.tipo }}
        </div>

        <h3>{{ proyecto.titulo }}</h3>

        <p>
          {{ proyecto.descripcion }}
        </p>

        <ul>
          <li
            v-for="tecnologia in proyecto.tecnologias"
            :key="tecnologia"
          >
            {{ tecnologia }}
          </li>
        </ul>

        <div class="project-links">
          <a
            v-if="proyecto.repo"
            :href="proyecto.repo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Repositorio
          </a>

          <a
            v-if="proyecto.demo"
            :href="proyecto.demo"
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver demo
          </a>
        </div>
      </article>
    </div>
  </section>
</template>

<script setup>
const proyectos = [
  {
    titulo: 'App del Clima - Módulo 8',
    tipo: 'Proyecto final',
    descripcion:
      'Aplicación SPA desarrollada con Vue 3 que consume la API Open-Meteo. Incluye clima actual, pronóstico semanal, estadísticas, alertas meteorológicas, login, favoritos, perfil de usuario y pruebas unitarias.',
    tecnologias: [
      'Vue 3',
      'Vite',
      'Pinia',
      'Vue Router',
      'Open-Meteo API',
      'Vitest',
    ],
    repo: 'https://github.com/ferradasmane-droid/vue-app-clima-m8',
    demo: '',
  },
  {
    titulo: 'Raíces y Tapices Chiloé',
    tipo: 'Proyecto web',
    descripcion:
      'Propuesta de sitio web para emprendimiento local de tapicería, restauración y turismo creativo en Chiloé, con enfoque visual, identidad territorial y presentación de servicios.',
    tecnologias: [
      'HTML',
      'CSS',
      'JavaScript',
      'Diseño responsive',
    ],
    repo: '',
    demo: '',
  },
  {
    titulo: 'Centro de Eventos Vue',
    tipo: 'Práctica Vue',
    descripcion:
      'Aplicación práctica para trabajar eventos del DOM, modificadores, formularios, búsqueda, favoritos y renderizado dinámico con Vue.',
    tecnologias: [
      'Vue 3',
      'Eventos',
      'v-model',
      'CSS',
    ],
    repo: '',
    demo: '',
  },
  {
    titulo: 'Login con Testing',
    tipo: 'Pruebas unitarias',
    descripcion:
      'Formulario de login desarrollado con Vue y probado con Vitest y Vue Test Utils, validando renderizado, datos ingresados, eventos y comportamiento del componente.',
    tecnologias: [
      'Vue 3',
      'Vitest',
      'Vue Test Utils',
      'Testing',
    ],
    repo: '',
    demo: '',
  },
]
</script>