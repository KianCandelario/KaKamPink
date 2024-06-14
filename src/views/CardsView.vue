<template>
  <div class="bg-pink-shade-two w-full  overflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center ">
      <div class="w-[80%]">

        <!-- Component Header -->
        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">CARD</h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">The Cards Component is a versatile and visually engaging UI element designed to present various types of content in a structured and concise manner. It consists of individual cards, each containing specific information or media, such as text, images, or interactive elements.</p>

        <!-- Component sub -->
        <div>
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Default Card </h1>
            <p class="font-poppins mt-2 text-[15px]"> Offers a clean and adaptable solution for displaying concise information or media in a structured format. Featuring a minimalist design, it seamlessly integrates into various interfaces, providing users with an efficient way to engage with content.  </p>
          </div>

          <div class="w-[100%] h-[35vh] bg-white flex gap-7 items-center justify-center rounded-2xl m-5">
            <kkp_basicCard/>
            <kkp_basicCard1/>
            <kkp_basicCard2/>
          </div>

          
        <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="basic" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div&gt;
        &lt;kkp_card&gt;
        &lt;kkp_card1&gt;
        &lt;kkp_card2&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('basic')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('basic') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
          
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Detailed Card </h1>
            <p class="font-poppins mt-2 text-[15px]"> A streamlined solution for showcasing content with enhanced context. Featuring a title, image, and description, it provides users with comprehensive information in a compact format. </p>
          </div>

          <div class="w-[100%] h-[60vh] bg-white gap-7 flex items-center justify-center rounded-2xl m-5">
            <kkp_detailedCard/>
            <kkp_detailedCard1/>
            <kkp_detailedCard2/>
          </div>

                  <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="detailed" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div&gt;
        &lt;kkp_detailedCard&gt;
        &lt;kkp_detailedCard1&gt;
        &lt;kkp_detailedCard2&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('detailed')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]" >
                                {{ buttonText('detailed') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Interactive Card </h1>
            <p class="font-poppins mt-2 text-[15px]"> Elevates user engagement with its dynamic hover effect. Offering an immersive experience, it responds interactively to user actions, enhancing content discovery and interaction. </p>
          </div>

          <div class="w-[100%] h-[60vh] gap-7 bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp_interactiveCard/>
            <kkp_interactiveCard1/>
            <kkp_interactiveCard2/>
          </div>

                  <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="interactive" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div&gt;
        &lt;kkp_interactiveCard&gt;
        &lt;kkp_interactiveCard1&gt;
        &lt;kkp_interactiveCard2&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('interactive')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('interactive') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

        </div>

      </div>
    </div>
  </div>
</template>

<script>

import kkp_basicCard from '../components/Cards/BasicCards/BasicCard.vue';
import kkp_basicCard1 from '../components/Cards/BasicCards/BasicCard1.vue';
import kkp_basicCard2 from '../components/Cards/BasicCards/BasicCard2.vue';
import kkp_detailedCard from '../components/Cards/DetailedCards/DetailedCard.vue';
import kkp_detailedCard1 from '../components/Cards/DetailedCards/DetailedCard1.vue';
import kkp_detailedCard2 from '../components/Cards/DetailedCards/DetailedCard2.vue';
import kkp_interactiveCard from '../components/Cards/InteractiveCards/InteractiveCard.vue';
import kkp_interactiveCard1 from '../components//Cards/InteractiveCards/InteractiveCard1.vue';
import kkp_interactiveCard2 from '../components/Cards/InteractiveCards/InteractiveCard2.vue';

export default {
  components: {
    kkp_basicCard,
    kkp_basicCard1,
    kkp_basicCard2,
    kkp_detailedCard,
    kkp_detailedCard1,
    kkp_detailedCard2,
    kkp_interactiveCard,
    kkp_interactiveCard1,
    kkp_interactiveCard2
  },
  data() {
    return {
        basic: false,
        detailed: false,
        interactive:false
    };
  },
  methods: {
    toggleContent(cardsType) {
      this[cardsType] = !this[cardsType];
    },
    buttonText(cardsType) {
      return this[cardsType] ? 'Hide Code' : 'Show Code';
    }
  }
}
</script>
