<template>
<div class="flex flex-col items-center justify-center font-poppins">
              <button
                class="bg-[#F2789F] text-white text-xl py-2 px-4 rounded"
                @click="toggleSheet3"
              >
                Click Me
              </button>
            </div>

            <transition name="slide-up">
              <div v-if="sheet3" class="fixed inset-x-0 bottom-0 bg-gradient-to-b from-[#FEE3EC] via-[#F9C5D5] to-[#F999B7] p-4 shadow-lg z-50 bg-transparent">
                <div class="bg-white rounded-md p-4">
                  <button
                    class="bg-transparent text-black underline mb-4 font-poppins"
                    @click="toggleSheet3"
                  >
                    Close
                  </button>
                  <p class="text-center text-black mb-4 font-bold bg-transparent font-poppins">Open in</p>
                  <ul class="list-none p-0 bg-transparent flex gap-2 flex-col">
                    <li
                      v-for="tile in tiles"
                      :key="tile.title"
                      class="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-[#F9C5D5] active:bg-[#F999B7] font-poppins"
                      @click="closeSheet3"
                    >
                      <img :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`" alt="" class="w-8 h-8 rounded-full bg-transparent">
                      <span class="text-black ml-4 bg-transparent">{{ tile.title }}</span>
                    </li>
                  </ul>
                </div>
              </div>
            </transition>
  </template>
  
  <script>
  export default {
    data() {
      return {
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
  