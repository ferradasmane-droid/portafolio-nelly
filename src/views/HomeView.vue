<template>
  <main>
    <section class="hero">
      <div class="hero-content">
        <p class="tag">
          Desarrolladora Front-End Trainee
        </p>

        <h1>
          Creando experiencias web con identidad, diseño y tecnología.
        </h1>

        <p class="hero-description">
          Soy Nelly Ferrada, estudiante de Desarrollo de Aplicaciones Front-End.
          Me interesa crear sitios web claros, funcionales y visualmente atractivos,
          aplicando Vue, JavaScript, CSS y buenas prácticas de desarrollo.
        </p>

        <div class="hero-buttons">
          <RouterLink to="/proyectos" class="btn btn-primary">
            Ver proyectos
          </RouterLink>

          <RouterLink to="/contacto" class="btn btn-secondary">
            Contactarme
          </RouterLink>
        </div>
      </div>

      <div class="hero-card">
        <div class="circle"></div>

        <h2>Portafolio Web</h2>

        <p>
          Vue · JavaScript · CSS · GitHub · API · Testing
        </p>
      </div>
    </section>

    <section class="section preview">
      <div class="section-title">
        <p>Proyecto destacado</p>
        <h2>App del Clima - Módulo 8</h2>
      </div>

      <p class="preview-text">
        Proyecto final desarrollado con Vue 3, Vue Router, Pinia, API Open-Meteo,
        estadísticas, alertas meteorológicas, favoritos y pruebas unitarias.
      </p>

      <RouterLink to="/proyectos" class="btn btn-primary">
        Ver portafolio completo
      </RouterLink>
    </section>
  </main>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>