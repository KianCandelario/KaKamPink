<template>
  <div class="relative">
    <div class="flex justify-center">
      <div class="relative">
        <div :class="avatarClass">
          <img :src="displaySrc" :alt="alt" v-if="displaySrc" class="w-full h-full object-cover rounded-full border-4 border-pink-shade-four" :style="{ width: size + 'rem', height: size + 'rem' }" />
          <div v-else class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 rounded-full border-4 border-kakampink-border">
            <input type="file" ref="fileInput" @change="handleFileChange" accept="image/*" class="hidden" />
            <label for="fileInput" class="cursor-pointer">{{ displaySrc ? 'Edit Avatar' : '' }}</label>
          </div>
        </div>
      </div>
    </div>
    <div class="flex justify-center mt-2">
      <button class="bg-pink-shade-two text-black px-4 py-2 rounded-md" @click="toggleAvatar">{{ displaySrc ? 'Remove Avatar' : 'Upload Avatar' }}</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'kkp_Avatar',
  props: {
    src: {
      type: String,
      default: null,
    },
    alt: {
      type: String,
      default: 'kkp_Avatar',
    },
    size: {
      type: String,
      default: '8',
    },
    name: {
      type: String,
      default: '',
    },
  },
  data() {
    return {
      displaySrc: this.src,
    };
  },
  methods: {
    avatarClass() {
      return `w-${this.size} h-${this.size} rounded-full overflow-hidden`;
    },
    avatarStyle() {
      return {
        width: `${this.size * 4}px`,
        height: `${this.size * 4}px`,
      };
    },
    initials() {
      if (!this.name) return '';
      return this.name.split(' ').map(part => part[0]).join('').toUpperCase();
    },
    handleFileChange(event) {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          this.displaySrc = e.target.result;
        };
        reader.readAsDataURL(file);
      }
    },
    openFilePicker() {
      this.$refs.fileInput.click();
    },
    toggleAvatar() {
      if (this.displaySrc) {
        this.displaySrc = null;
      } else {
        this.openFilePicker();
      }
    },
  },
};
</script>

<style scoped>
.hidden {
  display: none;
}
</style>
