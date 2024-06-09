<template>
    <div class="bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
      <div class="flex flex-col justify-center items-center rounded-xl">
        <div class="w-[80%]">
  
          <!-- Component Header -->
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Alert</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">
            The Alert component is a versatile and reusable UI element designed to display important messages or notifications to users.
            This component supports multiple types of alerts, including success, danger, warning, and informational messages, ensuring that it can be used in a variety of scenarios.
          </p>
  
          <!-- Component sub -->
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Default</h1>
              <p class="font-poppins mt-2 text-[15px]">This is KKP's default alert style.</p>
            </div>
  
            <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl py-5 mt-5">
              <KkpAlert title="Title">
                This is KKP Alert, an alert component created by KKP.
              </KkpAlert>
            </div>
          </div>

          <div class="w-[80%] my-10">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Intent Variation</h1>
            <p class="font-poppins mt-2 text-[15px]"> Use <span class="text-pink-shade-four font-semibold">intent</span> prop to use alert in various cases.</p>
          </div>

          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Info</h1>
            </div>
  
            <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl py-5 mt-5">
              <KkpAlert intent="info" title="Title">
                This is KKP's <span class="text-pink-shade-four font-bold bg-transparent">info</span> alert style.
              </KkpAlert>
            </div>
          </div>

          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Success</h1>
            </div>
  
            <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl py-5 mt-5">
              <KkpAlert intent="success" title="Title">
                This is KKP's <span class="text-pink-shade-four font-bold bg-transparent">success</span> alert style.
              </KkpAlert>
            </div>
          </div>

          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Warning</h1>
            </div>
  
            <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl py-5 mt-5">
              <KkpAlert intent="warning" title="Title">
                This is KKP's <span class="text-pink-shade-four font-bold bg-transparent">warning</span> alert style.
              </KkpAlert>
            </div>
          </div>

          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Danger</h1>
            </div>
  
            <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl py-5 mt-5">
              <KkpAlert intent="danger" title="Title">
                This is KKP's <span class="text-pink-shade-four font-bold bg-transparent">danger</span> alert style.
              </KkpAlert>
            </div>
          </div>

          <div>
            <div class="w-[80%] mt-10">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Dismissable</h1>
              <p class="font-poppins mt-2 text-[15px]">This prop allows the alert to be dismissed by the user.</p>
            </div>
  
            <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl py-5 mt-5">
              <KkpAlert title="Title" dismissable>
                Click the close button to dismiss alert.
              </KkpAlert>
            </div>
          </div>

          <div>
            <div class="w-[80%] mt-10">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Auto Dismiss</h1>
              <p class="font-poppins mt-2 text-[15px]">This prop allows the alert to automatically disappear after a specific time. <br>
                <br><span class="text-pink-shade-four font-semibold bg-pink-shade-two">:autoDismiss = "time in milisecond"</span> <br>
            <br> *Reload the page if alert is not visible*</p>
            </div>
  
            <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl py-5 mt-5">
              <KkpAlert title="Title" :autoDismiss="3000">
                This alert is set to dismiss in 3000 ms.
              </KkpAlert>
            </div>
          </div>
  
        </div>
      </div>
    </div>
</template>
  
<script>
  import KkpAlert from '../components/kkp-Alert.vue';
  
  export default {
    components: {
      KkpAlert
    }
};
</script>