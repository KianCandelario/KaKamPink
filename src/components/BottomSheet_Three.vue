<template>
    <div class="flex flex-col items-center justify-center min-h-screen">
      <div class="text-center">
        <button
          class="bg-[#F2789F] text-white text-xl py-2 px-4 rounded"
          @click="toggleSheet"
        >
          Click Me
        </button>
      </div>
  
      <transition name="slide-up">
        <div v-if="sheet" class="fixed inset-x-0 bottom-0 bg-gradient-to-b from-[#FEE3EC] via-[#F9C5D5] to-[#F999B7] p-4 shadow-lg">
          <div class="bg-white rounded-md p-4">
            <p class="text-center text-black mb-4 font-bold">Open in</p>
            <ul class="list-none p-0">
              <li
                v-for="tile in tiles"
                :key="tile.title"
                class="flex items-center justify-between p-2 rounded-md cursor-pointer hover:bg-[#F9C5D5] active:bg-[#F999B7]"
                @click="closeSheet"
              >
                <img :src="`https://cdn.vuetifyjs.com/images/bottom-sheets/${tile.img}`" alt="" class="w-8 h-8 rounded-full">
                <span class="text-black ml-4">{{ tile.title }}</span>
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
      toggleSheet() {
        this.sheet = !this.sheet;
      },
      closeSheet() {
        this.sheet = false;
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
  