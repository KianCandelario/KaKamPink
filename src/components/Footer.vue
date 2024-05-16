<template>
    <div class = "max-w flex flex-col justify-items-center items-center font-[poppins] font-light-bold absolute bottom-0 ">
        <div class = "bg-transparent">
            <img class = " h-[10rem] bg-transparent" src="/src/assets/footer/logo.svg" alt="">
        </div>

        <div class = "flex flex-row justify-items-center items-center gap-5 pb-5 ">
            <a
            v-for = "(social, index) in socialmedia" :key = "index"
            >
                <img class = "max-w-[50px] " :src="social.src" alt="">
            </a>
        </div>

        <div class = "bg-transparent w-[80%] text-center">
            <p class = "" > KAKAMPINK KAKAMPINK KAKAMPINK KAKAMPINK KAKAMPINK KAKAMPINK KAKAMPINK KAKAMPINK KAKAMPINK Mananatiling kakampink, sa puso't isipan KAKAMPINK KAKAMPINK KAKAMPINK KAKAMPINK </p>
        </div>

        <div class = "border-b-2 border-black w-[50%] p-2">

        </div>

        <div class = "p-5">
            <h1> © 2024 Copyright: Kakampink.com</h1>
        </div>
    </div>
</template>


<script>
    export default{
        props: ['year', 'companyname', 'theme', 'number'],
        data(){
            return{
                socialmedia:[
                    { src: '/src/assets/footer/github.svg' },
                    { src: '/src/assets/footer/fb.svg' },
            ]
            }
        }
    }
</script>