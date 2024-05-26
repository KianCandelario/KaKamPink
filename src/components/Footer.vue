<template>
<div class = "w-full bg-pink-shade-three p-3">
    
        <div class = " bg-transparent flex flex-row gap-5 justify-center items-center p-5">
            <!-- line -->
            <div class = "border-2 border-black w-[30%]"></div>
            <div class = "bg-transparent">
                <ul class = " bg-transparent flex flex-row gap-5 justify-center items-center font-poppins">
                    <li class = "bg-transparent" ><img class = "bg-transparent" src="/src/assets/footer/fb.svg" alt=""></li>
                    <li class = "bg-transparent"><img class = "bg-transparent"  src="/src/assets/footer/github.svg" alt=""></li>
                    <li class = "bg-transparent"><img class = "bg-transparent" src="/src/assets/footer/github.svg" alt=""></li>
                    <li class = "bg-transparent"><img class = "bg-transparent" src="/src/assets/footer/fb.svg" alt=""></li>
                </ul>
            </div>
            <div class = "border-2 border-black w-[30%]"></div>
        </div>

    <div class = "bg-transparent">
        <div class = "bg-transparent font-poppins flex flex-col justify-center items-center text-center">
            <img class = "bg-transparent w-[200px] h-[200px]" src="/src/assets/footer/kkp-logo.svg" alt="">
            <p class = " bg-transparent text-[25px] w-[40%]">{{ content }}</p>
            <p class = " bg-transparent text-[20px] mt-5">Copyright © {{ year }} {{ companyname }}</p>
        </div>
    </div>

    <div class = "bg-transparent mb-3">
        <ul class = " bg-transparent flex flex-row gap-10 font-poppins text-[20px] items-center justify-center mt-10 underline">
            <li v-for="(item, index) in nav" :key="index" class = "bg-transparent "> {{ item }} </li>
            
        </ul>
    </div>
    <div class = "flex justify-center bg-transparent p-5">
        <div class = "border-2 border-black w-[75%] text-"></div>
    </div>

</div>
    


</template>


<script>
    export default{
        props: ['year', 'companyname', 'theme', 'number', 'content'],
        data(){
            return{
                socialmedia:[
                    { src: '/src/assets/footer/github.svg' },
                    { src: '/src/assets/footer/fb.svg' },
            ],
            nav: ['Home', 'Contributors', 'Documentation'],
            }
        }
    }
</script>