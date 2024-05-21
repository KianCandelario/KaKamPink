<template>
    <label :class="['flex items-center cursor-pointer', className]">
      <input 
        type="checkbox" 
        :checked="modelValue" 
        @change="$emit('update:modelValue', $event.target.checked)" 
        :class="['form-checkbox', checkboxClass]" 
      />
      <span class="ml-2">{{ label }}</span>
    </label>
  </template>
  
  <script>
  export default {
    name: 'kakampink-checkbox',
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
      checkboxClass: {
        type: String,
        default: '',
      },
    },
  };
  </script>
  
  <style scoped>
  /* You can add custom styles here if needed */
  </style>