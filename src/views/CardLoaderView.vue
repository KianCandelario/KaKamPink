<template>
    <div class = "bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%]">
        <div class="flex flex-col justify-center items-center">
            <div class = "w-[80%]">
    
                <!-- Component Header -->
                <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">CARD LOADER</h1>
                <p class="font-poppins mt-5 mb-5 text-[18px]">A Card Laoder is a placeholder used to indicate to the user that Datas are loading.</p>
    
                <!-- Component sub -->
                <div>
                    <div class="w-[80%] my-10">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Match your Card </h1>
                        <p class="font-poppins mt-2 text-[15px]"> KKP's <span class="text-pink-shade-four font-semibold">Card Loader</span> component offers different variants to match any <span class="text-pink-shade-four font-semibold">KKP Card component</span> 
                            KKP Card component that you want to use. <br>
                        <br> *Reload the page to see Card Loaders*</p>
                    </div>

                    <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Default Card Loaders </h1>
                    </div>
            
                    <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl m-5 gap-4">
                        <Suspense> <!-- The Suspense component allows you to wait for asynchronous operations. It shows a fallback UI (like a loading spinner) while waiting. -->
                            <template #default> <!-- The default slot template will display the main content (your card component) once the operation is complete. -->
                                <BasicCard /> <!-- This is your card component that will be displayed after the asynchronous operation finishes successfully. -->
                            </template>
                            <template #fallback> <!-- The fallback slot template will display the placeholder (card loader component) while waiting for the operation to complete. -->
                                <LoaderBasicCard /> <!-- This is the card loader component that serves as a placeholder or loading indicator until the Card component is ready. -->
                            </template>
                        </Suspense>


                        <Suspense>
                            <template #default>
                                <BasicCard1 />
                            </template>
                            <template #fallback>
                                <LoaderBasicCard1 />
                            </template>
                        </Suspense>

                        <Suspense>
                            <template #default>
                                <BasicCard2 />
                            </template>
                            <template #fallback>
                                <LoaderBasicCard2 />
                            </template>
                        </Suspense>
                    </div>

                    <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="normal" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;Suspense&gt;
        &lt;template #default&gt;
        &lt;kkp_basicCard/&gt;
        &lt;/template&gt;

        &lt;template #fallback&gt;
        &lt;kkp_loaderBasicCard/&gt;
        &lt;/template&gt;
    &lt;/Suspense&gt;

    &lt;Suspense&gt;
        &lt;template #default&gt;
        &lt;kkp_basicCard1/&gt;
        &lt;/template&gt;

        &lt;template #fallback&gt;
        &lt;kkp_loaderBasicCard1/&gt;
        &lt;/template&gt;
    &lt;/Suspense&gt;

    &lt;Suspense&gt;
        &lt;template #default&gt;
        &lt;kkp_basicCard2/&gt;
        &lt;/template&gt;

        &lt;template #fallback&gt;
        &lt;kkp_loaderBasicCard2/&gt;
        &lt;/template&gt;
    &lt;/Suspense&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('normal')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('normal') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

                    <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Detailed Card Loaders </h1>
                    </div>
            
                    <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl m-5 gap-4">
                        <Suspense>
                            <template #default>
                                <DetailedCard />
                            </template>
                            <template #fallback>
                                <LoaderDetailedCard />
                            </template>
                        </Suspense>

                        <Suspense>
                            <template #default>
                                <DetailedCard1 />
                            </template>
                            <template #fallback>
                                <LoaderDetailedCard1 />
                            </template>
                        </Suspense>

                        <Suspense>
                            <template #default>
                                <DetailedCard2 />
                            </template>
                            <template #fallback>
                                <LoaderDetailedCard2 />
                            </template>
                        </Suspense>
                    </div>

                    <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="detailed" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;Suspense&gt;
        &lt;template #default&gt;
        &lt;kkp_detailedCard/&gt;
        &lt;/template&gt;

        &lt;template #fallback&gt;
        &lt;kkp_loaderDetailedCard/&gt;
        &lt;/template&gt;
    &lt;/Suspense&gt;

    &lt;Suspense&gt;
        &lt;template #default&gt;
        &lt;kkp_detailedCard1/&gt;
        &lt;/template&gt;

        &lt;template #fallback&gt;
        &lt;kkp_loaderDetailedCard1/&gt;
        &lt;/template&gt;
    &lt;/Suspense&gt;

    &lt;Suspense&gt;
        &lt;template #default&gt;
        &lt;kkp_detailedCard2/&gt;
        &lt;/template&gt;

        &lt;template #fallback&gt;
        &lt;kkp_loaderDetailedCard2/&gt;
        &lt;/template&gt;
    &lt;/Suspense&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('detailed')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('detailed') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

                    <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Interactive Card Loaders </h1>
                    </div>

                    <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl m-5 gap-4">
                        <Suspense>
                            <template #default>
                                <InteractiveCard />
                            </template>
                            <template #fallback>
                                <LoaderInteractiveCard />
                            </template>
                        </Suspense>

                        <Suspense>
                            <template #default>
                                <InteractiveCard1 />
                            </template>
                            <template #fallback>
                                <LoaderInteractiveCard1 />
                            </template>
                        </Suspense>

                        <Suspense>
                            <template #default>
                                <InteractiveCard2 />
                            </template>
                            <template #fallback>
                                <LoaderInteractiveCard2 />
                            </template>
                        </Suspense>
                    </div>

                    <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="interactive" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;Suspense&gt;
        &lt;template #default&gt;
        &lt;kkp_interactiveCard/&gt;
        &lt;/template&gt;

        &lt;template #fallback&gt;
        &lt;kkp_loaderInteractiveCard/&gt;
        &lt;/template&gt;
    &lt;/Suspense&gt;

    &lt;Suspense&gt;
        &lt;template #default&gt;
        &lt;kkp_interactiveCard1/&gt;
        &lt;/template&gt;

        &lt;template #fallback&gt;
        &lt;kkp_loaderInteractiveCard1/&gt;
        &lt;/template&gt;
    &lt;/Suspense&gt;

    &lt;Suspense&gt;
        &lt;template #default&gt;
        &lt;kkp_interactiveCard2/&gt;
        &lt;/template&gt;

        &lt;template #fallback&gt;
        &lt;kkp_loaderInteractiveCard2/&gt;
        &lt;/template&gt;
    &lt;/Suspense&gt;
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
import BasicCard from '../components/Cards/Loading/BasicCards/BasicCard.vue';
import BasicCard1 from '../components/Cards/Loading/BasicCards/BasicCard1.vue';
import BasicCard2 from '../components/Cards/Loading/BasicCards/BasicCard2.vue';
import LoaderBasicCard from '../components/Cards/Loading/BasicCards/Loader-BasicCard.vue';
import LoaderBasicCard1 from '../components/Cards/Loading/BasicCards/Loader-BasicCard1.vue';
import LoaderBasicCard2 from '../components/Cards/Loading/BasicCards/Loader-BasicCard2.vue';
import DetailedCard from '../components/Cards/Loading/DetailedCards/DetailedCard.vue';
import DetailedCard1 from '../components/Cards/Loading/DetailedCards/DetailedCard1.vue';
import DetailedCard2 from '../components/Cards/Loading/DetailedCards/DetailedCard2.vue';
import LoaderDetailedCard from '../components/Cards/Loading/DetailedCards/Loader-DetailedCard.vue';
import LoaderDetailedCard1 from '../components/Cards/Loading/DetailedCards/Loader-DetailedCard1.vue';
import LoaderDetailedCard2 from '../components/Cards/Loading/DetailedCards/Loader-DetailedCard2.vue';
import InteractiveCard from '../components/Cards/Loading/InteractiveCards/InteractiveCard.vue';
import InteractiveCard1 from '../components/Cards/Loading/InteractiveCards/InteractiveCard1.vue';
import InteractiveCard2 from '../components/Cards/Loading/InteractiveCards/InteractiveCard2.vue';
import LoaderInteractiveCard from '../components/Cards/Loading/InteractiveCards/Loader-InteractiveCard.vue';
import LoaderInteractiveCard1 from '../components/Cards/Loading/InteractiveCards/Loader-InteractiveCard1.vue';
import LoaderInteractiveCard2 from '../components/Cards/Loading/InteractiveCards/Loader-InteractiveCard2.vue';

export default {
    data(){
        return{
            normal: false,
            detailed: false,
            interactive: false,
        }
    },
    components: {
      BasicCard,
      LoaderBasicCard,
      BasicCard1,
      LoaderBasicCard1,
      BasicCard2,
      LoaderBasicCard2,
      DetailedCard,
      LoaderDetailedCard,
      DetailedCard1,
      LoaderDetailedCard1,
      DetailedCard2,
      LoaderDetailedCard2,
      InteractiveCard,
      LoaderInteractiveCard,
      InteractiveCard1,
      LoaderInteractiveCard1,
      InteractiveCard2,
      LoaderInteractiveCard2,
    },
    methods: {
    toggleContent(Type) {
      this[Type] = !this[Type];
    },
    buttonText(Type) {
      return this[Type] ? 'Hide Code' : 'Show Code';
    }
  }
};
</script>