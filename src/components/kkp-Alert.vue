<template>
    <div class = "bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center rounded-xl">
        <div class = "w-[80%]">

            <!-- Component Header -->
            <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Component Title</h1>
            <p class="font-poppins mt-5 mb-5 text-[18px]">Component Description</p>

            <!-- Component sub -->
                <div>
                    <div class="w-[80%]">
                    <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Sub-Container  </h1>
                    <p class="font-poppins mt-2 text-[15px]"> Sub-Container Description </p>
                </div>
        
                <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl py-5">
                    <div :class="AlertBG" class="space-y-2 p-4 rounded-lg w-80">
                        <div :class="AlertBG" class=" flex-col space-x-2">
                            <div :class="AlertBG" class=" flex space-x-2">
                                <img :class="AlertBG" class=" h-6 w-6" src="/src/assets/alert/information-button.png" alt="">
                                <h2 :class="AlertBG" class=" font-semibold text-lg">Alert</h2>
                            </div>
                            <div :class="AlertBG" class=" flex-1 text-left">
                                <p :class="AlertBG" class="bg-blue-100">This is an Alert, ceated by our team - KaKamPink.</p>
                            </div>
                        </div>
                        <div :class="AlertBG" class=" grid grid-cols-3 grid-rows-1">
                            <span :class="AlertBG"></span>
                            <span :class="AlertBG"></span>
                            <button class=" bg-gray-600 py-1 rounded-md text-white">close</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    </div>
</div>
</template>

<script>

import { computed } from "vue";
import { cva } from "class-variance-authority";

export default {
  name: "KkpAlert",
  setup() {
    const intent = "info";

    const AlertBG = computed(() => {
      return cva("", {
        variants: {
          intent: {
            info: "bg-blue-100"
          }
        }
      })({
        intent: intent
      });
    });

    return {
      AlertBG
    };
  }
}
</script>