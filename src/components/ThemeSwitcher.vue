<template>
  <div class="flex align-items-center">
    <i v-if="lightMode" class="pi pi-sun"></i>
    <i v-else class="pi pi-moon"></i>
    <InputSwitch v-model="lightMode" class="ml-2 mr-4" @change="switchT" />
  </div>
</template>
<script setup lang="ts">
import InputSwitch from "primevue/inputswitch";
import { ref } from "vue";
import switchTheme from "../utils/themeSwitcher.utils";

const lightMode = ref(false);

lightMode.value = localStorage.getItem("lightMode") === "true";

function switchT() {
  switchTheme(lightMode.value);
}
</script>

<style></style>
