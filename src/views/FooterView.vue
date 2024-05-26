<template>
<div class = "bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center rounded-xl">
        <div class="w-[80%]">
        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Footer </h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">A footer in a website is the section located at the bottom of each webpage. The footer serves to provide easy access to essential resources and legal information, enhancing the overall user experience and accessibility of the website.</p>
        

        <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Default </h1>
            <p class="font-poppins mt-2 text-[15px]">Add an element input facilitated with the component <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">kkp_footer</span> </p>
        </div>
        

        <!-- Default Input -->
        <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp_footer />
        </div>

        <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Links</h1>
            <p class="font-poppins mt-2 text-[15px]">Add an element input facilitated with the component <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">kkp_footer</span> </p>
        </div>

        <!-- Default Input -->
        <div class="w-[100%] h-[25vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp_footer links
            year = "2024" 
            kkp_name = "KaKampink"
            />
        </div>


        <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Socials </h1>
            <p class="font-poppins mt-2 text-[15px]">Add an element input facilitated with the component <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">kkp_footer</span> </p>
        </div>

        <!-- Default Input -->
        <div class="w-[100%] h-[25vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp_footer socials
            year = "2024" 
            kkp_name = "KaKampink"
            git 
            fb x ig yt
            />
        </div>

        <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Socials with description</h1>
            <p class="font-poppins mt-2 text-[15px]">Add an element input facilitated with the component <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">kkp_footer</span> </p>
        </div>

        <!-- Default Input -->
        <div class="w-[100%] h-[35vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp_footer socials
            year = "2024" 

            content = "Kakampink is a website that introduces various reusable 
            programming components. It provides developers with a collection of 
            versatile, eco-friendly code elements designed to enhance efficiency 
            and sustainability in software development." 

            kkp_name = "KaKampink"
            git 
            fb x ig yt
            />
        </div>
    </div>

    </div>
</div>
</template>

<script>
import kkp_footer from '../components/kkp-footer.vue'
import kkp_container from '../components/Container.vue'

export default {
    components:{
        kkp_footer,
        kkp_container
    }
}
</script>