<template>
    <div class="bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%] ">
      <div class="flex flex-col justify-center items-center rounded-xl">
        <div class="w-[80%]">
  
          <!-- Dropdown -->
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-[#f07aa2] font-bold tracking-wider">Dropdown</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">A dropdown component is a menu that appears when you click or hover over a button or icon. It collapses into a list of 
            options that you can choose from.</p>
  
          <!-- Selection-->
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Selection </h1>
              <p class="font-poppins mt-2 text-[15px]">A selection dropdown component is a specific type of dropdown used in forms. It combines the functionality of a dropdown 
                menu with the selection aspect of a typical form input field. To modify selection dropdown use the 
                <span class="border p-1 rounded border-[#f07aa2] text-[#f07aa2] font-medium text-xs">kkp-SelectionDropdown</span></p>
            </div>
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <SelectionDropdown class="absolute bg-transparent"/>
            </div>
          </div>

          <!-- Search -->
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Search </h1>
              <p class="font-poppins mt-2 text-[15px]"> A search dropdown component combines the functionality of a search bar and a dropdown menu, offering a more efficient 
                way for users to find specific options from a large list. To modify search dropdown use the 
                <span class="border p-1 rounded border-[#f07aa2] text-[#f07aa2] font-medium text-xs">kkp-SearchDropdown</span></p>
            </div>
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <SearchDropdown class="absolute bg-transparent" />
            </div>
          </div>
  
        </div>
      </div>
    </div>    

      
  </template>
  
<script setup>
  import SelectionDropdown from './kkp-SelectionDropdown.vue';
  import SearchDropdown from './kkp-SearchDropdown.vue';
</script>
  