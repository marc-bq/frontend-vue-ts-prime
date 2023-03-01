<template>
  <div class="printer-home min-h-0 w-full h-full flex">
    <SideMenu :menu-items="menuItems" title="Home" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home",
};
</script>

<script setup lang="ts">
import SideMenu from "../components/SideMenu.vue";
import { useMainStore } from "../store";
import i18n from "../i18n";

const store = useMainStore();
const { t } = i18n.global;
const menuItems = [
  {
    key: "0",
    label: t("Home"),
    icon: "pi pi-print",
    to: "/home",
  },
];

store.items = menuItems;
store.menuTitle = "Home";
</script>

<style></style>
