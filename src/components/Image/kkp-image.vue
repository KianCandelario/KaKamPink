<template>
    <div v-if="cover && !grid && !hover" class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
        <img src = "/src/assets/images/pic1.jpg" alt = "O-Pic" class = "rounded-xl h-[100%] w-[200vh]">
    </div>

    <div v-if="!cover && grid && !hover" class="w-[100%] h-[40vh] bg-transparent flex rounded-2xl gap-2">
        <div class = "h-[100%] bg-transparent">
                <img src = "/src/assets/images/pic1.jpg" alt = "O-Pic" class = "rounded-xl h-[100%] w-[39vh] mx-1">
              </div>
              <div class = "h-[100%] bg-transparent">
                <img src = "/src/assets/images/pic1.jpg" alt = "O-Pic" class = "rounded-xl h-[100%] w-[39vh] mx-1">
              </div>
              <div class = "h-[100%] bg-transparent">
                <img src = "/src/assets/images/pic1.jpg" alt = "O-Pic" class = "rounded-xl h-[100%] w-[39vh] mx-1">
              </div>
              <div class = "h-[100%] bg-transparent">
                <img src = "/src/assets/images/pic1.jpg" alt = "O-Pic" class = "rounded-xl h-[100%] w-[39vh] mx-1">
              </div>
    </div>


    <div v-if="!cover && !grid && hover" class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5 hover:bg-[#F2789F] ease-in-out duration-500">
        <img src = "/src/assets/images/pic1.jpg" alt = "O-Pic" class = "rounded-xl h-[75%] w-[75vh] shadow-2xl hover:scale-125 ease-in-out duration-500">
    </div>
</template>

<script>
export default{
    props:{
        cover:{type: Boolean},
        grid:{type: Boolean},
        hover:{type: Boolean},
    }
}
</script>