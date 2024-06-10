<template>
  <div class="w-[27%] my-6 bg-pink-shade-two rounded-lg shadow-lg overflow-hidden">
    <img class="w-full h-48 object-cover" src="https://via.placeholder.com/150" alt="Card Image">
    <div class="px-6 py-4">
      <h2 class="font-poppins text-2xl mb-3 text-pink-shade-four border-b-2 border-pink-shade-two">{{ userData.Title }}</h2>
      <p class="font-quicksand text-pink-shade-three text-base">
        {{ userData.Content }}
      </p>
    </div>
    <div class="px-6 py-4">
      <button class="bg-pink-shade-four text-white font-poppins py-2 px-4 rounded">{{ userData.Button }}</button>
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
  name: 'DetailedCard1',
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
  