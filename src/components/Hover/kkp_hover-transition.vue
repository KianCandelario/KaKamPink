<template>
    <div class="relative w-[40%] h-auto overflow-hidden rounded-2xl font-poppins">
        <img src="/src/assets/images/pic1.jpg" alt="O-Pic" class="w-full h-full object-cover" @mouseover="isHovering = true" @mouseleave="isHovering = false">
        <transition name="fade">
        <div v-if="isHovering" class="absolute inset-0 bg-black bg-opacity-60 flex justify-center items-center flex-col opacity-0 transition-opacity duration-500 hover:opacity-100">
            <h1 class="text-3xl font-poppins text-pink-shade-four bg-transparent mb-2 transform translate-y-4 transition-transform duration-500">We are O</h1>
            <p class="text-md font-poppins text-pink-shade-four bg-transparent transform translate-y-4 transition-transform duration-500">KaKamPink</p>
        </div>
        </transition>
    </div>
</template>

<script>
export default {
data() {
    return {
    isHovering: true
    };
}
};
</script>
