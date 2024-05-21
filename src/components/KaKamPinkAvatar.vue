<template>
    <div :class="avatarClass" :style="avatarStyle">
      <img :src="src" :alt="alt" v-if="src" class="w-full h-full object-cover rounded-full" />
      <div v-else class="w-full h-full flex items-center justify-center bg-gray-200 text-gray-500 rounded-full">
        {{ initials }}
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'kakampink-avatar',
    props: {
      src: {
        type: String,
        default: null,
      },
      alt: {
        type: String,
        default: 'kakampink-avatar',
      },
      size: {
        type: String,
        default: '16', // Default size is 16 (which means 4rem or 64px in Tailwind)
      },
      name: {
        type: String,
        default: '',
      },
    },
    computed: {
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
    },
  };
  </script>
  
  <style scoped>
  </style>