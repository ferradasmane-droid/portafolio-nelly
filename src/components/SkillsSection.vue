<template>
  <section id="habilidades" class="section habilidades">
    <div class="section-titulo">
      <p>Stack técnico</p>
      <h2>Habilidades y herramientas</h2>
    </div>

    <div class="skills-grid">
      <article
        v-for="skill in skills"
        :key="skill"
        class="skill-card"
      >
        {{ skill }}
      </article>
    </div>
  </section>
</template>

<script setup>
const skills = [
  'HTML5',
  'CSS3',
  'SASS',
  'JavaScript',
  'Vue 3',
  'Composition API',
  'Vue Router',
  'Pinia',
  'Consumo de APIs',
  'Git',
  'GitHub',
  'Vitest',
  'Vue Test Utils',
  'Responsive Design',
]
</script>