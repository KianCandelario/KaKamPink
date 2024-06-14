<template>
  <div class="flex justify-center items-center h-fit">
    <div class="relative inline-block text-left w-40 font-poppins">
      <div >
        <input type="text" v-model="searchTerm" @focus="toggleDropdown" @keyup="toggleDropdown" placeholder="Search"
          class="inline-flex justify-between w-full rounded-md shadow-sm px-4 py-2 bg-gray-200 text-md focus:ring-none focus:outline-none border-2 border-[#f1799f] bg-white"/>
      </div>
      <div v-if="isOpen" class="origin-top-right absolute right-0 w-full rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none border rounded-md mt-1">
        <ul class="max-h-60 overflow-y-auto font-poppins">
          <li v-for="item in filteredItems" :key="item" @click="select(item)" class="flex flex-col w-full block px-4 py-2 text-sm text-black hover:bg-gray-200 bg-white drop-shadow-md">
            {{ item }}
          </li>
        </ul>
        <div v-if="!filteredItems.length && searchTerm" class="text-xs text-gray-700 p-2 rounded border-gray-600 border">No result found</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isOpen: false,
      items: [
        'Option 1',   
        'Option 2',
        'Option 3',
        'Item 1',
        'Item 2',
        'Item 3',
        'Classification 1',
        'Classification 2',
        'Classification 3',
      ],
      selectedItem: 'Select',
      searchTerm: '',
    };
  },
  computed: {
    filteredItems() {
      return this.items.filter((item) => item.toLowerCase().includes(this.searchTerm.toLowerCase()));
    },
  },
  methods: {
    toggleDropdown() {
      this.isOpen = true;
    },
    select(option) {
      this.selectedItem = option;
      this.searchTerm = '';
      this.isOpen = false;
    },
    closeDropdown(event) {
      if (!this.$el.contains(event.target)) {
        this.isOpen = false;
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.closeDropdown);
  },
  beforeDestroy() {
    document.removeEventListener('click', this.closeDropdown);
  },
};
</script>