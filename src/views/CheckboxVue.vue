<template>
    <div class="bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%]">
      <div class="flex flex-col justify-center items-center">
        <div class="w-[80%]">
  
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">CHECKBOX</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">A checkbox component lets users choose from a list of choices. It is frequently used in settings to toggle preferences, in forms to allow for multiple selections, in to-do lists to indicate completed activities, and in filters to apply various search criteria.</p>
  
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Default</h1>
              <p class="font-poppins mt-2 text-[15px]">To use this default design checkbox use <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">kkp_checkbox</span></p>
            </div>
  
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <kkp_checkbox v-model="checkboxValue"/>
            </div>

                    <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="defaultt" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_checkbox&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('defaultt')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('defaultt')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
  
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Round</h1>
              <p class="font-poppins mt-2 text-[15px]">To use the Round design checkbox use <span class="text-pink-shade-four font-semibold">roundcheck</span> property.</p>
            </div>
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <kkp_checkbox v-model="checkboxValue" round/>
            </div>

                                <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="round" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_checkbox round&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('round')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('round')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
  
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Square Fill</h1>
              <p class="font-poppins mt-2 text-[15px]">To use the Square Fill Checkbox use <span class="text-pink-shade-four font-semibold">squarefill</span> property.</p>
            </div>
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <kkp_checkbox v-model="checkboxValue" squared/>
            </div>

<!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="squarefill" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_checkbox squared&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('squarefill')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('squarefill') }}
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
  import kkp_checkbox from '../components/Checkbox/kkp_Checkbox.vue'
  export default {
    components:{
      kkp_checkbox
    },  
    props: {
      modelValue: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: '',
      },
      className: {
        type: String,
        default: '',
      },
    },
    computed: {
      displayText() {
        return this.modelValue ? 'CHECKED' : 'UNCHECK';
      },
      
    },
    methods: {
      handleChange(event) {
        this.$emit('update:modelValue', event.target.checked);
      },
      toggleContent(Type) {
        this[Type] = !this[Type];
      },
      buttonText(Type) {
        return this[Type] ? 'Hide Code' : 'Show Code';
      }
    },
    data() {
    return {
      checkboxValue: false,
      defaultt: false,
      round: false,
      squarefill:false,
    };
  },
  };
  </script>
  
  <style scoped>
  .custom-checkbox {
    position: relative;
  }
  
  .custom-checkbox:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 12px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
  }
  </style>