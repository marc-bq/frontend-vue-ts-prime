<template>
  <div class="side-menu h-full flex flex-column flex-none" :class="{ 'w-15rem sm:w-15rem': showSideBar, 'sm:w-6rem lg:w-15rem ': !showSideBar }">
    <h2 v-if="menuTitle" class="hidden lg:block px-3 pt-2 mb-1" :class="{ block: showSideBar }">{{ $t(menuTitle) }}</h2>
    <PanelMenu v-model:expandedKeys="expandedKeys" :model="items" class="menu-items hidden lg:block" :class="{ block: showSideBar }"></PanelMenu>
    <TieredMenu :model="items" class="menu-items" :class="{ hidden: showSideBar, 'hidden sm:block lg:hidden': !showSideBar }"></TieredMenu>
    <p style="margin-top: auto !important" class="m-1 text-xs">{{ version }}</p>
  </div>
</template>

<script lang="ts" setup>
import TieredMenu from "primevue/tieredmenu";
import PanelMenu from "primevue/panelmenu";
import { computed, onMounted, ref, watch } from "vue";
import { useMainStore } from "../store";
import { storeToRefs } from "pinia";
import { version } from "../../package.json";

const store = useMainStore();
const expandedKeys = ref({});

const { items, menuTitle } = storeToRefs(store);

function expandAll() {
  for (let node of items.value) {
    expandNode(node);
  }

  expandedKeys.value = {
    ...expandedKeys.value,
  };
}
watch(
  () => store.showSideBar,
  (val) => {
    if (val) {
      expandAll();
    }
  }
);

function expandNode(node: any) {
  if (node.items && node.items.length) {
    const key: string = node.key;
    (expandedKeys.value as any)[key] = true;

    for (let child of node.items) {
      expandNode(child);
    }
  }
}

const showSideBar = computed(() => {
  return store.showSideBar;
});

onMounted(() => {
  expandAll();
});
</script>

<style>
.p-tieredmenu.p-component {
  border: none;
}
.p-tieredmenu span.p-menuitem-text {
  margin-top: 0.5rem;
  color: rgba(255, 255, 255, 0.75) !important;
  text-align: center !important;
}
.p-tieredmenu .p-menuitem-text {
  font-size: 12px;
  font-weight: 600;
}
.p-submenu-list span.p-menuitem-text {
  display: block;
  text-transform: initial;
  margin-top: initial;
  font-size: initial;
  font-weight: initial;
}
.p-tiered-menu,
.menu-items {
  width: inherit !important;
}
span.p-submenu-icon.pi.pi-angle-right {
  display: none;
}
ul.p-submenu-list {
  width: 12.5rem;
}
.p-tieredmenu .p-menuitem-link .p-menuitem-icon {
  margin: 0 !important;
  font-size: 22px;
  color: rgba(255, 255, 255, 0.75) !important;
}
.p-tieredmenu .p-menuitem {
  flex-direction: column;
}
.p-tieredmenu .p-menuitem-link {
  display: flex;
  justify-content: center;
  flex-direction: column;
}
.p-submenu-list .p-menuitem-link {
  justify-content: start;
  flex-direction: initial;
}
.side-menu {
  width: 0;
  transition: width 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.p-panelmenu-icon {
  margin-left: 0.5rem !important;
  position: absolute !important;
  right: 0 !important;
}
.p-sidebar,
.p-panelmenu .p-panelmenu-content,
.p-panelmenu .p-panelmenu-header > a {
  border: none !important;
}
.p-panelmenu .p-panelmenu-header > a:focus,
.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link:focus {
  box-shadow: none !important;
  border-left: 1px solid #ffe284 !important;
}
.p-panelmenu .p-panelmenu-content .p-menuitem .p-menuitem-link .p-panelmenu-icon {
  margin-right: 1.5rem !important;
}
.p-panelmenu-header-link .p-menuitem-text {
}
.p-sidebar-left {
  width: 15rem !important;
}

.p-selectbutton {
  display: flex;
}
.p-selectbutton .p-button {
  flex: 1;
}
.p-panelmenu {
  height: 100%;
}
.side-menu {
  background: var(--second-color);
}
.p-panelmenu .p-panelmenu-header .p-panelmenu-header-content {
  border: none !important;
}
.p-panelmenu-header-action {
  padding: 0.85rem 1rem !important;
}
</style>
