<template>
  <router-view />
  <Toast position="bottom-right" group="br" />
  <DynamicDialog />
</template>
<script setup lang="ts">
import { watch } from "vue";
import { useMainStore } from "./store";
import { useToast } from "primevue/usetoast";

import Toast from "primevue/toast";
import DynamicDialog from "primevue/dynamicdialog";
import switchTheme from "./utils/themeSwitcher.utils";

const store = useMainStore();
const toast = useToast();

switchTheme(localStorage.getItem("lightMode") === "true");

watch(
  () => store.errorMessage,
  // eslint-disable-next-line no-unused-vars
  (message, prevMessage) => {
    if (message) {
      toast.add({
        severity: "error",
        summary: "Error",
        detail: message,
        group: "br",
        life: 6000,
      });
    }
  }
);
watch(
  () => store.toastMessage,
  // eslint-disable-next-line no-unused-vars
  (toastMessage, prevValue) => {
    if (toastMessage.message) {
      if (!toastMessage.severity || (toastMessage.severity != "success" && toastMessage.severity != "error")) toastMessage.severity = "warning";
      toast.add({
        severity: toastMessage.severity,
        detail: toastMessage.message,
        group: "br",
        life: 6000,
      });
    }
  }
);
</script>

<style lang="scss">
html {
  height: 100%;
}
:root {
  --main-color: 215deg;
  --accent-color: hsla(22, 83%, 58%, 1);
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
body {
  margin: 0;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: var(--surface-b);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
a {
  text-decoration: none;
  color: white;
  cursor: pointer;
}

span.p-row-editor-save-icon {
  color: #c5e1a5 !important ;
}

button.p-row-editor-save.p-link:focus {
  box-shadow: 0 0 0 1px #c5e1a5 !important;
}
button.p-row-editor-save.p-link:hover > span {
  color: #b2d788 !important;
}
button.p-row-editor-save.p-link:hover {
  background: hsl(88deg 50% 69% / 15%) !important;
}
button.p-row-editor-cancel.p-link:hover {
  background: hsl(0deg 66% 65% / 15%) !important;
}
span.p-row-editor-cancel-icon {
  color: #f16c98 !important ;
}

button.p-row-editor-cancel.p-link:focus {
  box-shadow: 0 0 0 1px #f16c98 !important;
}

::-webkit-scrollbar {
  width: 6px;
  height: 7px;
}

::-webkit-scrollbar-track {
  background: var(--surface-c);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background: var(--surface-border);
}
::selection {
  background: var(--primary-400);
  color: var(--primary-color-text);
}
</style>
