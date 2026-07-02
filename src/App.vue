<template>
  <div class="app">
    <HeaderPortfolio />

    <RouterView />
  </div>
</template>

<script setup>
import { RouterView } from 'vue-router'
import HeaderPortfolio from './components/HeaderPortfolio.vue'
</script>
