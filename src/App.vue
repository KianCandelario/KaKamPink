<script setup>

import { RouterView } from 'vue-router'
import Header from './components/Header/Header.vue'
</script>

<template>
    <div id="app">
        <Header/>
    <router-view v-slot="{ Component, route }">
      <transition :name="route.meta.transition || 'fade'">
        <component :is="Component" />
      </transition>
    </router-view>
  </div>
</template>


