<script>
import Headerr from './Header.vue'
export default {
    components: {
        Headerr,
    }
}
</script>

<template>
<Headerr/>
<div class = "">
    <img class="absolute w-full sm:w-3/5 h-[95%] sm:mt-[-40px] bg-transparent "
     src="/src/assets/homepage/teenyicons_vue-solid.svg" alt="">

<div class="w-[80%] sm:w-[600px] md:w-[600px] lg:w-[700px] h-[80%] sm:h-[600px] md:h-[600px] lg:h-[700px] bg-white absolute rounded-full right-5 sm:right-[150px] bottom-11 p-5">
    <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute top-[15%] sm:top-[85px] left-[15%] sm:left-[140px]" src="/src/assets/homepage/mdi_color.svg" alt="">
    <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute right-[15%] sm:right-[150px] top-[15%] sm:top-[60px]" src="/src/assets/homepage/tdesign_system-components.svg" alt="">
    <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute bottom-[5%] sm:bottom-[50px] right-[35%] sm:right-[220px]" src="/src/assets/homepage/ph_code-bold.svg" alt="">
    <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute bottom-[35%] sm:bottom-[245px] right-[35%] sm:right-[270px]" src="/src/assets/homepage/teenyicons_vue.svg" alt="">
    <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute bottom-[25%] sm:bottom-[200px] left-[10%] sm:left-[60px]" src="/src/assets/homepage/icon-park-solid_graphic-design.svg" alt="">
    <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute bottom-[28%] sm:bottom-[290px] right-[10%] sm:right-[60px]" src="/src/assets/homepage/fluent-mdl2_web-components.svg" alt="">
</div>  


<div class="w-11/12 sm:w-[50%] absolute bg-transparent left-5 sm:left-[220px] top-[10%] sm:top-[240px]">
    <h1 class="text-6xl sm:text-[100px] md:text-[120px] lg:text-[180px]
             text-pink-shade-four font-bold font-poppins bg-transparent">KKP</h1>
    <h2 class="text-2xl sm:text-[45px] mt-7 bg-transparent font-poppins">Frontend Components for <span class="text-pink-shade-three bg-transparent">Vue.js</span></h2>
    <p class="font-quicksand bg-transparent mt-7 sm:text-[25px]">Empower Your Vue: Elevate Development <br>
        with Our Reusable Components!
    </p>

    <div class="bg-transparent flex flex-row justify-start items-center gap-4 mt-12">
        <button class="bg-pink-shade-four rounded-2xl text-white w-[30vw] sm:w-[180px] h-[65px] text-[23px] font-medium font-quicksand">Get Started</button>
        <a class="bg-transparent" href="https://github.com/KianCandelario/KaKamPink"><img class="bg-transparent w-[65px] h-[65px]" src="/src/assets/homepage/pink-git.svg" alt=""></a>
    </div>
</div>
</div>

</template>

<style scoped>
/* Tailwind CSS will handle the responsive styles */
</style>
