<template>
  <div class="flex flex-column align-items-center justify-content-center w-full h-full">
    <h1>Welcome!</h1>
    <div class="flex flex-column w-18rem">
      <TextInputWithLabel
        id="example-required-field"
        v-model:text-input-value="exampleField"
        :placeholder="t('text_here')"
        field-label="Required field"
        :v="v$.exampleField"
      />
      <Button class="justify-content-center" @click="validateField()">Validate Field!</Button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref, computed } from "vue";
import TextInputWithLabel from "../../components/TextInputWithLabel.vue";
import i18n from "../../i18n";
import { useVuelidate } from "@vuelidate/core";
import { required } from "../../utils/i18nValidators.utils";
import Button from "primevue/button";
import { setErrorMessage, setSuccessMessage } from "../../utils/ToastMessageUtils";
import { helpers } from "@vuelidate/validators";

const { t } = i18n.global;
const exampleField = ref("");
const rules = computed(() => {
  return {
    exampleField: {
      required: helpers.withParams({ property: t("example_field") }, required),
    },
  };
});
const v$ = useVuelidate(rules, { exampleField: exampleField });

function validateField() {
  v$.value.$touch();
  if (v$.value.$error) {
    setErrorMessage(t("validation_error"));
  } else {
    setSuccessMessage(t("validation_success"));
  }
}
</script>
<style></style>
