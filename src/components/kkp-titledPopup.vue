<template>
    <div class="flex justify-center items-center h-fit">
      <div class="relative h-fit w-fit">
        <button type="button" class="inline-flex justify-center w-full rounded-md px-14 py-2 bg-[#f1799f] text-white text-md font-serif" 
        @mouseover="showPopup = true" @mouseleave="showPopup = false">
          Button
        </button>
  
        <div v-if="showPopup" class="absolute left-1/2 transform -translate-x-1/2 rounded-md w-80 rounded-md bottom-full mb-3">
          <div class="px-4 py-2 bg-white border border-black rounded">
            <p class="text-md text-black font-semibold mb-2 bg-white">Button Component</p>
            <p class="text-md text-black bg-white">{{ content }}</p>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  <script>
  export default {
    data() {
      return {
        showPopup: false,
        content: 'A clickable element that initiates an action when a user interacts with it. Its typically a rectangular box with text or an icon that visually indicates its purpose.',
      };
    },
  };
  </script>
  