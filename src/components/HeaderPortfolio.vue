<template>
  <header class="header">
    <RouterLink to="/" class="logo">
      Nelly Ferrada
    </RouterLink>

    <nav class="nav">
      <RouterLink to="/">
        Inicio
      </RouterLink>

      <RouterLink to="/sobre-mi">
        Sobre mí
      </RouterLink>

      <RouterLink to="/proyectos">
        Portafolio
      </RouterLink>

      <RouterLink to="/contacto">
        Contacto
      </RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>