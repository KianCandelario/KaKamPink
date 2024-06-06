<template>
  <div class="flex justify-center items-center h-fit">
    <div class="relative h-fit w-fit">
      <button type="button" class="inline-flex justify-center w-full rounded-md px-14 py-2 bg-[#f1799f] text-white text-md font-serif" 
      @mouseover="showPopup = true" @mouseleave="showPopup = false">
        INFO
      </button>

      <div v-if="showPopup" class="absolute left-1/2 transform -translate-x-1/2 rounded-md bg-gray-300 mt-2">
        <p class="text-sl text-black py-2 px-4 bg-white border border-black rounded">{{ content }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      showPopup: false,
      content: 'To modify the popup tooltip you we have a kkp-popup',
    };
  },
};
</script>

<style scoped>
.relative .absolute {
  white-space: nowrap; /* Prevent text from wrapping, so the width fits the content */
}
</style>
