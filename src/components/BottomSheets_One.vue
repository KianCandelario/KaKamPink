<template>
  <div class="flex flex-col items-center justify-center min-h-screen ">
    <button
      class="bg-[#F2789F] text-white text-xl py-2 px-4 rounded"
      @click="toggleSheet"
    >
      Click Me
    </button>

    <transition name="slide-up">
      <div v-if="sheet" class="fixed bottom-0 left-0 right-0 bg-gradient-to-b from-[#F999B7] via-[#F9C5D5] to-[#FEE3EC] p-4 shadow-lg">
        <div class="text-center h-48 flex flex-col justify-center">
          <button
            class="bg-transparent text-black underline mb-4"
            @click="toggleSheet"
          >
            Close
          </button>
          <p class="text-black">
            This is a bottom sheet controlled by v-model instead of activator.
          </p>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      sheet: false,
    };
  },
  methods: {
    toggleSheet() {
      this.sheet = !this.sheet;
    },
  },
};
</script>

<style scoped>
.slide-up-enter-active, .slide-up-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-up-enter, .slide-up-leave-to {
  transform: translateY(100%);
}
</style>
