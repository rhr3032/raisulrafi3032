<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useServicesStore } from "@/store/services";
import { Icon } from "@iconify/vue";

const store = useServicesStore();

onMounted(() => {
  store.fetchServices();
});

const services = computed(() => store.getServices);

const slugify = (title?: string) => {
  if (!title) return "";
  return title
    .toLowerCase()
    .replace(/ /g, "-")
    .replace(/[^\w-]+/g, "");
};
</script>

<template>
  <div class="bg-surface">
    <SharedSectionSpacer />
    <div class="container-lg">
      <v-row>
        <v-col cols="12" lg="4" class="mb-lg-0 mb-8">
          <SharedLeftSideLightHeading number="02" title="What I Offer" />
        </v-col>
        <v-col cols="12" lg="8">
          <SharedCommonHeading
            class="mw-md-575"
            title="UI/UX design services tailored to your product"
            subtitle="I help teams design user-centered digital products through research, wireframes, prototyping, and polished UI design."
          />
        </v-col>
      </v-row>

      <v-row class="mt-lg-16 mt-8">
        <v-col 
          v-for="service in services" 
          :key="service.id"
          cols="12"
          sm="6"
          lg="4"
        >
          <NuxtLink
            :to="`/services/${slugify(service.service_title)}`"
            class="project-card"
          >
            <div class="image-wrapper lh-0">
              <img
                :src="service.service_image || '/images/projects/project1.webp'"
                alt="service"
                class="project-image w-100"
                cover
              />
              <div class="image-overlay">
                <v-avatar size="60" class="icon bg-primary">
                  <Icon icon="material-symbols:arrow-outward" height="25" />
                </v-avatar>
              </div>
            </div>
          </NuxtLink>
          <h3 class="text-h3 text-dark py-5">
            {{ service.service_title }}
          </h3>
          <div class="d-flex ga-3">
            <v-chip
              v-if="service.category"
              variant="outlined"
              class="text-subtitle-2 text-dark"
            >
              {{ service.category }}
            </v-chip>
            <v-chip
              v-if="service.duration"
              variant="outlined"
              class="text-subtitle-2 text-dark"
            >
              {{ service.duration }}
            </v-chip>
          </div>
        </v-col>
      </v-row>
    </div>
    <SharedSectionSpacer />
  </div>
</template>

<style scoped>
.project-card {
  display: block;
  text-decoration: none;
}

.text-h3 {
  line-height: 1.2;
}
</style>
