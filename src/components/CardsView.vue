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

          <div class="w-[100%] h-[35vh] bg-white flex gap-7 items-center justify-center rounded-2xl m-5">
            <BasicCard></BasicCard>
            <BasicCard1></BasicCard1>
            <BasicCard2></BasicCard2>
          </div>
          
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Detailed Card </h1>
            <p class="font-poppins mt-2 text-[15px]"> A streamlined solution for showcasing content with enhanced context. Featuring a title, image, and description, it provides users with comprehensive information in a compact format. </p>
          </div>

          <div class="w-[100%] h-[60vh] bg-white gap-7 flex items-center justify-center rounded-2xl m-5">
            <DetailedCard></DetailedCard>
            <DetailedCard1></DetailedCard1>
            <DetailedCard2></DetailedCard2>
          </div>

          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Interactive Card </h1>
            <p class="font-poppins mt-2 text-[15px]"> Elevates user engagement with its dynamic hover effect. Offering an immersive experience, it responds interactively to user actions, enhancing content discovery and interaction. </p>
          </div>

          <div class="w-[100%] h-[60vh] gap-7 bg-white flex items-center justify-center rounded-2xl m-5">
            <InteractiveCard></InteractiveCard>
            <InteractiveCard1></InteractiveCard1>
            <InteractiveCard2></InteractiveCard2>
          </div>

        </div>

      </div>
    </div>
  </div>
</template>

<script>
import BasicCard from './Cards/BasicCards/BasicCard.vue';
import BasicCard1 from './Cards/BasicCards/BasicCard1.vue';
import BasicCard2 from './Cards/BasicCards/BasicCard2.vue';
import DetailedCard from './Cards/DetailedCards/DetailedCard.vue';
import DetailedCard1 from './Cards/DetailedCards/DetailedCard1.vue';
import DetailedCard2 from './Cards/DetailedCards/DetailedCard2.vue';
import InteractiveCard from './Cards/InteractiveCards/InteractiveCard.vue';
import InteractiveCard1 from './Cards/InteractiveCards/InteractiveCard1.vue';
import InteractiveCard2 from './Cards/InteractiveCards/InteractiveCard2.vue';

export default {
  components: {
    BasicCard,
    BasicCard1,
    BasicCard2,
    DetailedCard,
    DetailedCard1,
    DetailedCard2,
    InteractiveCard,
    InteractiveCard1,
    InteractiveCard2
  }
}
</script>
