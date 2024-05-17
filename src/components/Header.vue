<template>
    <div class="w-full flex flex-col md:flex-row justify-center items-center p-5 shadow-lg">
    <div class="w-full md:w-1/3 ml-0 mb-4 md:mb-0 flex justify-center md:justify-start">
        <img src="/src/assets/footer/kkp-logo.svg" alt="KKP Logo" class="w-[80px] md:w-[100px]">
    </div>

    <div class="w-full md:w-1/2 flex justify-center md:justify-start">
    
    <ul class="w-full flex flex-col md:flex-row gap-5 md:gap-10 items-center font-medium text-base md:text-lg justify-end text-poppins">
        <li  v-for="(item, index) in nav" :key="index">
        <a href="#" class="hover:underline hover:text-pink-500">{{ item }}</a>
      </li>
    <li><a href="#"><img class="w-3 h-3 md:w-5 md:h-5" src="/src/assets/header/gitblack.png" alt="GitHub"></a></li>
</ul>

    </div>
</div>

</template>

<script>
export default{
    data(){
            return{
                nav: ['Home', 'Contributors', 'Documentation']
            }
            
        }
}
</script>