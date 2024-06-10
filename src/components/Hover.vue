<template>
    <div class="bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
      <div class="flex flex-col justify-center items-center rounded-xl">
        <div class="w-[80%]">
  
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Hover</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">The v-hover component provides a simple interface for handling hover states for any component.</p>
  
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Usage</h1>
              <p class="font-poppins mt-2 text-[15px]">v-hover is a renderless component that uses the default slot to provide scoped access to its
                internal model; as well as mouse event listeners to modify it. To explicitly control the internal state, use the model-value property.</p>
            </div>
  
            <!-- First Container -->
            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
                <HoverUsage/>
            </div>
            <!-- End of First Container -->

            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Transition</h1>
              <p class="font-poppins mt-2 text-[15px]">Create highly customized components that respond to user interaction.</p>
            </div>
  
            <!-- Second Container -->
            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <HoverTransition/>
            </div>
            <!-- End of Second Container -->
          </div>
  
        </div>
      </div>
  
      
    </div>
  </template>
  
  <script>
    import HoverUsage from './Hover/kkp_hover-usage.vue';
    import HoverTransition from './Hover/kkp_hover-transition.vue';

    export default {
      components: {
        HoverUsage,
        HoverTransition
      }
    }
  </script>
  
  <style scoped>
  /* Tailwind CSS should handle the necessary styling */
  </style> 