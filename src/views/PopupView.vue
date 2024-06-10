<template>
    <div class="bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%] ">
      <div class="flex flex-col justify-center items-center ">
        <div class="w-[80%]">
  
          <!-- Popup -->
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-[#f07aa2] font-bold tracking-wider">POPUP</h1>
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
              <kkp_tooltipPopup class="bg-transparent h-10"/>
            </div>
            <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="tooltip" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_tooltipPopup/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('tooltip')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('tooltip')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
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
              <kkp_titledPopup class="bg-transparent h-10"/>
            </div>
                        <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="titled" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div&gt;
        &lt;kkp_titledPopup/&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('titled')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('titled')}}
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
  import kkp_tooltipPopup from '../components/Popup/kkp-tooltipPopup.vue';
  import kkp_titledPopup from '../components/Popup/kkp-titledPopup.vue';
  export default{
    components:{
      kkp_tooltipPopup,
      kkp_titledPopup
    },data() {
    return {
        tooltip: false,
        titled: false,
    };
  },
  methods: {
    toggleContent(Type) {
      this[Type] = !this[Type];
    },
    buttonText(Type) {
      return this[Type] ? 'Hide Code' : 'Show Code';
    }
  }
  }
  </script>