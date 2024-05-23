<template>
  <label :class="['flex items-center cursor-pointer', className]">
    <input 
      type="checkbox" 
      :checked="modelValue" 
      @change="handleChange" 
      class="form-checkbox h-6 w-6 rounded-md border-2 border-pink-500 text-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
    />
    <span class="ml-3 text-pink-600 font-medium">{{ displayText }}</span>
  </label>
</template>

<script>
export default {
  name: 'KakampinkCheckbox',
  props: {
    modelValue: {
      type: Boolean,
      default: false,
    },
    label: {
      type: String,
      default: '',
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    displayText() {
      return this.modelValue ? 'CHECKED' : 'UNCHECK';
    }
  },
  methods: {
    handleChange(event) {
      this.$emit('update:modelValue', event.target.checked);
    }
  }
};
</script>

<style scoped>
/* Custom styles to enhance the checkbox */
.custom-checkbox {
  position: relative;
}

.custom-checkbox:checked::after {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) rotate(45deg);
  width: 12px;
  height: 6px;
  border: solid white;
  border-width: 0 2px 2px 0;
}
</style>
