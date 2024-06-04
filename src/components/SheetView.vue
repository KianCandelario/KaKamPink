<template>
  <div class="bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center rounded-xl">
      <div class="w-[80%]">

        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Sheets</h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">The v-sheet component is a transformable piece of paper that provides a basic foundation for Vuetify features.</p>

        <div>
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Congratulations</h1>
            <p class="font-poppins mt-2 text-[15px]">This example uses a sheet component to create a banner congratulating users for signing up for the Vuetify community.</p>
          </div>

          <!-- First Container -->
          <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <div class="flex items-center justify-center flex-wrap text-center mx-auto px-4 bg-pink-shade-one shadow-lg rounded-lg h-64 max-w-2xl w-full">
              <div>
                <h2 class="text-2xl font-black text-pink-shade-four font-poppins">Congratulations!</h2>
                <div class="text-xl font-medium mb-2 text-pink-shade-three font-quicksand">
                  You are officially a part of the Vuetify Community!
                </div>
                <p class="text-sm mb-4 text-pink-shade-four font-kumbh-sans">
                  Please head over to your inbox/spam or others folder to find our verification email.
                </p>
                <button class="bg-pink-shade-four text-white border border-pink-shade-four px-4 py-2 rounded-lg hover:bg-pink-shade-three">
                  Go to Login
                </button>
              </div>
            </div>
          </div>
          <!-- End of First Container -->
          
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Reconcile Notification</h1>
            <p class="font-poppins mt-2 text-[15px]">The following example uses a sheet component to create a banner that notifies users that the account balance has been reconciled.</p>
          </div>

          <!-- Second Container -->
          <div class="w-[100%] h-[53vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <div class="p-4 text-center mx-auto bg-pink-shade-one shadow-lg rounded-lg max-w-md w-full">
      <svg class="mx-auto mb-5 text-pink-shade-four" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="112" height="112">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7"></path>
      </svg>
  
      <h2 class="text-lg font-semibold mb-6 text-gray">You reconciled this account</h2>
  
      <p class="mb-4 text-gray-700 text-sm">
        To see a report on this reconciliation, click <a href="#" class="text-blue-800 underline">View reconciliation report</a>.
        <br>
        Otherwise, you're done!
      </p>
  
      <hr class="mb-4">
  
      <div class="text-right">
        <button class="px-4 py-2 bg-pink-shade-four text-white rounded hover:bg-pink-shade-three" style="width: 90px;">Done</button>
      </div>
    </div>
          </div>
          <!-- End of Second Container -->

          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Privacy Policy</h1>
            <p class="font-poppins mt-2 text-[15px]">Creating a Privacy Policy notification is a great use case for the v-sheet component.</p>
          </div>

          <!-- Third Container -->
          <div class="w-[100%] h-[62vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <div class="border border-gray-700 p-6 text-white mx-auto bg-pink-shade-one max-w-md">
      <h4 class="text-lg text-pink-shade-four font-bold mb-4">Your Privacy</h4>
  
      <p class="mb-8 text-sm text-black">
        This business determines the use of personal data collected on our media properties and across the internet. We may collect data that you submit to us directly or data that we collect automatically, including from cookies (such as device information or IP address).
        <br><br>
        Please read our <a href="#" class="text-pink-shade-four underline">Privacy Policy</a> to learn about our privacy practices or click "Your Preferences" to exercise control over your data.
      </p>
  
      <button class="bg-pink-shade-four text-white text-lg font-semibold mb-4 py-2 rounded-md w-full">
        Accept
      </button>
  
      <button class=" bg-pink-shade-three border border-red-accent-2 text-red-accent-2 text-lg font-semibold py-2 rounded-md w-full">
        Your Preferences
      </button>
    </div>
          </div>
          <!-- Third Container -->

        </div>

      </div>
    </div>

    
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
};
</script>

<style scoped>
/* Tailwind CSS should handle the necessary styling */
</style>
