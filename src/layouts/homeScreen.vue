<script setup lang="ts">
import Navbar from "@/components/layouts/Navbar.vue";

// const banner = toRef(props,'bannerBg')

// const StyleObject = reactive({
//   backgroundImage:
// })
</script>

<template>
  <div ref="el" class="layout-wrapper">
    <header class="header-container">
      <!--Navbar-->
      <div class="header-row">
        <Navbar />
        <div class="banner-container">
          <slot name="banner-image" />
          <div class="banner-content">
            <slot name="banner-content" />
          </div>
        </div>
        <div class="fade-container"></div>
      </div>
      <div class="poster-row">
        <slot name="poster-rows" />
      </div>
    </header>

    <!--Page content-->
    <main class="page-content-layout">
      <slot name="main" />
    </main>
  </div>
</template>

<style scoped lang="scss">
@import "@/assets/layout/layout.scss";
</style>
