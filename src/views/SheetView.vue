<template>
  <div class="bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center">
      <div class="w-[80%]">

        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">SHEET</h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">The v-sheet component is a transformable piece of paper that provides a basic foundation for Vuetify features.</p>

        <div>
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Congratulations</h1>
            <p class="font-poppins mt-2 text-[15px]">This example uses a sheet component to create a banner congratulating users for signing up for the Vuetify community.</p>
          </div>

          <!-- First Container -->
          <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp-sheet-one/>
          </div>
          <!-- End of First Container -->

                    <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="one" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp-sheet-one&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('one')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('one') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
          
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Reconcile Notification</h1>
            <p class="font-poppins mt-2 text-[15px]">The following example uses a sheet component to create a banner that notifies users that the account balance has been reconciled.</p>
          </div>

          <!-- Second Container -->
          <div class="w-[100%] h-[53vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp-sheet-two/>
          </div>
          <!-- End of Second Container -->

                    <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="two" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp-sheet-two&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('two')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('two') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Privacy Policy</h1>
            <p class="font-poppins mt-2 text-[15px]">Creating a Privacy Policy notification is a great use case for the v-sheet component.</p>
          </div>

          <!-- Third Container -->
          <div class="w-[100%] h-[62vh] bg-white flex items-center justify-center rounded-2xl m-5">
          <kkp-sheet-three/>
          </div>
          <!-- Third Container -->

                    <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="three" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp-sheet-three&gt;
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
import kkpSheetOne from '../components/Sheet/kkp-SheetOne.vue'
import kkpSheetTwo from '../components/Sheet/kkp-SheetTwo.vue'
import kkpSheetThree from '../components/Sheet/kkp-SheetThree.vue'
import KkpBottomSheetThree from '../components/BottomSheet/kkp-BottomSheetThree.vue';
export default {
  data(){
    return{
      one: false,
      two: false,
      three: false,
    }
  },
  components:{
    kkpSheetOne,
    kkpSheetTwo,
    kkpSheetThree,
    KkpBottomSheetThree
  },
  methods: {
    toggleContent(Type) {
      this[Type] = !this[Type];
    },
    buttonText(Type) {
      return this[Type] ? 'Hide Code' : 'Show Code';
    }
  }
};
</script>

<style scoped>
/* Tailwind CSS should handle the necessary styling */
</style>
