<template>
    

    
    <div class = "flex flex-row justify-center items-center w-[100%] h-full bg-transparent overflow-hidden">
        <div class="w-full flex justify-center items-center bg-transparent p-4 sm:p-8 md:p-9">
    <div class="w-full sm:w-[80%] h-full bg-transparent ">
        <img class = "fixed bg-transparent left-0 top-10" src="/src/assets/homepage/teenyicons_vue-solid.svg" alt="">
        <h1 class=" relative bg-transparent text-6xl sm:text-[100px] md:text-[120px] lg:text-[180px] text-pink-shade-four font-bold font-poppins ">KKP</h1>
        <h2 class="text-2xl sm:text-[45px] mt-4 sm:mt-7 bg-transparent font-poppins w-[70%] leading-normal
        ">
            Frontend Components for <span class=" text-pink-shade-three bg-transparent">Vue.js</span>
        </h2>
        <p class="font-quicksand bg-transparent mt-4 sm:mt-7 sm:text-[25px]">
            Empower Your Vue: Elevate Development <br> with Our Reusable Components!
        </p>

        <div class="relative flex flex-col sm:flex-row justify-start items-center gap-4 mt-6 sm:mt-12 bg-transparent">
            <router-link :to = "git"  class=" relative flex justify-center items-center bg-pink-shade-four rounded-xl text-white w-full sm:w-[180px] h-[55px] text-[20px] font-medium font-poppins"> Get Started</router-link>
            <a class="bg-transparent" href="https://github.com/KianCandelario/KaKamPink" target=”_blank”>
                <img class="bg-transparent w-[50px] sm:w-[65px] h-[50px] sm:h-[65px]" src="/src/assets/homepage/pink-git.svg" alt="">
            </a>
        </div>
    </div>
</div>


        <div class = "w-[50%] flex justify-ce">
            <div class="w-[40%] h-[80%]  bg-white fixed rounded-full right-5 sm:right-[150px] bottom-6 p-5">
                <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute top-[15%] left-[15%] sm:top-[75px] sm:left-[100px]" src="/src/assets/homepage/mdi_color.svg" alt="">
                <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute right-[15%]  top-[15%] sm:right-[130px] sm:top-[30px]" src="/src/assets/homepage/tdesign_system-components.svg" alt="">
                <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute bottom-[5%]  right-[35%] sm:bottom-[20px] sm:right-[220px]" src="/src/assets/homepage/ph_code-bold.svg" alt="">
                <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute bottom-[35%]  right-[35%] sm:bottom-[200px] sm:right-[225px]" src="/src/assets/homepage/teenyicons_vue.svg" alt="">
                <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute bottom-[25%]  left-[10%] sm:bottom-[150px] sm:left-[30px]" src="/src/assets/homepage/icon-park-solid_graphic-design.svg" alt="">
                <img class="w-20 h-20 sm:w-[165px] sm:h-[165px] bg-transparent absolute bottom-[28%]  right-[10%] sm:bottom-[210px] sm:right-[30px]" src="/src/assets/homepage/fluent-mdl2_web-components.svg" alt="">
            </div>
        </div>
        

    </div>
</template>

<script>
import Headerr from '../components/Header.vue'
export default {
    components: {
        Headerr,
    },
    data(){
        return{
            git:'/documentation'
        }
    }
}
</script>