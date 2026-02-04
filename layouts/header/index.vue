<script setup lang="ts">
import { watch } from "vue";
import ToggleMenu from "./ToggleMenu.vue";
import { useTheme } from "vuetify";
import { Icon } from "@iconify/vue";

const LIGHT = "LIGHT_THEME";
const DARK = "DARK_THEME";

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === LIGHT ? DARK : LIGHT;
};

const menuItems = [
  { title: "Home", url: "/" },
  { title: "About", url: "/about" },
  { title: "Projects", url: "/projects" },
  { title: "Services", url: "/services" },
  { title: "Articles", url: "/blog" },
  { title: "Contact", url: "/contact" },
];

// ✅ Sync dark class with Vuetify theme
watch(
  () => theme.global.name.value,
  (newTheme) => {
    const html = document.documentElement;
    if (newTheme === DARK) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  },
  { immediate: true }
);
</script>

<template>
  <header class="header-simple">
    <!-- Desktop Navigation Bar -->
    <nav class="nav-bar desktop-only">
      <div class="nav-container">
        <ul class="nav-items">
          <li v-for="item in menuItems" :key="item.url">
            <NuxtLink :to="item.url" class="nav-link">
              {{ item.title }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Theme Toggle -->
        <button class="theme-btn" @click="toggleTheme" aria-label="Toggle theme">
          <Icon
            :icon="
              theme.global.name.value === LIGHT
                ? 'solar:sun-bold'
                : 'solar:moon-stars-bold'
            "
            width="18"
            height="18"
          />
        </button>
      </div>
    </nav>

    <!-- Mobile Toggle Menu -->
    <div class="mobile-only">
      <ToggleMenu />
    </div>
  </header>
</template>

<style scoped>
.header-simple {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: flex-start;
}

.nav-bar {
  width: fit-content;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border-radius: 50px;
  padding: 12px 24px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.5);
  transition: all 0.3s ease;
}

.nav-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav-items {
  list-style: none;
  display: flex;
  gap: 2rem;
  margin: 0;
  padding: 0;
}

.nav-link {
  color: rgba(0, 0, 0, 0.85);
  text-decoration: none;
  font-size: 13px;
  font-weight: 600;
  letter-spacing: 0.5px;
  transition: color 0.3s ease;
  white-space: nowrap;
  text-transform: capitalize;
}

.nav-link:hover {
  color: rgb(var(--v-theme-primary));
  text-shadow: 0 0 10px rgba(197, 255, 0, 0.3);
}

.nav-link.router-link-active {
  color: rgb(var(--v-theme-primary));
}

.theme-btn {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background: rgba(197, 255, 0, 0.8);
  border: none;
  color: #000;
  cursor: pointer;
  transition: all 0.3s ease;
  padding: 0;
}

.theme-btn:hover {
  background: rgba(197, 255, 0, 0.2);
  border-color: rgba(197, 255, 0, 0.4);
  transform: rotate(20deg);
}

.desktop-only {
  display: flex;
}

.mobile-only {
  display: none;
}

@media (max-width: 768px) {
  .header-simple {
    padding: 15px;
    justify-content: flex-end;
  }

  .desktop-only {
    display: none;
  }

  .mobile-only {
    display: inline-flex;
  }
}
</style>
