<template>
    <div class="bg-pink-shade-two w-full p-3 h-[100%] ">
      <div class="flex flex-col justify-center items-center rounded-xl">
        <div class="w-[80%]">
  
          <!-- Component Header -->
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-[#f07aa2] font-bold tracking-wider">Popup</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">The Dropdown component lets users select an option from a list of items. It dynamically displays items passed as props, 
            making it customizable and easy to use. Ideal for creating intuitive and efficient selection interfaces.  </p>
  
          <!-- Component sub -->
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Tooltip </h1>
              <p class="font-poppins mt-2 text-[15px]">It provides brief information or context about the element without disrupting the user's flow. To add element to
                popup we change the component <span class="border p-1 rounded border-[#f07aa2] text-[#f07aa2] font-medium text-xs">Popup</span></p>
            </div>
  
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5 border-2 border-black">
              <Popup content = 'Input here your desire content' class="absolute bg-transparent"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import Popup from './Popup.vue';
  </script>
  