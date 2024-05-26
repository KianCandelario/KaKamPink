<template>
    <div class="flex flex-col bg-transparent">
      <label :style="{ color: labelColor }" class="font-poppins ml-1 bg-transparent">{{ label }}</label>
      <input 
        :type="type" 
        :placeholder=" isFocused ? '' : placeholder"
        :value="modelValue"
        :disabled = "disabled"
        
        :style="inputStyles"
        class="font-poppins bg-white rounded-lg p-2 outline-none border-2   border-b-4"
        @input="$emit('update:modelValue', $event.target.value)"
        @focus = "handleFocus"
        @blur="handleBlur"
      >

      <slot name  = "message"> </slot>
      <label :style="{ color: messageColor } " class="font-poppins font-bold ml-1 bg-transparent text-[15px]">{{ message }}</label>
    </div>
  </template>




















<script>
export default {
  props: {
    shadow: Boolean,
    dark: Boolean,
    disabled: Boolean,
    white: Boolean,
    warning: Boolean, 
    danger: Boolean, 
    bordercolor: String,
    success: Boolean,
    primary: Boolean,
    borderr: Boolean,
    type: {
      type: String,
      default: 'text'
    },
    modelValue: String,
    value: String,
    placeholder: {
      type: String
    },
    Width: {
      type: Number,
      default: 100
    },
    label: String,
    message: String,
    messageColor: String,
    color: {
      type: String,
      default: '#F2789F',
      validator(value) {
        return /^#([0-9A-F]{3}){1,2}$/i.test(value);
      }
    },
    labelColor: {
      type: String,
      default: '#000000',
      validator(value) {
        return /^#([0-9A-F]{3}){1,2}$/i.test(value);
      }
    },
    borderBottomColor: {
      type: String,
      validator(value) {
        return /^#([0-9A-F]{3}){1,2}$/i.test(value);
      },
    
    },
    backgroundColor: {
      type: String,
      validator(value) {
        return /^#([0-9A-F]{3}){1,2}$/i.test(value);
      }
    }
  },
  computed: {
  inputStyles() {
    let borderColor;
    let computedBorderBottomColor;

    if (this.borderr) {
      borderColor = this.primary ? '#F2789F' :
                    this.dark ? '#000000' :
                    this.white ? '#FFFFFF' :
                    this.warning ? '#FFCC00' :
                    this.danger ? '#cc3300' :
                    this.success ? '#339900' :
                    this.borderBottomColor;

      computedBorderBottomColor = borderColor;
    } else {
      computedBorderBottomColor = this.primary ? '#F2789F' :
                                  this.dark ? '#000000' :
                                  this.white ? '#FFFFFF' :
                                  this.warning ? '#FFCC00' :
                                  this.danger ? '#cc3300' :
                                  this.success ? '#339900' :
                                  this.borderBottomColor;
    }

    return {
      backgroundColor: this.backgroundColor,
      borderColor: borderColor,
      borderBottomColor: computedBorderBottomColor,
      color: this.textColor,
      width: this.Width + '%',
      boxShadow: this.shadow ? '5px 5px 5px rgba(242, 120, 159, 0.3)' : 'none',
    };
  },
},

  data() {
    return {
      isFocused: false,
      vmodel: '',
      boxShadow: true,

    };
  },
  methods: {
    handleFocus(){
        this.isFocused = true
    },
    handleBlur(){
        this.isFocused = false
    }
  }
};


</script>
