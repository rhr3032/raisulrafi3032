<script setup lang="ts">
import { Icon } from "@iconify/vue";
</script>

<template>
  <div class="cta-section bg-primary">
    <div class="container-lg">
      <div class="text-center py-16">
        <h2 class="text-60 text-dark mb-4 cta-title">Ready to get started?</h2>
        <p class="text-h6 text-dark mb-8 cta-text">
          Let's discuss how we can help bring your project to life
        </p>

        <v-btn class="interactive-button-dark cta-button" to="/contact" size="lg" flat>
          <span class="label">Contact Us</span>
          <v-avatar size="45" class="icon bg-dark">
            <Icon icon="material-symbols:arrow-outward" class="text-white" height="20" />
          </v-avatar>
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cta-title,
.cta-text {
  color: rgb(var(--v-theme-secondary)) !important;
}

.dark .cta-title,
.dark .cta-text {
  color: rgb(var(--v-theme-secondary)) !important;
}

.cta-button {
  background: rgb(var(--v-theme-secondary)) !important;
}

.dark .cta-button {
  background: rgb(var(--v-theme-secondary)) !important;
}

.cta-button .icon {
  background: rgb(var(--v-theme-secondary)) !important;
}

.dark .cta-button .icon {
  background: rgb(var(--v-theme-secondary)) !important;
}

.cta-button .icon .text-white {
  color: white !important;
}

.dark .cta-button .icon .text-white {
  color: white !important;
}

.dark .cta-section {
  background: rgb(var(--v-theme-primary)) !important;
}
</style>
