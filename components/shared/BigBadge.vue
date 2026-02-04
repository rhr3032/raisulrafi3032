<script setup lang="ts">
import RoundedArrow from "/images/svgs/rounded-arrow-icon.svg";

defineProps({
  label: {
    type: String,
    default: ""
  },
  href: {
    type: String,
    default: "#"
  }
});
</script>
<template>
    <a :href="href" class="rounded-pill bg-primary pe-1 py-1 ps-8 d-flex align-center badge-link">
      <span v-if="label" class="badge-label">{{ label }}</span>
      <img :src="RoundedArrow" alt="icon" height="52" width="52" />
    </a>
</template>

<style scoped>
.badge-link {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  cursor: pointer;
  overflow: hidden;
  transition: background-color 0.2s ease-in-out, border 0.2s ease-in-out;
  border: 1px solid transparent;
}

.badge-link:hover {
  background-color: rgb(var(--v-theme-secondary));
  border: 1px solid white;
}

.badge-label {
  position: relative;
  z-index: 1;
  font-weight: 700;
  font-size: 0.875rem;
  white-space: nowrap;
  color: rgb(var(--v-theme-secondary));
  transition: transform 0.2s ease-in-out, color 0.2s ease-in-out;
}

.badge-link:hover .badge-label {
  transform: translateX(20px);
  color: white;
}

.badge-link img {
  position: relative;
  z-index: 0;
  transition: transform 0.4s ease, left 0.4s ease;
}

.badge-link:hover img {
  transform: rotate(45deg);
}
</style>