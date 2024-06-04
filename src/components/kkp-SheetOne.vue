<template>
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
</template>

<script>
export default {
  name: 'MyComponent',
};
</script>

<style scoped>
/* Tailwind CSS should handle the necessary styling */
</style>
