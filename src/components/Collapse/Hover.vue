<template>
  <div class="w-full my-4">
    <div @mouseover="open" @mouseleave="close" class="cursor-pointer bg-pink-shade-four p-4 rounded-t-lg font-quicksand">
      <slot name="header"></slot>
    </div>
    <div v-if="isOpen" class="p-4 bg-pink-shade-three font-poppins rounded-b-lg">
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HoverCollapse',
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    open() {
      this.isOpen = true;
    },
    close() {
      this.isOpen = false;
    }
  }
}
</script>
