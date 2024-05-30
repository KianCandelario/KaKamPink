<template>
    <div class="bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
      <div class="flex flex-col justify-center items-center rounded-xl">
        <div class="w-[80%]">
  
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Component Title</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">Component Description</p>
  
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Sub-Container</h1>
              <p class="font-poppins mt-2 text-[15px]">Sub-Container Description</p>
            </div>
  
            <!-- First Container -->
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <div class="flex flex-col items-center justify-center">
                <button
                  class="bg-[#F2789F] text-white text-xl py-2 px-4 rounded"
                  @click="toggleSheet"
                >
                  Click Me
                </button>
  
                <transition name="slide-up">
                  <div v-if="sheet" class="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-[#F999B7] via-[#F9C5D5] to-[#FEE3EC] p-4 shadow-lg">
                    <div class="text-center h-48 flex flex-col justify-center">
                      <button
                        class="bg-transparent text-black underline mb-4"
                        @click="toggleSheet"
                      >
                        Close
                      </button>
                      <p class="text-black">
                        This is a bottom sheet controlled by v-model instead of activator.
                      </p>
                    </div>
                  </div>
                </transition>
              </div>
            </div>
            <!-- End of First Container -->

            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Sub-Container</h1>
              <p class="font-poppins mt-2 text-[15px]">Sub-Container Description</p>
            </div>
  
            <!-- Second Container -->
            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
              
            </div>
            <!-- End of Second Container -->

            
  
            <!-- Third Container -->
            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <!-- Content for Third Container -->
            </div>
            <!-- End of Third Container -->
  
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainComponent',
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
  