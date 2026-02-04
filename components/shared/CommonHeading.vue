<script setup>
const props = defineProps({
  subtitle: String,
  title: String,
});
</script>
<template>
  <div class="d-flex flex-column ga-5">
    <h2 class="text-h2 text-dark">{{ title }}</h2>
    <p class="text-subtitle-1 text-dark" :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-70' : 'opacity-85'">{{ subtitle }}</p>
  </div>
</template>
