<template>
  <div class="w-[27%]  my-6 bg-pink-shade-three rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-95 hover:border-2 hover:border-pink-shade-two">
    <img class="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Card Image">
    <div class="px-6 py-4">
      <h2 class="font-kumbh-sans font-bold text-2xl mb-3 text-pink-shade-four border-b-2 border-pink-shade-two">Card Title</h2>
      <p class="font-quicksand text-pink-shade-four text-base">
        This card has an interactive hover effect.
      </p>
    </div>
    <div class="px-6 py-4">
      <button class="bg-pink-shade-four text-white font-kumbh-sans py-2 px-4 rounded">Button</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'InteractiveCard1'
}
</script>

<style scoped>
</style>
