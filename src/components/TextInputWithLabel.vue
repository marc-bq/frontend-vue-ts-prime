<template>
  <div class="field" :class="extraClass">
    <label :for="id">{{ fieldLabel }}</label>
    <InputText
      :id="id"
      :value="textInputValue"
      required="true"
      autofocus
      class="w-full"
      :class="[v?.$error ? 'p-invalid' : '']"
      :placeholder="placeholder"
      @input="debounceValidation(($event.target as HTMLInputElement).value)"
      @blur="v?.$touch()"
    />
    <span v-if="v?.$error">
      <span v-for="(error, index) in v?.$errors" :key="index">
        <small class="p-error">
          <p :id="id + '-error-' + index" class="p-error">{{ error.$message }}</p>
        </small>
      </span>
    </span>
  </div>
</template>

<script setup lang="ts">
import InputText from "primevue/inputtext";
import debounce from "lodash/debounce";
const props = defineProps({
  v: {
    type: Object,
    default: null,
  },
  id: {
    type: String,
    default: "",
  },
  extraClass: { type: String, default: "" },
  textInputValue: { type: [String, Number], required: true },
  fieldLabel: { type: String, required: true },
  placeholder: { type: String, default: "" },
  debounceTime: { type: Number, default: 0 },
});
const emit = defineEmits(["update:textInputValue"]);

const debounceValidation: any = debounce(function (value) {
  emit("update:textInputValue", value);
  props.v?.$touch();
}, props.debounceTime || 0);
</script>
