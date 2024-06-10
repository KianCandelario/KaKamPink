<template>
    <div class="bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
      <div class="flex flex-col justify-center items-center rounded-xl">
        <div class="w-[80%]">
  
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Images</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">The v-img component is packed with features to support rich media. Combined with the vuetify-loader
            , you can add dynamic progressive images to provide a better user experience.</p>
  
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Cover</h1>
              <p class="font-poppins mt-2 text-[15px]">If the provided aspect ratio doesn’t match that of the actual image, the default behavior is to
                fill as much space as possible without cropping. To fill the entire available space use the cover prop.</p>
            </div>
  
            <!-- First Container -->
            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
                <ImagesCover/>
            </div>
            <!-- End of First Container -->

            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Grid</h1>
              <p class="font-poppins mt-2 text-[15px]">You can use v-img to make, for example, a picture gallery.</p>
            </div>
  
            <!-- Second Container -->
            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <ImagesGrid/>
            </div>
            <!-- End of Second Container -->
  
          </div>
  
        </div>
      </div>
  
      
    </div>
  </template>
  
  <script>
    import ImagesCover from './Images/kkp_images-cover.vue'
    import ImagesGrid from './Images/kkp_images-grid.vue'

    export default {
      components: {
        ImagesCover,
        ImagesGrid
      }
    }
  </script>
  
  <style scoped>
  /* Tailwind CSS should handle the necessary styling */
  </style>