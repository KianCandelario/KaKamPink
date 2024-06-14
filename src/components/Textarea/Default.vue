<!-- components/TextareaDefault.vue -->
<template>
  <textarea
    class="w-[95%] h-[80%] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-shade-three font-quicksand text-sm"
    :class="customClass"
    v-bind="$attrs"
  ></textarea>
</template>

<script>
export default {
  name: 'TextareaDefault',
  props: {
    customClass: {
      type: String,
      default: ''
    }
  }
}
</script>
