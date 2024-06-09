<template>
  <div class="bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center rounded-xl">
      <div class="w-[80%]">

        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">AVATAR</h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">This component allows you to upload your choice of photo to be your avatar. Uses for avatars include comment areas, user menus, chat apps, user profiles, and notifications. Image source, fallback alternatives, size variations, forms, and optional borders are some of the key features.</p>

        <div>
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">AVATAR DESIGNS</h1>
            <p class="font-poppins mt-2 text-[15px]">There a different style of avatars.</p>
          </div>

          <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
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
          </div>

          <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
              <div class="relative">
                  <div class="flex justify-center">
                      <div class="relative">
                          <div :class="avatarSquareClass">
                              <img :src="displaySrc" :alt="alt" v-if="displaySrc" class="w-full h-full object-cover rounded-lg border-4 border-pink-shade-four" :style="{ width: size + 'rem', height: size + 'rem' }" />
                              <div v-else class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 rounded-lg border-4 border-kakampink-border">
                                  <input type="file" ref="fileInput" @change="handleFileChange" accept="image/*" class="hidden" />
                                  <label for="fileInput" class="cursor-pointer">{{ displaySrc ? 'Edit Avatar' : 'Upload Avatar' }}</label>
                              </div>
                          </div>
                      </div>
                  </div>
                  <div class="flex justify-center mt-2">
                      <button class="bg-pink-shade-two text-black px-4 py-2 rounded-md" @click="toggleAvatar">{{ displaySrc ? 'Remove Avatar' : 'Upload Avatar' }}</button>
                  </div>
              </div>
          </div>

          <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5 shadow-lg">
              <div class="relative">
                  <div class="flex justify-center">
                      <div class="relative">
                          <div :class="avatarOutlineClass">
                              <img :src="displaySrc" :alt="alt" v-if="displaySrc" class="w-full h-full object-cover rounded-full border-4 border-pink-shade-four" :style="{ width: size + 'rem', height: size + 'rem', boxShadow: '0 0 0 4px #f0f', outline: '4px solid #f0f' }" />
                              <div v-else class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 rounded-full border-4 border-pink-shade-four" :style="{ boxShadow: '0 0 0 4px #f0f', outline: '4px solid #f0f' }">
                                  <input type="file" ref="fileInput" @change="handleFileChange" accept="image/*" class="hidden" />
                                  <label for="fileInput" class="cursor-pointer">{{ displaySrc ? 'Edit Avatar' : 'Upload Avatar' }}</label>
                              </div>
                          </div>
                          <div class="absolute bottom-0 right-0 bg-green-500 w-4 h-4 rounded-full border-2 border-white"></div>
                      </div>
                  </div>
                  <div class="flex justify-center mt-2">
                      <button class="bg-pink-shade-two text-black px-4 py-2 rounded-md" @click="toggleAvatar">{{ displaySrc ? 'Remove Avatar' : 'Upload Avatar' }}</button>
                  </div>
              </div>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainComponent',
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
    avatarSquareClass() {
      return `w-${this.size} h-${this.size} rounded-lg overflow-hidden`;
    },
    avatarOutlineClass() {
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

</style>
