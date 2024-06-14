<template>
<div class="p-4 text-center mx-auto bg-pink-shade-one shadow-lg rounded-lg max-w-md w-full font-poppins">
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
  </template>
  
  <script>
  export default {
    name: 'MyComponent',
  };
  </script>
  
  <style scoped>

  
  .bg-pink-shade-one {
    background-color: #FEE3EC;
  }
  
  .text-pink-shade-four {
    color: #F2789F;
  }
  
  .text-pink-shade-three {
    color: #F999B7;
  }
  
  .text-blue-800 {
    color: #000000;
  }
  
  .hover\:bg-pink-shade-three:hover {
    background-color: #F999B7;
  }
  </style>
  