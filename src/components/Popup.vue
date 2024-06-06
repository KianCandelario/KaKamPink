<template>
    <div class="bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%] ">
      <div class="flex flex-col justify-center items-center rounded-xl">
        <div class="w-[80%]">
  
          <!-- Popup -->
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-[#f07aa2] font-bold tracking-wider">Popup</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">A popup component is a box that appears on top of the main content of a screen. It's like a small window that can 
            contain text, images, buttons, and other interactive elements.</p>
  
          <!-- Tooltip -->
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Tooltip </h1>
              <p class="font-poppins mt-2 text-[15px]">A tooltip popup component is a miniature version of a regular popup. Instead of appearing in a separate window, 
                it appears as a small bubble attached to a specific element on the screen. To modify tooltip popup use the 
                <span class="border p-1 rounded border-[#f07aa2] text-[#f07aa2] font-medium text-xs">kkp-tooltipPopup</span></p>
            </div>
  
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <tooltipPopup class="absolute bg-transparent h-10"/>
            </div>
          </div>

          <!-- Titled -->
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Titled </h1>
              <p class="font-poppins mt-2 text-[15px]">A titled popup component is a regular popup window with an added feature: a title bar at the top. This title bar serves 
                two purposes: <span class="text-[#f07aa2] font-medium"> Clarity</span> and <span class="text-[#f07aa2] font-medium"> Organization </span>. To modify titled 
                popup use the <span class="border p-1 rounded border-[#f07aa2] text-[#f07aa2] font-medium text-xs">kkp-titledPopup</span></p>
            </div>
  
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <TitledPopup class="absolute bg-transparent h-10"/>
            </div>
          </div>

        </div>
      </div>
    </div>
  </template>
  
  <script setup>
  import tooltipPopup from './kkp-tooltipPopup.vue';
  import TitledPopup from './kkp-titledPopup.vue';
  </script>