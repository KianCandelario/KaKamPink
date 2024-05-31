<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DropDown from './components/DropDown.vue';
import Popup from './components/Popup.vue';
import PopSearchSelection from './components/kkp-PopSearchSelection.vue';
import ViewDropdown from './components/ViewDropdown.vue';
import ViewPopup from './components/ViewPopup.vue';
</script>

<template>
  <!--<PopSearchSelection />-->
  <ViewPopup />
  <ViewDropdown />
  <!--<DropDown :items="['Item1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']"/>-->
  <!--<Popup content = 'Input here your desire content'/>-->
</template>
