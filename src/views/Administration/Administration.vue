<template>
  <div class="flex relative h-full w-full min-h-0">
    <SideMenu />
    <div class="pb-4 sm:p-6 sm:py-3 min-w-0 w-full overflow-auto">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import SideMenu from "@/components/SideMenu.vue";
import { useMainStore } from "../../store";
import { PrimeIcons } from "primevue/api";
import i18n from "../../i18n";

const store = useMainStore();
const { t } = i18n.global;
store.items = [
  {
    key: "1",
    label: t("Users"),
    icon: PrimeIcons.USER,
    to: "/admin/users",
  },
];
store.menuTitle = "Administration";
</script>

<style></style>
