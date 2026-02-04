<script setup lang="ts">
import { ref } from "vue";
import { Icon } from "@iconify/vue";
import { useTheme } from "vuetify";
import AnimatedIcon from "/images/svgs/dark-astrisk.svg";
import AnimatedIconPrimary from "/images/svgs/primary-astrisk.svg";

const LIGHT = "LIGHT_THEME";
const DARK = "DARK_THEME";
const menuOpen = ref(false);

const theme = useTheme();

const toggleTheme = () => {
  theme.global.name.value =
    theme.global.name.value === LIGHT ? DARK : LIGHT;
};

interface Item {
  title: string;
  url: string;
}

const items: Item[] = [
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Articles",
    url: "/blog",
  },
  {
    title: "Contact",
    url: "/contact",
  },
];
</script>

<template>
  <v-menu v-model="menuOpen" :close-on-content-click="false">
    <template v-slot:activator="{ props }">
      <v-btn
        class="custom-hover-primary"
        rounded="pill"
        variant="text"
        v-bind="props"
        icon
      >
        <v-avatar size="50" color="white">
          <Icon icon="tabler:menu" height="30" />
        </v-avatar>
      </v-btn>
    </template>
    <v-sheet rounded="lg" width="380" elevation="10" class="pa-6 mt-n12 glass-menu">
      <div class="d-flex align-center justify-space-between border-b pb-4 ">
        <p class="text-subtitle-1 menu-title">Menu</p>
        <div class="d-flex align-center gap-3">
          <v-btn
            icon
            flat
            @click="toggleTheme"
            size="small"
            class="theme-toggle-btn"
          >
            <Icon
              :icon="
                theme.global.name.value === LIGHT
                  ? 'solar:sun-bold'
                  : 'solar:moon-stars-bold'
              "
              width="20"
              height="20"
            />
          </v-btn>
          <v-btn
            size="35"
            color="dark"
            icon
            variant="text"
            @click="menuOpen = false"
            ><Icon icon="tabler:x" height="26"
          /></v-btn>
        </div>
      </div>
      <ul class="menu-list d-flex flex-column ga-2 py-4">
        <li v-for="(item, index) in items" :key="index">
          <NuxtLink :to="item.url" class="menu-link font-weight-bold text-h5 text-white">
            <span class="d-flex align-center">
              <img
                :src="AnimatedIcon"
                alt="icon"
                class="icon-rotate hide-icon dark-icon"
              />
              <img
                :src="AnimatedIconPrimary"
                alt="icon"
                class="icon-rotate hide-icon primary-icon"
              />
              {{ item.title }}
            </span>
          </NuxtLink>
        </li>
      </ul>
    </v-sheet>
  </v-menu>
</template>
<style scoped>
.glass-menu {
  background: rgba(255, 255, 255, 0.15) !important;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15), inset 0 1px 1px rgba(255, 255, 255, 0.5);
}

.menu-title {
  color: rgba(0, 0, 0, 0.85);
  font-weight: 600;
}

.menu-link {
  color: rgba(0, 0, 0, 0.85) !important;
  text-decoration: none !important;
  transition: color 0.3s ease;
}

.menu-link:hover {
  color: rgb(var(--v-theme-primary)) !important;
}

.contact-link {
  color: rgba(0, 0, 0, 0.85) !important;
  transition: color 0.3s ease;
}

.contact-link:hover {
  color: rgb(var(--v-theme-primary)) !important;
}

.border-b {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}

.theme-toggle-btn {
  color: rgba(0, 0, 0, 0.85) !important;
}

.theme-toggle-btn:hover {
  background: rgba(197, 255, 0, 0.2) !important;
}

:deep(.dark) .glass-menu {
  background: rgba(31, 42, 46, 0.8) !important;
  border-color: rgba(255, 255, 255, 0.15);
}

:deep(.dark) .menu-title {
  color: rgb(var(--v-theme-white));
}

:deep(.dark) .menu-link {
  color: rgb(var(--v-theme-white)) !important;
}

:deep(.dark) .contact-link {
  color: rgb(var(--v-theme-white)) !important;
}

:deep(.dark) .border-b {
  border-bottom-color: rgba(255, 255, 255, 0.1);
}

:deep(.dark) .theme-toggle-btn {
  color: rgb(var(--v-theme-white)) !important;
}
</style>