<template>
  <div class="w-[27%] h-[80%] my-6 bg-pink-shade-one rounded-lg shadow-lg overflow-hidden border-2 border-pink-shade-two">
    <div class="px-6 py-4">
      <h2 class="font-poppins text-2xl mb-4 text-pink-shade-four border-b-[1px] border-pink-shade-three">Card Title</h2>
      <p class="font-quicksand text-pink-shade-three text-base">
        This is a basic card with a title and description.
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
  name: 'BasicCard2',
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
