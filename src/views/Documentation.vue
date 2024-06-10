<template>
<div class = "bg-pink-shade-one">
    <div class = "absolute flex flex-row w-full bg-pink-shade-one ">
        <div class = "w-[20%] h-[85vh] flex flex-col pl-7font-poppins bg-transparent">
            <!-- <div class = "mt-5 pb-10 bg-transparent">
                <input class = "bg-white rounded-md p-1 hover:border-pink-shade-four border-2"  type="text" placeholder="Search.."> 
            </div> -->

            <div class="overflow-scroll overflow-x-hidden h-[100vh] mt-1 bg-pink-shade-one p-4 bg-transparent">
                <ul class="font-poppins flex flex-col justify-center font-bold p-2"> Getting Started
                  <router-link to="/documentation/introduction" @click="handleClick(item)" class="p-2  hover:bg-pink-shade-two font-semibold cursor-pointer font-quicksand border-b border-gray-300 rounded-xs" >Introduction </router-link>
                </ul>
  
  <ul class="font-poppins flex flex-col justify-center font-bold h-screen p-2">
    Components
    <li
      v-for="(item, index) in components"
      :key="index"
      @click="handleClick(item)"
      :class="{ 'bg-pink-shade-four text-white': activeItem === item }"
      class="p-2 hover:bg-pink-shade-two  font-semibold cursor-pointer font-quicksand border-b border-gray-300 rounded-xs"
    >
      <span class="bg-transparent">{{ item.name }}</span>
    </li>
  </ul>
            </div>
        </div>
            <div class = " block w-[100%]  bg-pink-shade-one h-[85vh] relative ">
              <router-view v-slot="{ Component, route }">
                <transition :name="route.meta.transition || 'fade'">
                  <component :is="Component" />
                </transition>
              </router-view>
            </div>    
        
    </div>
</div>

</template>

<script>
import Headerr from '../components/Header/Header.vue'
export default {
    components: {
        Headerr,
    },
    data(){
        return{
            components:[
                {name: 'Alert', id:'/documentation/alert'},
                {name: 'Avatar', id:'/documentation/avatar'},
                {name: 'Bottom Sheet', id:'/documentation/bottomsheet'},
                {name: 'Button', id:'/documentation/button'},
                {name: 'Card', id:'/documentation/cards'},
                {name: 'Card-Loader', id:'/documentation/card-loader'},
                {name: 'Checkbox', id:'/documentation/checkbox'},
                {name: 'Dialog', id:'/documentation/dialogs'},
                {name: 'Dropdown', id:'/documentation/dropdown'},
                { name: 'Footer', id:'/documentation/footer' },
                {name: 'Hover', id:'/documentation/hover'},
                {name: 'Image', id:'/documentation/images'},
                {name: 'Input', id:'/documentation/inputs'},
                {name: 'Popup', id:'/documentation/popups'},
                {name: 'Sheet', id:'/documentation/sheet'},
                {name: 'Text Area', id:'/documentation/text-area'},
            ]
        }
    },
    methods: {
    handleClick(item) {
      this.setActive(item);
      this.$router.push({ path: item.id });
    },
    setActive(item) {
      this.activeItem = item;
    },
  },
}
</script>