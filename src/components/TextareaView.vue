<template>
<div class = "bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center rounded-xl">
        <div class = "w-[80%]">

            <!-- Component Header -->
            <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Collapse Component</h1>
            <p class="font-poppins mt-5 mb-5 text-[18px]"> The Collapse Component is designed to provide a user-friendly way to hide or reveal content sections on demand. It allows users to toggle between showing or hiding sections of content with a smooth animation, enhancing the user experience by decluttering the interface and focusing attention on relevant information. </p>

            <!-- Component sub -->
                <div>
                    <div class="w-[80%]">
                    <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Default Collapse </h1>
                    <p class="font-poppins mt-2 text-[15px]"> A versatile UI element that simply allows users to hide or reveal content sections with a simple click or tap. </p>
                </div>
        
                <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
                    <DefaultCollapse></DefaultCollapse>
                </div>
            </div>
        

        </div>
    </div>
</div>
</template>

<script>
import DefaultCollapse from './Collapse/Default.vue';
import AccordionCollapse from './Collapse/Accordion.vue';
import HoverCollapse from './Collapse/Hover.vue';

export default {
  components: {
    DefaultCollapse,
    AccordionCollapse,
    HoverCollapse
  }
}
</script>
