<template>
    <div class="flex justify-center items-center text-3xl font-poppins" 
        @mouseover="isHovering = true" 
        @mouseleave="isHovering = false"
        :class="{ 'bg-transparent': !isHovering, 'text-pink-shade-four': !isHovering, 'text-black': isHovering, 'duration-[800ms]': isHovering }">
    <span :class="{ 'rounded-xl': !isHovering, 'rounded-2xl': isHovering, 'text-black': isHovering, 'duration-[800ms]': isHovering, 'scale-125': isHovering }">Hover Me</span>
    </div>
</template>

<script>
export default {
    data() {
    return {
        isHovering: false
    };
    }
};
</script>

<style scoped>
/* Tailwind CSS should handle the necessary styling */
</style>  