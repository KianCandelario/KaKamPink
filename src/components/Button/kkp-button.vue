<script setup>
import {computed} from "vue";

    const props = defineProps({
        // Enable/disable the button
        disabled: Boolean,
        // Enable outline only
        outline: Boolean,
        // 

        // Button size
        size:{
            type: String,
            default: "md",
            validator: (val) => ["sm", "md", "lg"].includes(val), 
        },
        // Button intent
        intent: {
            type: String,
            default: "primary",
            validator: val => ["primary", "secondary", "warning", "success", "danger", "text", "link"].includes(val),
        },
        // Button shape
        shape: {
            type: String,
            default: "rounded",
            validator: val => ["rounded", "pill", "squared", "block"].includes(val),
        },
    });
    // Button Class declaration
    const buttonClass = computed(()=> {
        const sizeClasses ={
            sm: "text-sm px-1.5 py-0.5",
            md: "text-base px-2.5 py-1",
            lg: "text-lg px-4 py-2",
        };

        const variantClasses = {
            primary: {
            default: "bg-[#F2789F] font-normal text-white hover:bg-[#E04D78] hover:shadow-red-300 hover:shadow-md ",
            outline: "border border-[#F2789F] font-normal text-[#F2789F] hover:bg-[#F2789F] hover:text-white",
            disabled: "bg-[#FFB8DF] font-normal pointer-events-none", 

            },
            secondary: {
            default: "bg-red-200 font-normal  text-[#333] hover:bg-red-300 hover:shadow-red-200 hover:shadow-md" ,
            outline: "border border-[#F8C2CA] font-normal  text-[#F8C2CA] hover:bg-[#F8C2CA] hover:text-[#333]",
            disabled: "bg-red-50 font-normal pointer-events-none", 
            },
            warning: {
            default: "bg-[#FFCC00] font-normal  text-[#333] hover:bg-yellow-500 hover:shadow-yellow-200 hover:shadow-md",
            outline: "border border-[#FFCC00] font-normal  text-[#FFCC00] hover:bg-[#FFCC00] hover:text-[#333]",
            disabled: "bg-yellow-200 font-normal pointer-events-none", 
            },
            success: {
            default: "bg-[#339900] text-white font-normal  hover:bg-green-700 hover:shadow-green-200 hover:shadow-md",
            outline: "border border-[#339900] text-[#339900] font-normal  hover:bg-[#339900] hover:text-white",
            disabled: "bg-green-400 font-normal pointer-events-none", 
            },
            danger: {
            default: "bg-[#CC3300] text-white font-normal  hover:bg-red-700 hover:shadow-red-300 hover:shadow-md",
            outline: "border border-[#CC3300] text-[#CC3300] font-normal  hover:bg-[#CC3300] hover:text-white",
            disabled: "bg-red-300 font-normal pointer-events-none", 
            },
            text: {
            default: "text-[#333] hover:text-[#333] font-normal ",
            outline: "not-applicable",
            disabled: "font-normal pointer-events-none", 
            },
            link: {
            default: "text-blue-700 font-normal hover:text-blue-800 hover:underline",
            outline: "not-applicable",
            disabled: "font-normal pointer-events-none", 
            },
        };
        let shapeClasses;
        switch (props.shape){
            case "rounded":
                shapeClasses = "";
                break;
            case "pill":
                shapeClasses = "rounded-full";
                break;
            case "squared":
                shapeClasses = "rounded-none";
                break;
            case "block":
                shapeClasses = "w-full";
                break;
        };
        return `${sizeClasses[props.size]} ${
  props.outline && props.disabled
    ? variantClasses[props.intent].outlineDisabled
    : props.outline
    ? variantClasses[props.intent].outline
    : props.disabled
    ? variantClasses[props.intent].disabled
    : variantClasses[props.intent].default
} ${shapeClasses}`;
    });
</script>

<template>
    <button 
    :class = "buttonClass"
    class = "font-poppins"
    >
    <slot/>
    </button>
</template>
