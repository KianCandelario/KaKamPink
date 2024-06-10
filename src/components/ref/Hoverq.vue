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
              <v-hover class = "text-3xl bg-white font-poppins rounded-lg p-20 hover:bg-[#F2789F] hover:text-[#FFF] duration-500">Hover Me</v-hover>
            </div>
            <!-- End of First Container -->
  
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Misc</h1>
              <p class="font-poppins mt-2 text-[15px]">v-hover can be used in combination with v-for to make a single item stand out when the user interacts with the list.</p>
            </div>

            <!-- Second Container -->
            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <v-hover src = "/src/assets/images/pic1.jpg" alt = "O-Pic" class = "rounded-xl h-[75%] w-[75vh] shadow-xl blur grayscale hover:grayscale-0 hover:blur-0 hover:scale-125 ease-in-out duration-500"></v-hover>
            </div>
            <!-- End of Second Container -->
  
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Transition</h1>
              <p class="font-poppins mt-2 text-[15px]">Create highly customized components that respond to user interaction.</p>
            </div>

            <!-- Third Container -->
            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <div class="relative w-full h-full flex items-center justify-center rounded-2xl overflow-hidden">
              <img src="/src/assets/images/pic1.jpg" alt="O-Pic" class="w-full h-full object-cover">
              <div class="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center flex-col opacity-0 transition-opacity duration-500 hover:opacity-100">
                <h1 class="text-4xl font-poppins text-[#F2789F] bg-transparent mb-4 transform translate-y-6 transition-transform duration-500">We are O</h1>
                <p class="text-lg font-poppins text-[#F2789F] bg-transparent transform translate-y-6 transition-transform duration-500">KaKamPink</p>
              </div>
            </div>
          </div>
            <!-- Third Container -->
  
          </div>
  
        </div>
      </div>
  
      
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainComponent',
  };
  </script>
  
  <style scoped>
  /* Tailwind CSS should handle the necessary styling */
  </style>
  