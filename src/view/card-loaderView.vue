<template>
    <div class = "bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
        <div class="flex flex-col justify-center items-center rounded-xl">
            <div class = "w-[80%]">
    
                <!-- Component Header -->
                <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Card Loader</h1>
                <p class="font-poppins mt-5 mb-5 text-[18px]">A Card Laoder is a placeholder used to indicate to the user that Datas are loading.</p>
    
                <!-- Component sub -->
                <div>
                    <div class="w-[80%] my-10">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Match your Card </h1>
                        <p class="font-poppins mt-2 text-[15px]"> KKP's <span class="text-pink-shade-four font-semibold">Card Loader</span> component offers different variants to match any <span class="text-pink-shade-four font-semibold">KKP Card component</span> 
                            KKP Card component that you want to use. <br>
                        <br> *Reload to see Card Loaders*</p>
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
                </div>
            
    
            </div>
        </div>
    </div>
</template>

<script>
import BasicCard from '../components/BasicCards/BasicCard.vue';
import BasicCard1 from '../components/BasicCards/BasicCard1.vue';
import BasicCard2 from '../components/BasicCards/BasicCard2.vue';
import LoaderBasicCard from '../components/BasicCards/Loader-BasicCard.vue';
import LoaderBasicCard1 from '../components/BasicCards/Loader-BasicCard1.vue';
import LoaderBasicCard2 from '../components/BasicCards/Loader-BasicCard2.vue';
import DetailedCard from '../components/DetailedCards/DetailedCard.vue';
import DetailedCard1 from '../components/DetailedCards/DetailedCard1.vue';
import DetailedCard2 from '../components/DetailedCards/DetailedCard2.vue';
import LoaderDetailedCard from '../components/DetailedCards/Loader-DetailedCard.vue';
import LoaderDetailedCard1 from '../components/DetailedCards/Loader-DetailedCard1.vue';
import LoaderDetailedCard2 from '../components/DetailedCards/Loader-DetailedCard2.vue';
import InteractiveCard from '../components/InteractiveCards/InteractiveCard.vue';
import InteractiveCard1 from '../components/InteractiveCards/InteractiveCard1.vue';
import InteractiveCard2 from '../components/InteractiveCards/InteractiveCard2.vue';
import LoaderInteractiveCard from '../components/InteractiveCards/Loader-InteractiveCard.vue';
import LoaderInteractiveCard1 from '../components/InteractiveCards/Loader-InteractiveCard1.vue';
import LoaderInteractiveCard2 from '../components/InteractiveCards/Loader-InteractiveCard2.vue';

export default {
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
    }
};
</script>