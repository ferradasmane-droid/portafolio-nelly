<template>
  <article class="project-card">
    <span class="project-tag">
      {{ project.type }}
    </span>

    <h3>{{ project.title }}</h3>

    <p>
      {{ project.description }}
    </p>

    <ul class="tech-list">
      <li
        v-for="technology in project.technologies"
        :key="technology"
      >
        {{ technology }}
      </li>
    </ul>

    <div class="project-links">
      <a
        v-if="project.repo"
        :href="project.repo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver repositorio
      </a>

      <a
        v-if="project.demo"
        :href="project.demo"
        target="_blank"
        rel="noopener noreferrer"
      >
        Ver demo
      </a>
    </div>
  </article>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
  },
})
</script>