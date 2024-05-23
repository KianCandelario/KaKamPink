<script setup>
import {computed} from "vue";

    const props = defineProps({
        // Content
        value: String,
        // Enable/disable loading state 
        loading: Boolean,
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
            validator: val => ["primary", "secondary", "danger", "text"].includes(val),
        },
    });

    const buttonClass = computed(()=> {
        const sizeClasses ={
            sm: "text-sm px-2.5 py-1 rounded ",
            md: "text-base px-4 py-2 rounded ",
            lg: "text-lg px-5 py-2.5 rounded ",
        };
        const variantClasses = {
            primary: {
            default: "bg-[#F06292] text-white hover:bg-[#E04D78]",
            outline: "border border-[#F06292] text-[#F06292] hover:bg-transparent",
            },
            secondary: {
            default: "bg-[#F8C2CA] text-[#333] hover:bg-[#E3A7B3]",
            outline: "border border-[#F8C2CA] text-[#F8C2CA] hover:bg-transparent",
            },
            danger: {
            default: "bg-[#F472B6] text-white hover:bg-[#D95B9B]",
            outline: "border border-[#F472B6] text-[#F472B6] hover:bg-transparent",
            },
            text: {
            default: "text-[#F06292] hover:text-[#E04D78]",
            outline: "not-applicable", // Text buttons don't use outline styles
            },
        };
    return `${sizeClasses[props.size]}  ${props.outline ? variantClasses[props.intent].outline : variantClasses[props.intent].default}`;
    });
</script>


<template>
    <button 
    :disabled="props.disabled"
    :class = "buttonClass"
    >
    {{ props.value }}
    </button>
</template>