
<script>
import kkp_dialog from './components/kkp-dialog.vue';

export default {
  name: 'App',
  components: {
    kkp_dialog
  },
  data() {
    return {
      showNormalDialog: false,
      showPersistentDialog: false
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
    }
  }
};
</script>

<template>
  <div class = "bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
      <div class="flex flex-col justify-center items-center rounded-xl">
          <div class = "w-[80%]">
  
              <!-- Component Header -->
              <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Dialog</h1>
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
                        <button @click="showNormalDialog = true" class="bg-[#F2789F] font-normal text-white hover:bg-[#E04D78] px-4 py-2 rounded-lg hover:shadow-xl ">
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

                      <!--Persistent Dialog-->
                      <div class="w-[80%]">
                      <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Persistent  </h1>
                      <p class="font-poppins mt-2 text-[15px]"> Persistent dialogs will not be dismissed unless the user picks an option. </p>
                      </div>

                      <!--Sample container-->
                      <div class="w-[100%] h-[12vh] bg-white flex items-center justify-center rounded-2xl m-5">
                          <div class ="flex gap-5 flex-wrap">
                            <button @click="showPersistentDialog = true" class="bg-[#F2789F] font-normal text-white hover:bg-[#E04D78] px-4 py-2 rounded-lg hover:shadow-xl">Open Dialog</button>
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

                  </div>
          </div>
      </div>
  </div>

  </template>