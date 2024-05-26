<template>
<div class = "bg-transparent">
    <div class = "absolute flex flex-row w-full bg-transparent ">
        <div class = "w-[25%] h-[85vh] flex flex-col pl-7font-poppins bg-transparent">
            <!-- <div class = "mt-5 pb-10 bg-transparent">
                <input class = "bg-white rounded-md p-1 hover:border-pink-shade-four border-2"  type="text" placeholder="Search.."> 
            </div> -->

            <div class="overflow-scroll overflow-x-hidden h-[100vh] mt-1 bg-pink-shade-four ">
                <ul class="font-poppins flex flex-col justify-center font-bold p-2"> Getting Started
                    <li class="p-2 hover:underline hover:bg-pink-shade-four font-semibold cursor-pointer font-quicksand border-black border-2" >Introduction</li>
                    <li class = "p-2 hover:underline hover:bg-pink-shade-four font-semibold cursor-pointer font-quicksand border-black border-2 ">Quick Start</li>
                </ul>

                <ul class="font-poppins flex flex-col justify-center font-bold h-[100vh] p-2">
    Components
    <li class="p-2 hover:bg-pink-shade-four hover:text-white font-semibold cursor-pointer font-quicksand border-black border-2"
        v-for="(item, index) in components"
        :key="index"
        @click="handleClick(item)">
        <span class="bg-transparent">
            {{ item.name }}
        </span>
    </li>
</ul>
            </div>

            

        </div>

            <div class = " block w-[100%]  bg-transparent h-[85vh] relative ">
                    <router-view/>
            </div>    
        
    </div>
</div>

</template>

<script>
import Headerr from '../components/Header.vue'
export default {
    components: {
        Headerr,
    },
    data(){
        return{
            components:[
                {name: 'Alert', id:'/documentation/alert'},
                {name: 'Avatar', id:'/documentation/avatar'},
                {name: 'Button', id:'/documentation/button'},
                {name: 'Card', id:'/documentation/card'},
                {name: 'Checkbox', id:'/documentation/checkbox'},
                {name: 'Dialogs', id:'/documentation/dialogs'},
                {name: 'Dropdown', id:'/documentation/dropdown'},
                { name: 'Footer', id:'/documentation/footer' },
                {name: 'Hover', id:'/documentation/hover'},
                {name: 'Images', id:'/documentation/images'},
                {name: 'Input', id:'/documentation/inputs'},
                { name: 'List', id:'/documentation/header'},
                {name: 'Loading', id:'/documentation/loading'},
                {name: 'Popups', id:'/documentation/popups'},
                {name: 'Sheet', id:'/documentation/sheet'},
                {name: 'Tooltip', id:'/documentation/tooltip'},
            ]
        }
    },
    methods: {
        handleClick(item) {
            this.setActive(item);
            this.$router.push({ path: item.id }); 
        },
        setActive(item) {
            console.log('Active item set:', item);
        }
    },
}
</script>