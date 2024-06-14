<template>
  <div v-if="isOpen" class="fixed inset-0 flex items-center justify-center z-50 font-poppins">
    <div class="absolute inset-0 bg-black opacity-50" @click="closeDialog"></div>
    <div class="relative bg-[#FEE3EC] p-8 max-w-md rounded-lg shadow-lg overflow-y-auto">
      <div class="flex justify-between items-center mb-4">
        <h2 class="text-lg font-semibold">{{ title }}</h2>
        <button v-if="!persistent" @click="closeDialog" class="text-gray-500 hover:text-gray-700">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <div>
        <slot></slot>
      </div>
      <div class="flex justify-end mt-6">
        <button v-if="!persistent" @click="acceptAction" class="px-4 py-2 bg-[#F2789F] text-white rounded-lg mr-2 font-medium">Okay</button>
        <button v-if="!persistent" @click="declineAction" class="px-4 py-2 bg-[#FEE3EC] text-gray-800 text-rounded-lg font-medium">Cancel</button>
        <button v-if="persistent" @click="acceptAction" class="px-4 py-2 bg-[#F2789F] text-white rounded-lg mr-2 font-medium">Accept</button>
        <button v-if="persistent" @click="declineAction" class="px-4 py-2 bg-[#FEE3EC] text-gray-800 rounded-lg font-medium">Decline</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CombinedDialog',
  props: {
    isOpen: {
      type: Boolean,
      required: true
    },
    title: {
      type: String,
      default: 'Dialog Title'
    },
    persistent: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    closeDialog() {
      if (!this.persistent) {
        this.$emit('close');
      }
    },
    acceptAction() {
      this.$emit('accept');
      this.$emit('close');
    },
    declineAction() {
      this.$emit('decline');
      this.$emit('close');
    }
  }
};
</script>

