
<template>

    <div class = "bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">

        <div class="flex flex-col justify-center items-center rounded-xl">
    <!-- Input Section -->
    <div class="w-[80%]">
        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Inputs </h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">The input tag in HTML facilitates user input in web forms, enabling the submission of data such as text, numbers, or options for processing or display.</p>
    </div>

    <!-- Default Section -->
    <div class="w-[80%]">
        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Default </h1>
        <p class="font-poppins mt-2 text-[15px]">Add an element input facilitated with the component <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">kkp-input</span> </p>
    </div>

    <!-- Default Input -->
    <div class="w-[80%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
        <kkp_input />
    </div>

    <!-- Label Section -->
    <div class="w-[80%]">
        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Label </h1>
        <p class="font-poppins mt-2 text-[15px]">Add an element input facilitated with the component <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">label</span> </p>
    </div>

    <!-- Labeled Input -->
    <div class="w-[80%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
        <kkp_input label="Full Name"/>
    </div>

    <!-- Placeholder Section -->
    <div class="w-[80%]">
        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Placeholder </h1>
        <p class="font-poppins mt-2 text-[15px]">Add a placeholder to the input with the property <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">placeholder</span> </p>
    </div>

    <!-- Placeholder Input -->
    <div class="w-[80%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
        <kkp_input placeholder="Russel Custodio"/>
    </div>


    <div class="w-[80%]">
        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Border </h1>
        <p class="font-poppins mt-2 text-[15px]">Add a placeholder to the input with the property <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">borderr</span> </p>
    </div>

    <!-- Placeholder Input -->
    <div class="w-[80%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
        <kkp_input placeholder="Russel Custodio" borderr primary bordercolor="#F2789F"/>
    </div>


</div>




<div class="flex flex-col justify-center items-center ">
    <!-- Color Section -->
    <div class="w-[80%]">
        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Color</h1>
        <p class="font-poppins mt-2 text-[15px]">Change the color of the component and add a border below with the <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">color</span> property</p>
    </div>

    <!-- Color Input -->
    <div class="w-[80%] h-[25vh] bg-white flex items-center justify-center rounded-2xl m-5 p-10">
        <div class="bg-transparent grid grid-flow-row-dense grid-cols-4 grid-rows-2 gap-5">
            <kkp_input placeholder="Primary" primary />
            <kkp_input placeholder="Warning" warning/>
            <kkp_input placeholder="Danger" danger/>                    
            <kkp_input placeholder="Success" success />
            <kkp_input placeholder="Dark" dark/>
            <kkp_input placeholder="HEX" borderBottomColor="#cc3300"/>
        </div>
    </div>
</div>

<div class="flex flex-col justify-center items-center ">
    <!-- Message Section -->
    <div class="w-[80%]">
        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Message</h1>
        <p class="font-poppins mt-2 text-[15px]">BULSHIT</p>
    </div>

    <!-- Message Inputs -->
    <div class="w-[80%] h-[27vh] bg-white flex flex-col items-center justify-center rounded-2xl m-5 p-10">
        <div class="bg-transparent grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-8">
            <kkp_input placeholder="Kakampink@gmail.com" messageColor="#339900" message="Email Valid"/> 
            <kkp_input placeholder="Warn" messageColor="#ff0000" message="Required"/> 
            <kkp_input type="password" placeholder="••••••••••" messageColor="#FFCC00" message="Insecure password" /> 
        </div>

        <div class="bg-transparent text-[15px] w-[30%]">
            <p class="bg-transparent font-poppins mt-3 ml-1">Example Validation</p>
            <kkp_input v-model="value4" :messageColor="validEmail ? '#339900' : '#ff0000'"></kkp_input>
            <div class="text-[#339900] bg-transparent font-poppins font-bold ml-2 success" v-if="validEmail">
                Email Valid
            </div>
            <div class="text-[#ff0000] bg-transparent font-poppins font-bold ml-2 danger" v-else-if="value4 !== ''">
                Email Invalid
            </div>
        </div>
    </div>
</div>

<div class="flex flex-col justify-center items-center ">
    <!-- Input Types Section -->
    <div class="w-[80%]">
        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3 hover:ml-[30px]">Input Types</h1>
        <p class="font-poppins mt-2 text-[15px]">Change the type of input with the type property as a native HTML input, the default value is text</p>
    </div>

    <!-- Input Types Inputs -->
    <div class="w-[80%] h-[30vh] bg-white flex flex-col items-center justify-center rounded-2xl m-5 p-10">
        <div class="bg-transparent grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-5 ">
            <div v-for="(item, index) in types" :key="index" class="bg-transparent text-[15px]">
                <p class="bg-transparent font-poppins mt-1 ml-1">{{ item }}</p>
                <kkp_input :type="item" />
            </div>
        </div>
    </div>
</div>

<div class="flex flex-col justify-center items-center ">
    <!-- Shadow Section -->
    <div class="w-[80%]">
        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3 hover:ml-[30px]">Shadow</h1>
        <p class="font-poppins mt-2 text-[15px]">Change everything is style of the component with the shadow property, the property is a Boolean, so you can add it without any value.</p>
    </div>

    <!-- Shadow Inputs -->
    <div class="w-[80%] h-[30vh] bg-white flex flex-col items-center justify-center rounded-2xl m-5 p-10">
        <div class="bg-transparent grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-5 ">
            <div v-for="(item, index) in types" :key="index" class="bg-transparent text-[15px]">
                <p class="bg-transparent font-poppins mt-1 ml-1">{{ item }}</p>
                <kkp_input :type="item" shadow/>
            </div>
        </div>
    </div>
</div>

    
    </div>
    
</template>

<script>

import kkp_input from '../components/kkp-input.vue'
export default {
  components: {
    kkp_input
  },
  data() {
    return {
      value4: '',
      types: ['Text', 'Password', 'Number', 'Time', 'Date'],
      shadow: true
    }
  },
  computed: {
        validEmail() {
        
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value4) 
        },
        
      }
}
</script>
