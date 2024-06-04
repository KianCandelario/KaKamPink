<template>
    <div class="flex flex-col items-center justify-center min-h-screen ">
      <div class="text-center">
        <button
          class="bg-[#F2789F] text-white text-xl py-2 px-4 rounded"
          @click="toggleSheet"
        >
          Click Me
        </button>
      </div>
  
      <transition name="slide-up">
        <div v-if="sheet" class="fixed inset-x-0 bottom-0 bg-[#F999B7] p-4 shadow-lg">
          <div class="bg-white rounded-md p-4">
            <div class="h-1 w-full bg-gray-200 rounded-full overflow-hidden mb-4">
              <div class="h-full bg-blue-500" style="width: 50%;"></div>
            </div>
  
            <ul class="list-none p-0">
              <li class="flex justify-between items-center mb-4">
                <div>
                  <p class="text-black font-bold">The Walker</p>
                  <p class="text-gray-600">Fitz & The Tantrums</p>
                </div>
  
                <div class="flex space-x-4">
                  <button class="text-black">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7 7-7M21 19l-7-7 7-7" />
                    </svg>
                  </button>
                  <button class="text-black mx-5">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 9v6m4-6v6m-4-6l4 4m0-4l-4 4" />
                    </svg>
                  </button>
                  <button class="text-black me-3">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7-7 7m0-7H3" />
                    </svg>
                  </button>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </transition>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        sheet: false,
      };
    },
    methods: {
      toggleSheet() {
        this.sheet = !this.sheet;
      },
    },
  };
  </script>
  
  <style scoped>
  .slide-up-enter-active, .slide-up-leave-active {
    transition: transform 0.3s ease-out;
  }
  .slide-up-enter, .slide-up-leave-to {
    transform: translateY(100%);
  }
  </style>
  