<template>
  <div class="main flex flex-column h-full">
    <Navbar />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Navbar from "../components/Navbar.vue";
</script>

<style></style>
