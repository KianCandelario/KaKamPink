<template>
  <div class="w-[27%] h-[80%] my-6 bg-pink-shade-one rounded-lg shadow-lg overflow-hidden">
    <div class="px-6 py-4">
      <h2 class="font-poppins text-2xl mb-2 text-pink-shade-four"> {{ userData.Title }}</h2>
      <p class="font-quicksand text-pink-shade-three text-base">
        {{ userData.Content }}
      </p>
    </div>
    <div class="px-6 py-4">
      <button class="bg-pink-shade-four text-white font-poppins py-2 px-4 rounded">Button</button>
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
            })
        }, 4000)
    })
}

export default {
  name: 'BasicCard1',
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
