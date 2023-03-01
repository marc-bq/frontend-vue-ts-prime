<template>
  <Dialog :visible="newUserDialog" :style="{ width: '600px' }" :header="$t('New')" :modal="true" @update:visible="close">
    <template #footer>
      <Button :label="$t('Cancel')" icon="pi pi-times" class="p-button-text" @click="close" />
      <Button :label="$t('Save')" icon="pi pi-check" class="p-button-text" @click="save" />
    </template>
  </Dialog>
</template>

<script setup lang="ts">
import Dialog from "primevue/dialog";
import Button from "primevue/button";

defineProps({
  newUserDialog: Boolean,
});
const emit = defineEmits(["close", "saveUser"]);
const close = () => emit("close");

function save() {
  console.log("save");
}
</script>

<style>
.p-fieldset.p-fieldset-toggleable .p-fieldset-legend a {
  padding: 0.75rem !important;
}
.p-fieldset.p-fieldset-toggleable .p-fieldset-legend {
  margin-left: -2px !important;
}
.p-fieldset {
  border: none !important;
}
.p-fieldset .p-fieldset-content {
  padding: 23px 0 0 0 !important;
}
</style>
<style lang="scss" scoped>
.p-dropdown {
  width: 14rem;
}

.country-item {
  display: flex;
  align-items: center;
  .flag {
    width: 52px;
    margin-right: -8px;
    border-radius: 6px;
  }
  .small-flag {
    transform: scale(0.35);
  }
}
</style>
