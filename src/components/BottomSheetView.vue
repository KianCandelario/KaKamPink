<template>
  <div class="bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%] relative">
    <div class="flex flex-col justify-center items-center rounded-xl">
      <div class="w-[80%]">

        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Bottom sheets</h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">The bottom sheet is a modified v-dialog that slides from the bottom of the screen, similar to a v-bottom-navigation.</p>

        <div>
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Model</h1>
            <p class="font-poppins mt-2 text-[15px]">The v-model (or model-value) controls the visibility of the bottom sheet:</p>
          </div>

          <!-- First Container -->
          <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5 relative">
            <div class="flex flex-col items-center justify-center">
              <button
                class="bg-[#F2789F] text-white text-xl py-2 px-4 rounded"
                @click="toggleSheet1"
              >
                Click Me
              </button>

              <transition name="slide-up">
                <div v-if="sheet1" class="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-[#F999B7] via-[#F9C5D5] to-[#FEE3EC] p-4 shadow-lg z-50">
                  <div class="text-center h-48 flex flex-col justify-center">
                    <button
                      class="bg-transparent text-black underline mb-4"
                      @click="toggleSheet1"
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
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Music Player</h1>
            <p class="font-poppins mt-2 text-[15px]">Using a inset bottom sheet, you can make practical components such as this simple music player.</p>
          </div>

          <!-- Second Container -->
          <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5 relative">
            <div class="flex flex-col items-center justify-center">
              <button
                class="bg-[#F2789F] text-white text-xl py-2 px-4 rounded z-10"
                @click="toggleSheet2"
              >
                Click Me
              </button>

              <transition name="slide-up">
                <div v-if="sheet2" class="fixed inset-x-0 bottom-0 bg-[#F999B7] p-4 shadow-lg z-50">
                  <div class="bg-white rounded-md p-4">
                    <button
                      class="bg-transparent text-black underline mb-4"
                      @click="toggleSheet2"
                    >
                      Close
                    </button>
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
          </div>
          <!-- End of Second Container -->

          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Open In List</h1>
            <p class="font-poppins mt-2 text-[15px]">By combining a functional list into a bottom sheet, you can create a simple ‘open in’ component.</p>
          </div>

          <!-- Third Container -->
          <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5 relative">
            <!-- New Component Start -->
            <div class="flex flex-col items-center justify-center">
              <button
                class="bg-[#F2789F] text-white text-xl py-2 px-4 rounded"
                @click="toggleSheet3"
              >
                Click Me
              </button>
            </div>

            <transition name="slide-up">
              <div v-if="sheet3" class="fixed inset-x-0 bottom-0 bg-gradient-to-b from-[#FEE3EC] via-[#F9C5D5] to-[#F999B7] p-4 shadow-lg z-50">
                <div class="bg-white rounded-md p-4">
                  <button
                    class="bg-transparent text-black underline mb-4"
                    @click="toggleSheet3"
                  >
                    Close
                  </button>
                  <p class="text-center text-black mb-4 font-bold">Open in</p>
                  <ul class="list-none p-0">
                    <li
                      v-for="tile in tiles"
                      :key="tile.title"
                      class="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-[#F9C5D5] active:bg-[#F999B7]"
                      @click="closeSheet3"
                    >
                      <img :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`" alt="" class="w-8 h-8 rounded-full">
                      <span class="text-black ml-4">{{ tile.title }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
            <!-- New Component End -->
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
      sheet1: false,
      sheet2: false,
      sheet3: false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
    };
  },
  methods: {
    toggleSheet1() {
      this.sheet1 = !this.sheet1;
    },
    toggleSheet2() {
      this.sheet2 = !this.sheet2;
    },
    toggleSheet3() {
      this.sheet3 = !this.sheet3;
    },
    closeSheet3() {
      this.sheet3 = false;
    },
  },
};
</script>

<style scoped>
/* Add slide-up transition */
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-up-enter, .slide-up-leave-to {
  transform: translateY(100%);
}
</style>
