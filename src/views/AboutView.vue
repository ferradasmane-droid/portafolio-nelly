<template>
  <main class="section">
    <div class="section-title">
      <p>Sobre mí</p>
      <h1>Perfil profesional</h1>
    </div>

    <div class="about-grid">
      <section class="about-box">
        <p>
          Soy una persona responsable, perseverante y con experiencia en atención
          de público, ventas, organización administrativa y resolución de problemas.
          Actualmente estoy orientando mi perfil hacia el desarrollo Front-End,
          integrando mis habilidades comunicacionales con herramientas tecnológicas.
        </p>

        <p>
          Durante mi formación he trabajado con HTML, CSS, SASS, JavaScript,
          Vue 3, Vue Router, Pinia, consumo de APIs, Git, GitHub y pruebas unitarias.
          Mi objetivo es desarrollar productos web útiles, mantenibles y con una
          buena experiencia para el usuario.
        </p>
      </section>

      <section class="about-card">
        <h2>Objetivo</h2>

        <p>
          Integrarme al área TI como desarrolladora Front-End Trainee,
          aportando compromiso, aprendizaje continuo y orientación al usuario.
        </p>
      </section>
    </div>

    <section class="section skills-section">
      <div class="section-title">
        <p>Stack técnico</p>
        <h2>Habilidades y herramientas</h2>
      </div>

      <div class="skills-grid">
        <span
          v-for="skill in skills"
          :key="skill"
          class="skill-card"
        >
          {{ skill }}
        </span>
      </div>
    </section>
  </main>
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