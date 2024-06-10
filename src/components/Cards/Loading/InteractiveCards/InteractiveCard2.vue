<template>
  <div class="w-[27%]  my-6 bg-pink-shade-three rounded-lg shadow-lg overflow-hidden transform transition-transform hover:translate-x-2 border-2 border-pink-shade-two hover:border-none">
    <img class="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Card Image">
    <div class="px-6 py-4">
      <h2 class="font-kumbh-sans font-bold text-2xl mb-3 text-pink-shade-four border-b-2 border-pink-shade-two">{{ userData.Title }}</h2>
      <p class="font-quicksand text-pink-shade-four text-base">
        {{ userData.Content }}
      </p>
    </div>
    <div class="px-6 py-4">
      <button class="bg-pink-shade-four text-white font-kumbh-sans py-2 px-4 rounded">{{ userData.Button }}</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'

const loadUserData = async () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({
                Title: 'Card Title',
                Content: 'This is a basic card with a title and description.',
                Button: 'Button',
            })
        }, 4000)
    })
}

export default {
  name: 'InteractiveCard',
    async setup() {
        const userData = ref(await loadUserData())

        return {
            userData,
        }
    },
}
</script>

<style scoped>
</style>
