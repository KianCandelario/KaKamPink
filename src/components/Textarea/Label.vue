<template>
  <div class="relative w-[95%] h-[68%] flex justify-center items-center">
    <textarea
      v-model="text"
      ref="textarea"
      class="w-full h-full border font-quicksand text-sm p-3 border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-shade-three"
      :class="{ 'pt-8': text.length === 0 && !isFocused }"
      @focus="handleFocus"
      @blur="handleBlur"
      v-bind="$attrs"
    ></textarea>
    <label
      :class="[
        'absolute left-2 top-2 transition-all transform text-gray-500 pointer-events-none',
        { 'text-xs -translate-y-4': text.length > 0 || isFocused }
      ]"
    >
      {{ label }}
    </label>
  </div>
</template>

<script>
export default {
  name: 'TextareaWithLabel',
  props: {
    label: {
      type: String,
      default: 'Sample label'
    }
  },
  data() {
    return {
      text: '',
      isFocused: false
    };
  },
  methods: {
    handleFocus() {
      this.isFocused = true;
    },
    handleBlur() {
      this.isFocused = false;
    }
  }
}
</script>

<style scoped>
/* Label moves up */
textarea:focus + label,
textarea:not(:placeholder-shown) + label {
  font-size: 0.75rem;
  font-weight: bold;
  background-color: transparent;
  transform: translateY(-1.75rem);
  color: #F999B7;
  font-family: 'Quicksand';
}
</style>