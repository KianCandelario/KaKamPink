<template>
    <div class="bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%]">
      <div class="flex flex-col justify-center items-center">
        <div class="w-[80%]">
  
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">IMAGE</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">The v-img component is packed with features to support rich media. Combined with the vuetify-loader
          , you can add dynamic progressive images to provide a better user experience.</p>
  
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Cover</h1>
              <p class="font-poppins mt-2 text-[15px]">If the provided aspect ratio doesn’t match that of the actual image, the default behavior is to fill as 
                much space as possible without cropping. To fill the entire available space use the cover prop.</p>
            </div>
  
            <!-- First Container -->
                <kkp_image cover/>

                <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="cover" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_image cover&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('cover')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('cover') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
            
            <!-- End of First Container -->
  
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Grid</h1>
              <p class="font-poppins mt-2 text-[15px]">You can use v-img to make, for example, a picture gallery.</p>
            </div>

            <!-- Second Container -->
            <div class="w-[100%] h-[45vh] bg-white flex rounded-2xl m-5 p-4">
              <kkp_image grid/>
            </div>

            <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="grid" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_image grid&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('grid')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('grid') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
            <!-- End of Second Container -->
  
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Hover</h1>
              <p class="font-poppins mt-2 text-[15px]">You can change the animation by hovering with the property.</p>
            </div>

            <!-- Third Container -->
            <kkp_image hover/>
            <!-- Third Container -->
            
            <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="hover" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_image hover&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('hover')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded">
                                {{ buttonText('hover') }}
                                <!-- <img class = "bg-transparent w-[25px]" src="../assets/homepage/ph_code-bold.svg" alt=""> -->
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
          </div>
  
        </div>
      </div>
  
      
    </div>
  </template>
  
  <script>
  import kkp_image from '../components/Image/kkp-image.vue'
  export default {
    components:{
      kkp_image
    },
    methods: {
    toggleContent(Type) {
      this[Type] = !this[Type];
    },
    buttonText(Type) {
      return this[Type] ? 'Hide Code' : 'Show Code';
    }
  },
  data(){
    return{
      cover: false,
      grid: false,
      hover: false
    }
  }
  };
  </script>

  