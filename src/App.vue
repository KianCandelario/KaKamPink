<template>
  <div class="p-4">
    <KKPCheckbox v-model="checkboxValue" label="Label for checkbox" />
    <KKPAvatar src="your-image-url.jpg" alt="Avatar" size="10" />
  </div>
</template>

<script>
import KKPCheckbox from './components/Kakp_checkbox.vue';
/*import KKPAvatar from './components/Kakp_avatar.vue';*/

export default {
  name: 'App',
  components: {
    KKPCheckbox,
    /*KKPAvatar,*/
  },
  data() {
    return {
      checkboxValue: false,
    };
  },
};
</script>
