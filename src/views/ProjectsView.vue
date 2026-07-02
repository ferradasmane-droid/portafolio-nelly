<template>
  <main class="section">
    <div class="section-title">
      <p>Portafolio</p>
      <h1>Proyectos destacados</h1>
    </div>

    <div class="projects-grid">
      <ProjectCard
        v-for="project in projectsStore.featuredProjects"
        :key="project.id"
        :project="project"
      />
    </div>
  </main>
</template>

<script setup>
import ProjectCard from '../components/ProjectCard.vue'
import { useProjectsStore } from '../stores/projectsStore'

const projectsStore = useProjectsStore()
</script>