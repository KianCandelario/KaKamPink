<script setup>
import HelloWorld from './components/HelloWorld.vue'
import DropDown from './components/DropDown.vue';
import Popup from './components/Popup.vue';
</script>

<template>
  <!--<kkpInput/>-->
  <DropDown :items="['Item1', 'Item 2', 'Item 3', 'Item 4', 'Item 5']"/>
  <!--<Popup content = 'Input here your desire content'/>-->
</template>
