<script setup lang="ts">
/*
  imports
 */
import { ref } from "vue";
import { vAutofocus } from "@/directives/vAutofocus";
/*
  props
 */
const props = defineProps({
  modelValue: {
    type: String,
    required: true,
  },
  bgColor: {
    type: String,
    default: "success",
  },
  placeholder: {
    type: String,
    default: "Type something...",
  },
  label: {
    type: String,
  },
});
/*
  emits
 */
defineEmits(["update:modelValue"]);

/*
  focus text area
 */
const textareaRef = ref<HTMLTextAreaElement | null>(null);
const focusTextarea = () => {
  textareaRef.value?.focus();
};

defineExpose({
  focusTextarea,
});
</script>
<template>
  <div
    class="card p-4 mb-5"
    :class="`has-background-${bgColor}-dark`">
    <label
      v-if="label"
      class="label has-text-white"
      >{{ label }}</label
    >
    <div class="field">
      <div class="control">
        <textarea
          maxlength="100"
          v-autofocus
          ref="textareaRef"
          :value="modelValue"
          class="textarea"
          :placeholder="placeholder"
          @input="$emit('update:modelValue', $event.target.value)" />
      </div>
    </div>
    <div class="field is-grouped is-grouped-right">
      <div class="control">
        <slot name="buttons" />
      </div>
    </div>
  </div>
</template>
