<script setup lang="ts">
import { onMounted, computed } from "vue";
import { useRoute } from "vue-router";
import { useServicesStore } from "@/store/services";
import { Icon } from "@iconify/vue";
import AnimatedIcon from "/images/svgs/astrisk-icon.svg";

const route = useRoute();
const store = useServicesStore();
const slug = route.path.split("/").pop();

onMounted(() => {
  if (slug) {
    store.fetchService(slug);
  }
});

const service = computed(() => store.getSelectedService);

const formattedDescription = computed(() => {
  if (!service.value?.description) return "";
  return service.value.description.replace(/\n/g, "<br>");
});

// Helper functions for circular process design
const getRomanNumeral = (num: number): string => {
  const numerals = ['I', 'II', 'III', 'IV', 'V', 'VI'];
  return numerals[num - 1] || num.toString();
};

const getPhaseIcon = (index: number): string => {
  const icons = [
    'mdi:chart-bar',           // Analysis
    'mdi:palette-outline',     // Design
    'mdi:cogs',               // Implementation
    'mdi:rocket-launch'       // Deployment
  ];
  return icons[index] || 'mdi:circle';
};

const getPhaseDescription = (index: number): string => {
  const descriptions = [
    'Conduct extensive field studies to understand how your idea think',
    'Create a well-polished interface prototype that breathes with elegance through design specification',
    'Converting the prototype into a more refined final product',
    'Usability testing lets us measure the final product against our usability goals from Phase I'
  ];
  return descriptions[index] || '';
};
</script>

<template>
  <div>
    <!-- Hero Banner (matches projects/blog layout) -->
    <div class="common-banner position-relative">
      <v-img
        :src="service?.service_image || '/images/projects/project1.webp'"
        cover
        height="650"
        class="w-100"
      ></v-img>
      <div class="banner-overlay"></div>

      <div class="container-lg">
        <div class="common-banner-content">
          <div class="mw-460">
            <div class="d-flex ga-6">
              <img
                :src="AnimatedIcon"
                alt="icon"
                height="44"
                width="44"
                class="icon-rotate"
              />
              <p class="text-white text-subtitle-1 mb-0">
                <span class="opacity-70">Specialized services for</span>
                <span class="text-primary opacity-100"> measurable impact</span>
                <span class="opacity-70">—designed and built to elevate your brand.</span>
              </p>
            </div>
          </div>

          <div class="d-flex flex-md-row flex-column ga-5 align-md-end align-start mt-md-6 mt-3">
            <h1 class="text-white text-h1 font-weight-bold mb-0">
              {{ service?.service_title }}
            </h1>
            <div class="d-flex ga-3 align-center" v-if="service?.category">
              <v-chip
                color="primary"
                variant="tonal"
                class="text-white"
              >
                {{ service.category }}
              </v-chip>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Service Overview -->
    <div class="bg-darkgray">
      <SharedSectionSpacer />

      <div class="container-lg">
        <v-btn class="interactive-button-small" to="/services" size="lg" flat>
          <v-avatar size="30" class="icon bg-white">
            <Icon icon="material-symbols-light:arrow-back-rounded" height="20" />
          </v-avatar>
          <span class="label">Back</span>
        </v-btn>

        <div class="d-flex flex-md-row flex-column ga-10 mt-10">
          <div class="pr-md-10 pr-4 border-e">
            <p class="text-subtitle-2 text-dark" :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-70' : 'opacity-85'">Scope of work</p>
            <div class="d-flex ga-2 mt-2 flex-wrap">
              <span class="text-subtitle-1 font-weight-medium">{{ service?.category }}</span>
              <span
                v-if="service?.deliverables"
                class="text-subtitle-1 font-weight-medium"
              >
                {{ service.deliverables }}
              </span>
            </div>
          </div>
          <div class="pr-md-10 pr-4 border-e">
            <p class="text-subtitle-2 text-dark" :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-70' : 'opacity-85'">Industry</p>
            <div class="d-flex ga-2 mt-2">
              <span class="text-subtitle-1 font-weight-medium">{{ service?.category || '—' }}</span>
            </div>
          </div>
          <div class="pr-md-10 pr-4 border-e">
            <p class="text-subtitle-2 text-dark" :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-70' : 'opacity-85'">Duration</p>
            <div class="d-flex ga-2 mt-2">
              <span class="text-subtitle-1 font-weight-medium">{{ service?.duration }}</span>
            </div>
          </div>
          <div class="">
            <p class="text-subtitle-2 text-dark" :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-70' : 'opacity-85'">Investment</p>
            <div class="d-flex ga-2 mt-2">
              <span class="text-subtitle-1 font-weight-medium">{{ service?.price_range }}</span>
            </div>
          </div>
        </div>
      </div>
      <SharedSectionSpacer />
    </div>

    <!-- Description Section -->
    <div class="bg-dark-section">
      <SharedSectionSpacer />
      <div class="container-lg">
        <v-row>
          <v-col cols="12" lg="4">
            <h2 class="text-60 text-white mb-6">Overview</h2>

            <v-btn class="interactive-button" to="/contact" size="lg" flat>
              <span class="label">Get Started</span>
              <v-avatar size="45" class="icon bg-white">
                <Icon icon="material-symbols:arrow-outward" height="20" />
              </v-avatar>
            </v-btn>
          </v-col>

          <v-col cols="12" lg="8">
            <div class="service-description text-h6 text-white" v-html="formattedDescription"></div>
          </v-col>
        </v-row>
      </div>
      <SharedSectionSpacer />
    </div>

    <!-- Features Section -->
    <div class="bg-darkgray" v-if="service?.features && service.features.length > 0">
      <SharedSectionSpacer />
      <div class="container-lg">
        <v-row>
          <v-col cols="12" lg="4">
            <h2 class="text-60 text-dark mb-4">Key Features</h2>
            <p class="text-subtitle-1 text-dark" :class="$vuetify.theme.global.name.value === 'light' ? 'opacity-70' : 'opacity-85'">
              Everything you get with this service
            </p>
          </v-col>

          <v-col cols="12" lg="8">
            <div class="features-grid">
              <div
                v-for="(feature, index) in service.features"
                :key="index"
                class="feature-card"
              >
                <div class="feature-card-top">
                  <div class="feature-icon">
                    <Icon icon="mdi:check-circle-outline" height="22" />
                  </div>
                  <span class="feature-index">{{ String(index + 1).padStart(2, '0') }}</span>
                </div>
                <h4 class="feature-title">{{ feature }}</h4>
                <p class="feature-desc">Included in this service package.</p>
              </div>
            </div>
          </v-col>
        </v-row>
      </div>
      <SharedSectionSpacer />
    </div>

    <!-- Process Section -->
    <div class="bg-dark-section" v-if="service?.process_steps && service.process_steps.length > 0">
      <SharedSectionSpacer />
      <div class="container-lg">
        <div class="text-center mb-16">
          <h2 class="text-60 text-white mb-4">My Process</h2>
          <p 
            class="text-h6 text-white opacity-70" 
          >
            A clear, step-by-step approach to deliver exceptional results
          </p>
        </div>

        <div class="process-horizontal">
          <div
            v-for="(step, index) in service.process_steps"
            :key="index"
            class="process-item"
          >
            <div class="process-pill">
              <div class="pill-icon">
                <Icon
                  :icon="getPhaseIcon(index)"
                  height="32"
                />
              </div>
              <div class="pill-content">
                <h4 class="pill-title">{{ step }}</h4>
                <p class="pill-desc">{{ getPhaseDescription(index) }}</p>
              </div>
            </div>
            
            <!-- Arrow connector -->
            <div class="process-arrow" v-if="index < service.process_steps.length - 1">
              <Icon icon="mdi:arrow-right" height="32" />
            </div>
          </div>
        </div>
      </div>
      <SharedSectionSpacer />
    </div>

    <!-- Gallery Section -->
    <div class="bg-white" v-if="service?.detail_img_1">
      <SharedSectionSpacer />
      <div class="container-lg">
        <v-row>
          <v-col cols="12">
            <div class="gallery-image mb-8">
              <img :src="service.detail_img_1" alt="service detail" class="w-100" />
            </div>
          </v-col>

          <v-col cols="12" md="6" v-if="service?.detail_img_2">
            <div class="gallery-image">
              <img :src="service.detail_img_2" alt="service detail" class="w-100" />
            </div>
          </v-col>

          <v-col cols="12" md="6" v-if="service?.detail_img_3">
            <div class="gallery-image">
              <img :src="service.detail_img_3" alt="service detail" class="w-100" />
            </div>
          </v-col>
        </v-row>
      </div>
      <SharedSectionSpacer />
    </div>

  </div>
</template>

<style scoped>
.info-card {
  background: white;
  border-radius: 16px;
  padding: 24px;
  height: 100%;
  border: 1px solid rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
}

.info-card:hover {
  border-color: rgb(var(--v-theme-primary));
  transform: translateY(-4px);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.08);
}

.service-description {
  line-height: 1.8;
}

.service-description :deep(p) {
  margin-bottom: 1.5rem;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 20px;
}

.feature-card {
  position: relative;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-radius: 16px;
  padding: 24px 24px 22px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: transform 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;
}

.feature-card:hover {
  transform: translateY(-4px);
  border-color: rgba(var(--v-theme-primary), 0.4);
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
}

.feature-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 14px;
}

.feature-icon {
  width: 44px;
  height: 44px;
  border-radius: 12px;
  background: rgba(var(--v-theme-primary), 0.15);
  color: rgb(var(--v-theme-primary));
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.feature-index {
  font-weight: 700;
  letter-spacing: 0.08em;
  color: rgba(0, 0, 0, 0.6);
  font-size: 12px;
}

.feature-title {
  font-size: 18px;
  font-weight: 700;
  color: rgb(var(--v-theme-secondary));
  margin-bottom: 6px;
}

.feature-desc {
  margin: 0;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.7);
}

@media (max-width: 960px) {
  .features-grid {
    grid-template-columns: 1fr;
  }
}

/* Process Horizontal Design */
.process-horizontal {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  flex-wrap: wrap;
  padding: 40px 0;
}

.process-item {
  display: flex;
  align-items: center;
  gap: 20px;
}

.process-pill {
  background: rgb(var(--v-theme-primary));
  border-radius: 120px;
  padding: 48px 32px 40px;
  min-width: 200px;
  max-width: 240px;
  min-height: 360px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(197, 255, 114, 0.2),
              0 0 0 1px rgba(0, 0, 0, 0.05) inset;
  transition: all 0.4s ease;
  position: relative;
}

.process-pill:hover {
  transform: translateY(-12px) scale(1.05);
  box-shadow: 0 12px 32px rgba(197, 255, 114, 0.25),
              0 0 0 1px rgba(0, 0, 0, 0.1) inset;
}

.process-pill::before {
  content: '';
  position: absolute;
  inset: -2px;
  border-radius: 120px;
  padding: 2px;
  background: linear-gradient(135deg, rgba(0, 0, 0, 0.1), transparent);
  -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
  -webkit-mask-composite: xor;
  mask-composite: exclude;
  pointer-events: none;
}

.process-arrow {
  color: rgb(var(--v-theme-primary));
  opacity: 0.8;
  flex-shrink: 0;
}

.pill-icon {
  width: 60px;
  height: 60px;
  background: rgba(0, 0, 0, 0.1);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: rgb(var(--v-theme-secondary));
  margin: 0 auto 20px;
  border: 2px solid rgba(0, 0, 0, 0.15);
}

.pill-content {
  text-align: center;
}

.pill-title {
  font-size: 22px;
  font-weight: 700;
  color: rgb(var(--v-theme-secondary));
  margin-bottom: 12px;
  line-height: 1.2;
}

.pill-desc {
  font-size: 13px;
  color: rgba(0, 0, 0, 0.75);
  line-height: 1.5;
  margin: 0;
}

@media (max-width: 960px) {
  .process-horizontal {
    flex-direction: column;
    gap: 32px;
    padding: 20px;
  }

  .process-item {
    flex-direction: column;
    gap: 16px;
    width: 100%;
  }

  .process-arrow {
    transform: rotate(90deg);
  }

  .process-pill {
    max-width: 100%;
    width: 100%;
    min-height: 300px;
    padding: 40px 28px 36px;
  }

  .pill-title {
    font-size: 20px;
  }

  .pill-desc {
    font-size: 12px;
  }
}

@media (max-width: 600px) {
  .process-pill {
    min-height: 280px;
    padding: 36px 24px 32px;
    border-radius: 80px;
  }

  .pill-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 16px;
  }

  .pill-title {
    font-size: 18px;
  }

  .pill-desc {
    font-size: 11px;
  }
}

.phase-title {
  font-size: 20px;
  font-weight: 800;
  color: #111;
  margin: 0 0 12px 0;
  line-height: 1.3;
}

.phase-desc {
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  margin: 0;
  line-height: 1.6;
}

/* Mobile Responsive */
@media (max-width: 768px) {
  .circular-process {
    height: auto;
    min-height: 1200px;
    padding: 20px;
  }

  .process-center {
    width: 200px;
    height: 200px;
  }

  .center-icon {
    width: 50px;
    height: 50px;
  }

  .center-title {
    font-size: 22px;
  }

  .center-subtitle {
    font-size: 12px;
  }

  .phase-content {
    max-width: 240px;
    padding: 18px;
  }

  .phase-icon {
    width: 52px;
    height: 52px;
  }

  .phase-title {
    font-size: 18px;
  }

  .phase-desc {
    font-size: 13px;
  }

  .phase-node {
    width: 20px;
    height: 20px;
  }

  .phase-connector {
    height: 60px;
  }
}

.process-label {
  display: inline-block;
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: 0.08em;
  color: rgba(0,0,0,0.5);
  margin-bottom: 6px;
}

.process-title {
  font-size: 18px;
  font-weight: 700;
  color: #111;
  margin: 0;
}

.gallery-image {
  border-radius: 16px;
  overflow: hidden;
  line-height: 0;
}

.gallery-image img {
  transition: transform 0.6s ease;
}

.gallery-image:hover img {
  transform: scale(1.05);
}

.cta-section {
  position: relative;
  overflow: hidden;
  background-color: rgb(var(--v-theme-primary)) !important;
}

.cta-section::before,
.cta-section::after {
  content: "";
  position: absolute;
  inset: 0;
  pointer-events: none;
  mix-blend-mode: overlay;
}

.cta-section::before {
  background: radial-gradient(60% 60% at 30% 20%, rgba(255,255,255,0.28), transparent 65%);
}

.cta-section::after {
  background: linear-gradient(135deg, rgba(0,0,0,0.08), transparent 35%, rgba(0,0,0,0.12));
}

.cta-section h2,
.cta-section p {
  color: rgb(var(--v-theme-secondary)) !important;
}

.mw-600 {
  max-width: 600px;
}

.bg-dark-section {
  background-color: #1F2A2E;
  color: white;
}

.bg-dark-section .service-description :deep(p) {
  color: white;
  margin-bottom: 1.5rem;
}

@media (max-width: 768px) {
  .service-detail-banner-content {
    padding: 60px 0;
  }
}

/* Dark mode - style cards only, rely on global text fixes */
.dark .feature-card {
  background: rgba(0, 0, 0, 0.25) !important;
  backdrop-filter: blur(20px) !important;
  -webkit-backdrop-filter: blur(20px) !important;
  border-color: rgba(255, 255, 255, 0.15) !important;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.5) !important;
}

.dark .feature-card:hover {
  border-color: rgba(var(--v-theme-primary), 0.5) !important;
  box-shadow: 0 12px 40px rgba(0, 0, 0, 0.6) !important;
}

.dark .feature-title {
  color: rgb(255, 255, 255) !important;
}

.dark .feature-desc {
  color: rgba(255, 255, 255, 0.8) !important;
}

.dark .feature-index {
  color: rgb(197, 255, 114) !important;
}

.dark .feature-icon {
  background: rgba(197, 255, 114, 0.15) !important;
  color: rgb(255, 255, 255) !important;
}
</style>
