<template>
    <div class = "transition-container bg-pink-400 rounded-3xl flex items-center justify-center">
        <img src = "/src/assets/images/PXL_20230608_155657336.PORTRAIT.jpg" class = "transition-image rounded-xl">
    </div>
</template>

<script>
    export default {

    };
</script>

<style scoped>
    .transition-container {
        width: 425px;
        height: 300px;
        transition: transform 0.5s ease-in-out;
    }

    .transition-image {
        width: 350px;
        height: 250px;
        transition: transform 0.5s ease-in-out;
    }

    .transition-container:hover{
        transform: scale(1.5);
    }

    .transition-container:hover .transition-image {
        transform: scale(1.1);
    }
</style>