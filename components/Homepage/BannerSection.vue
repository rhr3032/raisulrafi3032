<script setup lang="ts">
import { Icon } from '@iconify/vue';
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";
</script>
<template>
  <v-container fluid class="hero-container pa-0">
    <!-- Image Background -->
    <img src="/banner/banner.jpg" alt="banner" class="banner-bg" />

    <!-- Gradient Overlay -->
    <div class="gradient-overlay"></div>

    <!-- Content bottom-left -->
    <div class="container-lg">
      <div class="hero-content">
        <div class="mw-460">
          <!-- Top row: icon + paragraph -->
          <img
              :src="AnimatedIcon"
              alt="icon"
              height="44"
              width="44"
              class="icon-rotate"
            />
          <div class="d-flex ga-6">
            <p class="text-white text-subtitle-1 mb-0">
              <span class="opacity-70">UI/UX Designer with </span>
              <span class="text-primary opacity-100">4+ years of experience </span>
              <br>
              <span class="opacity-70">crafting intuitive digital experiences that delight users and drive business success.</span>
            </p>
          </div>
        </div>

        <!-- Bottom row: title + badge -->
        <div class="d-flex flex-md-row flex-column ga-5 align-md-end align-start mt-md-6 mt-3">
          <h1 class="text-white text-h1 font-weight-bold mb-0">Raisul <span class="text-primary">R.</span></h1>
          <div class="mt-lg-12 mt-8">
          <v-btn class="interactive-button" to="" size="lg" flat>
            <span class="label">View Resume</span>
            <v-avatar size="45" class="icon bg-white">
              <Icon icon="material-symbols:arrow-cool-down" class="text-secondary" height="20" />
            </v-avatar>
          </v-btn>
        </div>
        </div>
      </div>
    </div>
  </v-container>
</template>

<style scoped>
.banner-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  z-index: 0;
}

@media (max-width: 768px) {
  .banner-bg {
    object-position: center;
  }
}

.hero-container {
  position: relative;
  overflow: hidden;
  min-height: 600px;
  display: flex;
  align-items: flex-end;
}

.gradient-overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.7));
  z-index: 1;
  pointer-events: none;
}

.container-lg {
  position: relative;
  z-index: 2;
  width: 100%;
  padding: 40px;
}

.hero-content {
  position: relative;
  z-index: 2;
}
</style>
