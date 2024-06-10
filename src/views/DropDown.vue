<template>
    <div class="bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%] ">
      <div class="flex flex-col justify-center items-center">
        <div class="w-[80%]">
  
          <!-- Dropdown -->
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-[#f07aa2] font-bold tracking-wider">DROPDOWN</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">A dropdown component is a menu that appears when you click or hover over a button or icon. It collapses into a list of 
            options that you can choose from.</p>
  
          <!-- Selection-->
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Selection </h1>
              <p class="font-poppins mt-2 text-[15px]">A selection dropdown component is a specific type of dropdown used in forms. It combines the functionality of a dropdown 
                menu with the selection aspect of a typical form input field. To modify selection dropdown use the 
                <span class="border p-1 rounded border-[#f07aa2] text-[#f07aa2] font-medium text-xs">kkp-SelectionDropdown</span></p>
            </div>
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <kkp_selectionDropdown class=" bg-transparent"/>
            </div>

            <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="selection" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_selectionDropdown/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('selection')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('selection')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
          </div>

          <!-- Search -->
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Search </h1>
              <p class="font-poppins mt-2 text-[15px]"> A search dropdown component combines the functionality of a search bar and a dropdown menu, offering a more efficient 
                way for users to find specific options from a large list. To modify search dropdown use the 
                <span class="border p-1 rounded border-[#f07aa2] text-[#f07aa2] font-medium text-xs">kkp-SearchDropdown</span></p>
            </div>
            <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <kkp_searchDropdown class="bg-transparent" />
            </div>

<!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="search" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div&gt;
        &lt;kkp_searchDropdown/&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('search')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('search') }}
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
  import kkp_selectionDropdown from '../components/Dropdown/kkp-SelectionDropdown.vue';
  import kkp_searchDropdown from '../components/Dropdown/kkp-SearchDropdown.vue';

  export default{
    components:{
    kkp_selectionDropdown,
    kkp_searchDropdown
    },
    data() {
    return {
        isContentVisible: false,
        selection: false,
        search: false,
    };
  },
  methods: {
    toggleContent(Type) {
      this[Type] = !this[Type];
    },
    buttonText(Type) {
      return this[Type] ? 'Hide Code' : 'Show Code';
    }
    },
  }
</script>
  