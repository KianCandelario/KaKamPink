<template>
  <div class="flex justify-center items-center h-screen">
    <div class="relative h-fit w-fit">
      <button type="button" class="inline-flex justify-center w-full rounded-md px-14 py-2 bg-pink-500 text-white font-bold text-md hover:bg-pink-800 font-serif" @mouseover="showPopup = true" @mouseleave="showPopup = false">
        POPUP
      </button>

      <div v-if="showPopup" class="absolute left-1/2 transform -translate-x-1/2 rounded-md bg-gray-300 mt-2">
        <p class="text-sl text-black py-2 px-4">{{ content }}</p>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  props:['content']
  ,
  data() {
    return {
      showPopup: false,
    };
  },
};
</script>

<style scoped>
.relative .absolute {
  white-space: nowrap; /* Prevent text from wrapping, so the width fits the content */
}
</style>
