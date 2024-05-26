
<template>
    <div>
    <img class="bg-transparent w-[150px] h-[150px] sm:w-[200px] sm:h-[100px] md:w-[350px] md:h-[300px] fixed top-[60px] left-[50px] sm:top-[80px] sm:left-[80px] md:top-[150px] md:left-[200px]" src="/src/assets/contributors-page/logo1.svg" alt="">
    <img class="bg-transparent w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[150px] md:h-[150px] fixed bottom-[30px] left-[50px] sm:bottom-[80px] sm:left-[80px] md:bottom-[60px] md:left-[230px]" src="/src/assets/contributors-page/logo2.svg" alt="">
    <img class="bg-transparent w-[150px] h-[150px] sm:w-[200px] sm:h-[200px] md:w-[300px] md:h-[280px] fixed top-[60px] right-[50px] sm:top-[80px] sm:right-[80px] md:top-[150px] md:right-[200px]" src="/src/assets/contributors-page/logo3.svg" alt="">
    <img class="bg-transparent w-[100px] h-[100px] sm:w-[150px] sm:h-[150px] md:w-[250px] md:h-[150px] fixed bottom-[30px] right-[50px] sm:bottom-[80px] sm:right-[80px] md:bottom-[60px] md:right-[185px]" src="/src/assets/contributors-page/logo4.svg" alt="">
    </div>

    <div class="bg-transparent w-full flex flex-col justify-center items-center">
        <div class="bg-transparent text-center w-[90%] max-w-[450px] mt-3">
            <h1 class="bg-transparent mb-[-10px] text-[60px] sm:text-[80px] md:text-[100px] text-pink-shade-four font-bold font-poppins">KKP</h1>
            <h2 class="text-[30px] sm:text-[35px] md:text-[40px] font-bold font-poppins">Contributors</h2>
            <p class="text-[16px] sm:text-[18px] md:text-[25px] m-3 font-light font-quicksand">Meet the brilliant minds driving our mission forward.</p>
        </div>

        <div class="bg-white w-[80%] max-w-[500px] h-[200px] sm:h-[250px] md:h-[230px] rounded-xl shadow-md mt-2 md:mt-3 flex justify-center items-center">
                <ul class = "bg-white grid grid-flow-row-dense grid-cols-4 grid-rows-2 gap-1 p-5 rounded-2xl">
                    <li class = "bg-transparent" v-for="(item, index) in profile" :key="index" > <a :href="item.link" class = "bg-transparent" target=”_blank”><img class = "bg-transparent" :src="item.user" alt=""></a></li>
                </ul>
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
                profile: 
                [
                    {user: './src/assets/contributors-page/profiles/antanoy.svg', link: 'https://github.com/VinnHubs'},
                    {user: './src/assets/contributors-page/profiles/kian.svg', link: 'https://github.com/KianCandelario'},
                    {user: './src/assets/contributors-page/profiles/rus.svg', link: 'https://github.com/cusrussel'},
                    {user: './src/assets/contributors-page/profiles/emman.svg', link: 'https://github.com/cusrussel'},
                    {user: './src/assets/contributors-page/profiles/aye.svg', link: 'https://github.com/kiwirizz'},
                    {user: './src/assets/contributors-page/profiles/mel.svg', link: 'https://github.com/kiwirizz'},
                    {user: './src/assets/contributors-page/profiles/vincent.svg', link: 'https://github.com/VincentMaiwat'},
                    {user: './src/assets/contributors-page/profiles/panoy.svg', link: 'https://github.com/ajpanoy14'},
                    
                ]
            }
            
        }
}

</script>