<template>
        <div class="relative inline-block">
        <button @click="toggleDropdown" type="button" class="inline-flex justify-center w-40 rounded-md px-14 py-2 bg-pink-500 text-white font-bold text-md font-serif">
            Dropdown
        </button>
    
        <div v-if="isDropdownOpen" class="absolute left-1/2 transform -translate-x-1/2 z-10 transition-all right-0 mt-1 w-40 rounded-md bg-white" aria-labelledby="dropdown">
            <a v-for="(item, index) in items" :key="index" href="#" class="block px-2 py-2 text-sm text-pink-700 hover:bg-gray-200 rounded-md" role="item">{{ item }}</a>
        </div>    
        </div>
</template>
    
<script setup>
    import { ref } from 'vue';
    import { defineProps } from 'vue';

    const props = defineProps ({
        items: {
            type: Array,
            default: () => []
        }
    })

    const isDropdownOpen = ref(false);
    
    function toggleDropdown() {
        isDropdownOpen.value = !isDropdownOpen.value;
    }

</script> 
