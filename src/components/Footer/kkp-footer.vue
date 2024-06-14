<template>
    <!-- default -->
    <div v-if = "!socials && !links" class = "bg-pink-shade-four w-full h-[10vh] font-bold font-quicksand text-white relative flex justify-center items-center border-2 border-pink-shade-four" >
        <p class = "bg-transparent">  Copyright © {{ year}}, {{ name }}</p>
    </div>
    

    <div v-if = "!socials  && links" class = "bg-pink-shade-four w-full font-bold font-quicksand text-white relative flex justify-center items-center border-2 border-pink-shade-four" >
        <div class = "bg-transparent text-center relative flex flex-col items-center justify-center w-full">
                    <p class = "bg-transparent m-5 w-[60%] font-semibold">{{ content }}</p>
            <div class = " bg-transparent w-full relative flex flex-row justify-center items-center w=full">
                <div class = "border-b-4 border-white w-2/4 mr-3 rounded-sm" ></div>
                <ul class = "bg-transparent relative flex flex-row gap-5 p-2 text-white underline text-lg font-poppins" >
                    <li class = "bg-transparent"> <router-link  class = "bg-transparent" to = "/"> HOME</router-link></li>
                    <li class = "bg-transparent"><router-link class = "bg-transparent" to = "/contributors"> CONTRIBUTORS</router-link></li>
                    <li class = "bg-transparent"><router-link class = "bg-transparent" to = "/documentation"> DOCUMENTATION</router-link></li>
                </ul>
                <div class = "border-b-4 border-white w-2/4 ml-3 rounded-sm"></div>
            </div> 
                <p class = "bg-transparent m-3">Copyright © {{ year }}, {{ name }}</p>
        </div>
    </div>

<!-- Socials -->
    <div v-if = "socials && !defaults && !links" class = "bg-pink-shade-four w-full font-bold font-quicksand text-white relative flex  flex-col justify-center items-center border-2 border-pink-shade-four" > 
        <div class = "bg-transparent text-center relative flex flex-col items-center justify-center w-full">
                    <p class = "bg-transparent m-5 w-[60%] font-semibold">{{ content }}</p>
            <div class = " bg-transparent w-full relative flex flex-row justify-center items-center w=full">
                <div class = "border-b-4 border-black w-2/4 mr-3 rounded-sm" ></div>
                <ul class = "bg-transparent relative flex flex-row gap-5 p-2">
                    <li v-if = "x" class = "bg-transparent"><a class = "bg-transparent" :href= "xlink"><img class = "bg-transparent" src="/src/assets/footer/x.svg" alt=""></a></li>
                    <li v-if = "git" class = "bg-transparent"><a class = "bg-transparent" :href="gitlink"><img class = "bg-transparent" src="/src/assets/footer/git.svg" alt=""></a></li>
                    <li v-if = "yt" class = "bg-transparent"><a class = "bg-transparent" :href= "ytlink"><img class = "bg-transparent" src="/src/assets/footer/yt.svg" alt=""></a></li>
                    <li v-if = "fb" class = "bg-transparent"><a class = "bg-transparent" :href= "fblink"><img class = "bg-transparent" src="/src/assets/footer/fb.svg" alt=""></a></li>
                    <li v-if = "ig" class = "bg-transparent"><a class = "bg-transparent" :href= "iglink"><img class = "bg-transparent" src="/src/assets/footer/ig.svg" alt=""></a></li>
                </ul>
                <div class = "border-b-4 border-black w-2/4 ml-3 rounded-sm"></div>
            </div> 
                <p class = "bg-transparent m-3">Copyright © {{ year }}, {{ name }}</p>
        </div>
    </div>

</template>

<script>
export default{
    props:{
        socials: {
            type: Boolean
        },
        links: {
            type: Boolean
        },
        year:{
            type:Number
        },
        content:{
            type: String
        },
        name:{
            type: String
        },
        git:{
            type: Boolean
        },
        gitlink:{
            type: String
        },
        fb:{
            type:Boolean
        },
        fblink:{
            type:String
        },
        x:{
            type:Boolean
        },
        xlink:{
            type:String
        },
        ig:{
            type:Boolean
        },
        iglink:{
            type:String
        },
        yt:{
            type:Boolean
        },
        ytlink:{
            type:String
        }
    }

}

</script>