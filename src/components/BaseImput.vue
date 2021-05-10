<template>
  <div :class="attrsClassName">
    <label>
      {{ label }}
      <div
          :class="[
          'input-box',
          { 'validating-error': errors.length > 0 || hasError }
        ]"
      >
        <input
            v-model="value"
            :class="['input', { 'input-error': errors.length > 0 || hasError }]"
            :disabled="disabled"
            :placeholder="placeholder"
            v-bind="attrsRest"
        />
        <IconLoading class="icon-loading" v-if="validating" />
      </div>
    </label>
    <div v-if="errors.length" class="errors">
      <div v-for="(error, index) in errors" :key="index">
        {{ error }}
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import IconLoading from "./svg/IconLoading.vue";

export default defineComponent({
  inheritAttrs: false,
  components: { IconLoading },
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
      type: String
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

<style lang="scss" scoped>

</style>