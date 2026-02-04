<script setup lang="ts">
import { Icon } from "@iconify/vue";
const FooterLinksCol1 = ref([
  {
    title: "Home",
    url: "/",
  },
  {
    title: "About",
    url: "/about",
  },
  {
    title: "Services",
    url: "/services",
  },
  {
    title: "Projects",
    url: "/projects",
  },
  {
    title: "Articles",
    url: "/blog",
  },
]);

const FooterLinksCol2 = ref([
  {
    title: "Terms & Conditions",
    url: "/terms-conditions",
  },
  {
    title: "Privacy Policy",
    url: "/privacy-policy",
  },
  {
    title: "Error 404",
    url: "/error",
  },
]);

const SocialLinks = ref([
  {
    title: "Behance",
    url: "https://www.behance.net/rhr3032",
    icon: "mdi:behance"
  },
  {
    title: "Dribbble",
    url: "https://dribbble.com/rhr3032",
    icon: "mdi:dribbble"
  },
  {
    title: "LinkedIn",
    url: "https://www.linkedin.com/in/rhr3032",
    icon: "mdi:linkedin"
  },
  {
    title: "GitHub",
    url: "https://github.com/rhr3032",
    icon: "mdi:github"
  },
  {
    title: "Gumroad",
    url: "https://rhr3032.gumroad.com/",
    icon: "simple-icons:gumroad"
  },
  {
    title: "Facebook",
    url: "https://www.facebook.com/nuysdev",
    icon: "mdi:facebook"
  },
  {
    title: "Instagram",
    url: "https://www.instagram.com/nuysdev",
    icon: "mdi:instagram"
  },
  {
    title: "Twitter",
    url: "https://www.x.com/nuysdev",
    icon: "mdi:twitter"
  },
]);
</script>
<template>
  <div class="bg-secondary">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="5">
          <div class="d-flex flex-column ga-10">
            <h2 class="text-h2 pe-lg-16">Let's work together!</h2>
            <div>
              <div class="d-flex flex-column ga-2">
                <NuxtLink
                  href="mailto:contact.raisulrafi@gmail.com"
                  target="_blank"
                  class="d-flex ga-3 align-center text-white text-decoration-none hover-primary-link"
                >
                  <Icon
                    icon="material-symbols:mail"
                    height="24"
                    class="text-primary"
                  />
                  contact.raisulrafi@gmail.com</NuxtLink
                >
                <NuxtLink
                  href="https://wa.me/8801795408194"
                  target="_blank"
                  class="d-flex ga-3 align-center text-white text-decoration-none hover-primary-link"
                >
                  <Icon
                    icon="mdi:whatsapp"
                    height="24"
                    class="text-primary"
                  />
                  +880 1795-408194</NuxtLink
                >
                <NuxtLink
                  href="https://maps.app.goo.gl/hpDp81fqzGt5y4bC8"
                  target="_blank"
                  class="d-flex ga-3 align-center text-white text-decoration-none hover-primary-link"
                >
                  <Icon
                    icon="uil:map-marker"
                    height="24"
                    class="text-primary"
                  />Barisal, Bangladesh</NuxtLink
                >
              </div>
            </div>
            <div class="d-flex flex-wrap ga-3 mt-4">
              <NuxtLink 
                v-for="(item, i) in SocialLinks" 
                :key="i" 
                :to="item.url" 
                target="_blank" 
                class="social-icon-link"
              >
                <v-avatar size="40" class="social-icon-avatar bg-transparent border-thin">
                  <Icon :icon="item.icon" class="text-white" height="20" />
                </v-avatar>
              </NuxtLink>
            </div>
          </div>
        </v-col>
        <v-col cols="12" lg="2" md="4">
          <ul class="list-style-none d-flex flex-column ga-2">
            <li v-for="(item, i) in FooterLinksCol1" :key="i" class="">
              <NuxtLink :to="item.url" class="text-subtitle-1 text-white text-decoration-none hover-primary-link ">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" lg="2" md="4">
          <ul class="list-style-none d-flex flex-column ga-2">
            <li v-for="(item, i) in FooterLinksCol2" :key="i" class="">
              <NuxtLink :to="item.url" class="text-subtitle-1 text-white text-decoration-none hover-primary-link ">{{ item.title }}</NuxtLink>
            </li>
          </ul>
        </v-col>
        <v-col cols="12" lg="3" md="4">
            <div class="d-flex flex-column ga-3 text-lg-right text-left">
              <p class="text-subtitle-1 text-white">© NUYsDev 2026 | All Rights Reserved.</p>
              <div class="mini-map">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d233667.49995724744!2d90.23271839999999!3d22.7010303!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37553552857a2d3f%3A0x5def6054f29eaec8!2sBarisal!5e0!3m2!1sen!2sbd!4v1738684800000!5m2!1sen!2sbd"
                  width="100%" 
                  height="200" 
                  style="border:0; border-radius: 8px;" 
                  allowfullscreen="" 
                  loading="lazy" 
                  referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />

    <ScrollToTop/>
  </div>
</template>
<style scoped>
.social-icon-link {
  transition: transform 0.3s ease;
  display: inline-block;
}

.social-icon-link:hover {
  transform: translateY(-4px);
}

.social-icon-avatar {
  border-color: rgba(255, 255, 255, 0.2) !important;
  transition: all 0.3s ease;
}

.social-icon-link:hover .social-icon-avatar {
  background: rgb(var(--v-theme-primary)) !important;
  border-color: rgb(var(--v-theme-primary)) !important;
}

.social-icon-link:hover .social-icon-avatar .text-white {
  color: rgb(var(--v-theme-secondary)) !important;
}
</style>