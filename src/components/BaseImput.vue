<template>
    <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
      {{ label }}
    </label>

    <input
        v-model="value"
        :class="[attrsClassName, { 'text-red-500 border-red-500': errors.length > 0 || hasError }]"
        :disabled="disabled"
        :placeholder="placeholder"
        v-bind="attrsRest"
    />

    <div class="text-red-500 text-xs italic" v-if="errors.length">
      <p v-for="(error, index) in errors" :key="index">
        {{ error }}
      </p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  inheritAttrs: false,
  props: {
    label: {
      type: String,
      default: ""
    },
    modelValue: {
      type: [String, Number, Boolean],
      default: ""
    },
    errors: {
      type: Array,
      default: () => []
    },
    validating: {
      type: Boolean
    },
    disabled: {
      type: Boolean
    },
    placeholder: {
      type: String,
      default: null
    },
    hasError: {
      type: Boolean
    }
  },
  emits: ["update:modelValue"],
  setup(props, { attrs }) {
    const { class: attrsClassName, ...attrsRest } = attrs;

    return {
      attrsClassName,
      attrsRest
    };
  },
  computed: {
    value: {
      get() {
        return this.modelValue;
      },
      set(value) {
        this.$emit("update:modelValue", value);
      }
    }
  }
});
</script>

<style scoped>

</style>