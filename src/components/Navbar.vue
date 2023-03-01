`
<template>
  <nav class="navbar w-full h-4rem flex justify-content-between align-items-center">
    <div class="flex flex-column sm:flex-row sm:align-items-center">
      <div class="flex align-items-center">
        <i class="pi pi-bars p-2" :class="{ 'sm:hidden': !showSideBar }" @click="showSideBar = !showSideBar" />
        <div>
          <router-link to="/home" class="flex">
            <img class="hidden sm:block p-1" alt="logo" src="../assets/vuelogo.png" height="40" />
            <div class="app-title font-bold text-m uppercase ml-2 text-color">
              <p class="hidden md:block">Frontend Boilerplate</p>
              <p class="md:hidden">FroBo</p>
            </div>
          </router-link>
        </div>
      </div>
    </div>
    <div class="flex">
      <ThemeSwitcher />
      <div
        class="user-miniature w-2rem h-2rem border-circle flex align-items-center justify-content-center right-0 m-2 font-bold cursor-pointer"
        aria-haspopup="true"
        type="button"
        aria-controls="user_menu"
        @click="toggle"
      >
        {{ store.userInitials.toUpperCase() }}
      </div>
    </div>
    <Menu id="user_menu" ref="menu" :model="userItems" :popup="true" />
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { useMainStore } from "../store";
import Menu from "primevue/menu";
import { storeToRefs } from "pinia";
import ThemeSwitcher from "./ThemeSwitcher.vue";

const store = useMainStore();
const menu = ref();

const { showSideBar } = storeToRefs(store);

const userItems = [
  {
    label: userName,
    items: [
      {
        label: "Settings",
        icon: "pi pi-cog",
        to: "/admin/users",
      },
      {
        label: "Logout",
        icon: "pi pi-sign-out",
        command: logout,
      },
    ],
  },
];

function userName() {
  return store.user ? store.user.name : "John Doe";
}

function toggle(event: any) {
  menu.value.toggle(event);
}
function logout() {
  console.log("logout");
}
</script>

<style scoped>
.user-miniature {
  background: var(--accent-color);
}
.user-miniature:hover {
  animation-duration: 0.8s;
  animation-name: beat;
  animation-iteration-count: infinite;
  animation-direction: alternate;
}
.navbar {
  padding: 0;
  background: var(--surface-a);
  font-size: smaller;
}
@keyframes beat {
  from {
    outline: none;
  }

  to {
    outline: 2px solid var(--accent-color);
    outline-offset: 2px;
  }
}
</style>
