<template>
    <div class="bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
      <div class="flex flex-col justify-center items-center rounded-xl">
        <div class="w-[80%]">
  
          <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">CHECKBOX</h1>
          <p class="font-poppins mt-5 mb-5 text-[18px]">A checkbox component lets users choose from a list of choices. It is frequently used in settings to toggle preferences, in forms to allow for multiple selections, in to-do lists to indicate completed activities, and in filters to apply various search criteria.</p>
  
          <div>
            <div class="w-[80%]">
              <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">CHECKBOX DESIGNS</h1>
              <p class="font-poppins mt-2 text-[15px]">There are different styles of checkbox</p>
            </div>
  
            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
                <label :class="['flex items-center cursor-pointer', className]">
                    <input 
                    type="checkbox" 
                    :checked="modelValue" 
                    @change="handleChange" 
                    class="form-checkbox h-6 w-6 rounded-md border-2 border-pink-500 text-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50"
                    />
                    <span class="ml-3 text-pink-600 font-medium">{{ displayText }}</span>
                </label>
            </div>
  

            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
                <label :class="['flex items-center cursor-pointer', className]">
                    <input 
                    type="checkbox" 
                    :checked="modelValue" 
                    @change="handleChange" 
                    class="hidden"
                    />
                    <div class="relative w-12 h-12 border-2 border-pink-500 rounded-full">
                        <div v-if="modelValue" class="absolute inset-0 flex items-center justify-center">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                        </div>
                    </div>
                    <span class="ml-3 text-pink-600 font-medium">{{ displayText }}</span>
                </label>
            </div>
  
        
            <div class="w-[100%] h-[40vh] bg-white flex items-center justify-center rounded-2xl m-5">
                <label :class="['flex items-center cursor-pointer', className]">
                    <input 
                    type="checkbox" 
                    :checked="modelValue" 
                    @change="handleChange" 
                    class="hidden"
                    />
                    <div class="relative w-12 h-12 border-2 border-pink-500 rounded-md flex items-center justify-center">
                        <div v-if="modelValue" class="absolute inset-0 bg-pink-500 rounded-md"></div>
                    </div>
                    <span class="ml-3 text-pink-600 font-medium">{{ displayText }}</span>
                </label>
            </div>
            
  
          </div>
  
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'MainComponent',
    props: {
      modelValue: {
        type: Boolean,
        default: false,
      },
      label: {
        type: String,
        default: '',
      },
      className: {
        type: String,
        default: '',
      },
    },
    computed: {
      displayText() {
        return this.modelValue ? 'CHECKED' : 'UNCHECK';
      }
    },
    methods: {
      handleChange(event) {
        this.$emit('update:modelValue', event.target.checked);
      }
    }
  };
  </script>
  
  <style scoped>
  .custom-checkbox {
    position: relative;
  }
  
  .custom-checkbox:checked::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%) rotate(45deg);
    width: 12px;
    height: 6px;
    border: solid white;
    border-width: 0 2px 2px 0;
  }
  </style>
  