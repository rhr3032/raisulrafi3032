<script setup lang="ts">
import Header from "@/layouts/header/index.vue";
import Footer from "@/layouts/footer/index.vue";
import CallToAction from "@/components/shared/CallToAction.vue";

</script>
<template>
  <div>
    <Header />
    <main>
      <NuxtPage />
    </main>
    <CallToAction />
    <Footer />
  </div>
</template>
