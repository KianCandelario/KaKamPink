<template>
  <div class="bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%] relative">
    <div class="flex flex-col justify-center items-center ">
      <div class="w-[80%]">

        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">BOTTOM SHEET</h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">The bottom sheet is a modified v-dialog that slides from the bottom of the screen, similar to a v-bottom-navigation.</p>

        <div>
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Model</h1>
            <p class="font-poppins mt-2 text-[15px]">The v-model (or model-value) controls the visibility of the bottom sheet:</p>
          </div>

          <!-- First Container -->
          <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5 relative">
            <kkp-buttomsheet-One />
          </div>

          <!-- code snippet -->
        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="one" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp-buttomsheet-one&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('one')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('one') }}
                                <!-- <img class = "bg-transparent w-[25px]" src="../assets/homepage/ph_code-bold.svg" alt=""> -->
                            </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of code snippet -->
          <!-- End of First Container -->
          
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Music Player</h1>
            <p class="font-poppins mt-2 text-[15px]">Using a inset bottom sheet, you can make practical components such as this simple music player.</p>
          </div>

          <!-- Second Container -->
          <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5 relative">
            <kkp-buttomsheet-two/>
          </div>
          <!-- End of Second Container -->

        <!-- code snippet -->
        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="two" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp-buttomsheet-two&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('two')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('two') }}
                                <!-- <img class = "bg-transparent w-[25px]" src="../assets/homepage/ph_code-bold.svg" alt=""> -->
                            </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of code snippet -->
      
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Open In List</h1>
            <p class="font-poppins mt-2 text-[15px]">By combining a functional list into a bottom sheet, you can create a simple ‘open in’ component.</p>
          </div>

          <!-- Third Container -->
          <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5 relative">
            <!-- New Component Start -->
            <kkp-buttomsheet-three/>
          </div>
          <!-- End of Third Container -->
          
          <!-- code snippet -->
        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="three" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp-buttomsheet-three&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('three')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('three') }}
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

import kkpButtomsheetOne from '../components/BottomSheet/kkp-BottomSheetOne.vue'
import kkpButtomsheetTwo from '../components/BottomSheet/kkp-BottomSheetTwo.vue'
import kkpButtomsheetThree from '../components/BottomSheet/kkp-BottomSheetThree.vue'
export default {
  components:{
    kkpButtomsheetOne,
    kkpButtomsheetTwo,
    kkpButtomsheetThree
  },
  name: 'MainComponent',
  data() {
    return {
      isContentVisible: false,
      sheet1: false,
      sheet2: false,
      sheet3: false,
      one: false,
      two:false,
      three:false,
      tiles: [
        { img: 'keep.png', title: 'Keep' },
        { img: 'inbox.png', title: 'Inbox' },
        { img: 'hangouts.png', title: 'Hangouts' },
        { img: 'messenger.png', title: 'Messenger' },
        { img: 'google.png', title: 'Google+' },
      ],
    };
  },
  methods: {
    toggleSheet1() {
      this.sheet1 = !this.sheet1;
    },
    toggleSheet2() {
      this.sheet2 = !this.sheet2;
    },
    toggleSheet3() {
      this.sheet3 = !this.sheet3;
    },
    closeSheet3() {
      this.sheet3 = false;
    },
    toggleContent(Type) {
      this[Type] = !this[Type];
    },
    buttonText(Type) {
      return this[Type] ? 'Hide Code' : 'Show Code';
    }
  },
};
</script>

<style scoped>
/* Add slide-up transition */
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-up-enter, .slide-up-leave-to {
  transform: translateY(100%);
}
.code-container {
    background-color: #2d2d2d;
    color: #f8f8f2;
    border-radius: 8px;
    padding: 16px;
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
    text-align: left;
}
.code-container pre {
    margin: 0;
    width: 100%;
}
</style>
