<template>
    <div class="w-[27%] my-6 bg-pink-shade-two rounded-lg shadow-lg overflow-hidden">
        <div class="w-full h-48 object-cover bg-gray-600 animate-pulse text-white text-lg">Loading...</div>
      <div class="px-6 py-4">
        <h2 class="bg-pink-shade-four mb-2 w-1/2 h-8 rounded-2xl animate-pulse"></h2>
        <p class="bg-pink-shade-three mb-1 w-full h-4 animate-pulse rounded-lg"></p>
        <p class="bg-pink-shade-three w-4/5 h-4 animate-pulse rounded-lg"></p>
      </div>
      <div class="px-6 py-4">
        <button class="bg-pink-shade-four w-2/5 h-10 rounded animate-pulse"></button>
      </div>
    </div>
</template>

<script>
export default {
    name: 'DetailedCard'
}
</script>