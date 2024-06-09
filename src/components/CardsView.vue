<template>
  <div class="bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center rounded-xl">
      <div class="w-[80%]">

        <!-- Component Header -->
        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Cards Component</h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">The Cards Component is a versatile and visually engaging UI element designed to present various types of content in a structured and concise manner. It consists of individual cards, each containing specific information or media, such as text, images, or interactive elements.</p>

        <!-- Component sub -->
        <div>
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Default Card </h1>
            <p class="font-poppins mt-2 text-[15px]"> Offers a clean and adaptable solution for displaying concise information or media in a structured format. Featuring a minimalist design, it seamlessly integrates into various interfaces, providing users with an efficient way to engage with content.  </p>
          </div>

          <div class="w-[100%] h-[35vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <BasicCard></BasicCard>
          </div>
          
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Detailed Card </h1>
            <p class="font-poppins mt-2 text-[15px]"> A streamlined solution for showcasing content with enhanced context. Featuring a title, image, and description, it provides users with comprehensive information in a compact format. </p>
          </div>

          <div class="w-[100%] h-[60vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <DetailedCard></DetailedCard>
          </div>

          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Interactive Card </h1>
            <p class="font-poppins mt-2 text-[15px]"> Elevates user engagement with its dynamic hover effect. Offering an immersive experience, it responds interactively to user actions, enhancing content discovery and interaction. </p>
          </div>

          <div class="w-[100%] h-[60vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <InteractiveCard></InteractiveCard>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BasicCard from './Cards/BasicCard.vue';
import DetailedCard from './Cards/DetailedCard.vue';
import InteractiveCard from './Cards/InteractiveCard.vue';

export default {
  components: {
    BasicCard,
    DetailedCard,
    InteractiveCard
  }
}
</script>
