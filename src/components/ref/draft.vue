<template>
    <div id="app" class="flex items-center justify-center min-h-screen bg-gray-100">
      <div
        class="relative p-4 bg-white border border-gray-300 rounded cursor-pointer"
        @mouseover="showText = true"
        @mouseleave="showText = false"
      >
        Hover over me!
        <div
          v-if="showText"
          class="absolute left-1/2 transform -translate-x-1/2 mt-2 p-2 bg-gray-800 text-white rounded"
        >
          This is the hovering text
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        showText: false,
      };
    },
  };
  </script>