<template>
  <div class="flex justify-center items-center h-fit">
    <div class="relative inline-block text-left w-40 font-poppins">
      <div>
        <button @click="toggleDropdown" class="inline-flex justify-between w-full rounded-md shadow-sm px-4 py-2 bg-[#f1799f] text-md text-white focus:ring-none">
          <span class="bg-transparent">{{ selectedItem }}</span>
          <svg class="-mr-1 ml-2 h-6 w-5 bg-transparent" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
            <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.72-3.72a.75.75 0 011.06 1.06l-4 4a.75.75 0 01-1.06 0l-4-4a.75.75 0 01.02-1.06z" clip-rule="evenodd" />
          </svg>
        </button>
      </div>
      <div v-if="isOpen" class="origin-top-right absolute right-0 mt-2 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border rounded-md">
        <div>
          <a v-for="item in items" :key="item" @click="select(item)" class="flex flex-col items-center w-full block px-4 py-2 text-sm text-black hover:bg-gray-200 bg-white drop-shadow-md">{{ item }}</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      items: ['Option 1', 'Option 2', 'Option 3','Option 4'],
      selectedItem: 'Select'
    };
  },
  methods: {
    toggleDropdown() {
      this.isOpen = !this.isOpen;
    },
    select(option) {
      this.selectedItem = option;
      this.isOpen = false;
    }
  }
};
</script>
  