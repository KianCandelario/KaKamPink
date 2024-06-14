<template>
    <div class="bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%]">
      <div class="flex flex-col justify-center items-center">
        <div class="w-[80%]">
  
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">HOVER</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">The v-hover component provides a simple interface for handling hover states for any component.</p>
  
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Usage</h1>
              <p class="font-poppins mt-2 text-[15px]">v-hover is a renderless component that uses the default slot to provide scoped access to its
                internal model; as well as mouse event listeners to modify it. To explicitly control the internal state, use the model-value property.</p>
            </div>
  
            <!-- First Container -->
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
                <kkp_hoverUsage/>
            </div>
            <!-- End of First Container -->

            <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="usage" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;kkp_hoverUsage&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('usage')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('usage') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Transition</h1>
              <p class="font-poppins mt-2 text-[15px]">Create highly customized components that respond to user interaction.</p>
            </div>
  
            <!-- Second Container -->
            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <kkp_hoverTransition/>
            </div>
            <!-- End of Second Container -->

            <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="transition" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_hoverTransition&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('transition')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('transition') }}
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
    import kkp_hoverUsage from '../components/Hover/kkp_hover-usage.vue';
    import kkp_hoverTransition from '../components/Hover/kkp_hover-transition.vue';

    export default {
      data(){
        return{
          usage: false,
          transition: false,
        }
      },
      components: {
        kkp_hoverUsage,
        kkp_hoverTransition
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
