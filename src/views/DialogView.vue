
<script>
import kkp_dialog from '../components/Dialog/kkp-dialog.vue';

export default {
  name: 'App',
  components: {
    kkp_dialog
  },
  data() {
    return {
      showNormalDialog: false,
      showPersistentDialog: false,
      normal:false,
      persistent:false,
    };
  },
  methods: {
    handleAcceptNormal() {
      console.log('Accepted in normal dialog');
      this.showNormalDialog = false; // Close dialog after accepting
    },
    handleDeclineNormal() {
      console.log('Declined in normal dialog');
      this.showNormalDialog = false; // Close dialog after declining
    },
    handleAcceptPersistent() {
      console.log('Accepted in persistent dialog');
      this.showPersistentDialog = false; // Close dialog after accepting
    },
    handleDeclinePersistent() {
      console.log('Declined in persistent dialog');
      this.showPersistentDialog = false; // Close dialog after declining
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

<template>
  <div class = "bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%]">
      <div class="flex flex-col justify-center items-center">
          <div class = "w-[80%]">
  
              <!-- Component Header -->
              <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">DIALOG</h1>
              <p class="font-poppins mt-5 mb-5 text-[18px]">Dialogs are small windows that enable interactive, modal pop-ups for user inputs, confirmations, and notifications.</p>
  
              <!-- Component sub -->
                  <div>

                      <!--Normal Dialog-->
                      <div class="w-[80%]">
                      <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Default</h1>
                      <p class="font-poppins mt-2 text-[15px]"> The most basic form of a dialog. It contains a dialog title, its message and buttons for different functionalities.<br/><br/> Generate a dialog component using the <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">kkp_dialog</span> tag</p>
                      </div>

                      <!--Sample container-->
                      <div class="w-[100%] h-[12vh] bg-white flex items-center justify-center rounded-2xl m-5 ">
                        <button @click="showNormalDialog = true" class="bg-[#F2789F] font-normal text-white hover:bg-[#E04D78] px-4 py-2 rounded-lg hover:shadow-xl font-poppins">
                          Open Dialog
                        </button>

                        <kkp_dialog
                          :isOpen="showNormalDialog"
                          title="Normal Dialog Title"
                          @close="showNormalDialog = false"
                          @accept="handleAcceptNormal"
                          @decline="handleDeclineNormal"
                        >
                          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                        </kkp_dialog>
                      </div>

                      
<!-- code snippet -->

    <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-[100%]">
                        <div v-if="normal" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-[80%]  "><code class = "bg-transparent ">&lt;template&gt;
    &lt;button @click="showNormalDialog = true" class="bg-[#F2789F] font-normal text-white hover:bg-[#E04D78]
     px-4 py-2 rounded-lg hover:shadow-xl "&gt;
     Open Dialog
    &lt;/button&gt;

    &lt;kkp_dialog
    :isOpen="showNormalDialog"
    title="Normal Dialog Title"
    @close="showNormalDialog = false"
    @accept="handleAcceptNormal"
    @decline="handleDeclineNormal"&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. &lt;/p&gt;
    &lt;/kkp_dialog&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('normal')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('normal') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

                      <!--Persistent Dialog-->
                      <div class="w-[80%]">
                      <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Persistent  </h1>
                      <p class="font-poppins mt-2 text-[15px]"> Persistent dialogs will not be dismissed unless the user picks an option. </p>
                      </div>

                      <!--Sample container-->
                      <div class="w-[100%] h-[12vh] bg-white flex items-center justify-center rounded-2xl m-5">
                          <div class ="flex gap-5 flex-wrap">
                            <button @click="showPersistentDialog = true" class="bg-[#F2789F] font-normal text-white hover:bg-[#E04D78] px-4 py-2 rounded-lg hover:shadow-xl font-poppins">Open Dialog</button>
                            <kkp_dialog
                              :isOpen="showPersistentDialog"
                              title="Persistent Dialog Title"
                              :persistent="true"
                              @close="showPersistentDialog = false"
                              @accept="handleAcceptPersistent"
                              @decline="handleDeclinePersistent"
                            >
                              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                            </kkp_dialog>
                          </div>
                      </div>

                      <!-- code snippet -->

    <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-[100%]">
                        <div v-if="persistent" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-[80%]  "><code class = "bg-transparent ">&lt;template&gt;
    &lt;button @click="showPersistentDialog = true" class="bg-[#F2789F] font-normal text-white hover:bg-[#E04D78]
     px-4 py-2 rounded-lg hover:shadow-xl "&gt;
     Open Dialog
    &lt;/button&gt;

    &lt;kkp_dialog
    :isOpen="showPersistentDialog"
    title="Persistent Dialog Title"
    :persistent="true"
    @close="showPersistentDialog = false"
    @accept="handleAcceptPersistent"
    @decline="handleDeclinePersistent"&gt;
      &lt;p&gt; Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod 
      tempor incididunt ut labore et dolore magna aliqua. &lt;/p&gt;
    &lt;/kkp_dialog&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('persistent')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('persistent') }}
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