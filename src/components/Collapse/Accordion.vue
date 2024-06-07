<template>
  <div class="w-full my-4">
    <div @click="toggle" class="cursor-pointer bg-pink-shade-four p-4 rounded-t-lg font-kumbh-sans">
      <slot name="header"></slot>
    </div>
    <div v-if="isOpen" class="p-4 bg-pink-shade-two font-poppins rounded-b-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AccordionCollapse',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggle() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>
