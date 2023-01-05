<script setup lang="ts">
import Banner from "@/components/layouts/Banner.vue";
import Navbar from "@/components/layouts/Navbar.vue";
</script>

<template>
  <div class="layout-wrapper">
    <header class="header-container">
      <!--Navbar-->
      <div class="header-row">
        <Navbar />
        <Banner />
      </div>
    </header>

    <!--Page content-->
    <main class="page-content-layout">
      <slot name="main" />
    </main>
  </div>
</template>

<style scoped>
.layout-wrapper {
  min-height: 100%;
  overflow-y: hidden;
}

.header-row {
  position: relative;
  max-height: 400px;
  height: 400px;
}
.page-content-layout {
  height: 100vh;
}
</style>
