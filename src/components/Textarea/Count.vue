<template>
  <div class="relative w-[95%] h-[80%]">
    <textarea
      v-model="text"
      class="w-full h-full p-2 pt-8 border border-gray-300 rounded-md focus:outline-none focus:ring-2 font-quicksand"
      :class="[text.length > limit ? 'focus:ring-red-500' : 'focus:ring-pink-shade-three']"
      @input="updateCount"
      v-bind="$attrs"
    ></textarea>
    <div class="absolute top-2 left-2 text-xs font-quicksand" :class="{'text-red-500': text.length > limit}">
      Count: {{ text.length }} / {{ limit }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'TextareaWithCounter',
  props: {
    limit: {
      type: Number,
      default: 20
    }
  },
  data() {
    return {
      text: ''
    };
  },
  methods: {
    updateCount() {
      if (this.text.length > this.limit) {
        this.$el.querySelector('textarea').style.color = 'red';
      } else {
        this.$el.querySelector('textarea').style.color = 'black';
      }
    }
  }
}
</script>
