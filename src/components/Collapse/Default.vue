<template>
  <div class="w-full my-4">
    <div @click="toggle" class="cursor-pointer bg-pink-shade-three p-4 rounded-t-lg font-quicksand">
      <slot name="header"></slot>
    </div>
    <div v-if="isOpen" class="p-4 bg-pink-shade-one font-poppins rounded-b-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DefaultCollapse',
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
