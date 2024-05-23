<template>
   <div class="p-4">
    <KaKamPinkCheckbox v-model="checkboxValue" label="Label for checkbox" />
  </div>
</template>

<script>
import KaKamPinkCheckbox from './components/KaKamPinkCheckbox.vue';

export default {
  name: 'App',
  components: {
    KaKamPinkCheckbox,
  },
  data() {
    return {
      checkboxValue: false,
    };
  },
};
</script>
