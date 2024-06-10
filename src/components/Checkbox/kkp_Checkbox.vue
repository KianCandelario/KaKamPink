<template>
  <label v-if = "!round && !squared" :class="['flex items-center cursor-pointer bg-transparent font-poppins', className]">
                    <input  
                    type="checkbox" 
                    :checked="modelValue" 
                    @change="handleChange" 
                    class="form-checkbox h-6 w-6 rounded-md border-2 border-pink-500 text-pink-500 focus:ring focus:ring-pink-200 focus:ring-opacity-50 bg-transparent"
                    />
                    <span class="ml-3 text-pink-600 font-medium bg-transparent">{{ displayText }}</span>
                </label>

  <label v-if = "round && !squared" :class="['flex items-center cursor-pointer bg-transparent font-poppins', className]">
                    <input 
                    type="checkbox" 
                    :checked="modelValue" 
                    @change="handleChange" 
                    class="hidden "
                    />
                    <div class="relative w-12 h-12 border-2 border-pink-500 rounded-full bg-transparent">
                        <div v-if="modelValue" class="absolute inset-0 flex items-center justify-center bg-transparent">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-pink-500 bg-transparent" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                            </svg>
                        </div>
                    </div>
                    <span class="ml-3 text-pink-600 font-medium bg-transparent">{{ displayText }}</span>
                </label>

    <label v-if = "!round && squared" :class="['flex items-center cursor-pointer bg-transparent font-poppins' , className]">
                    <input 
                    type="checkbox" 
                    :checked="modelValue" 
                    @change="handleChange" 
                    class="hidden"
                    />
                    <div class="relative w-12 h-12 border-2 border-pink-500 rounded-md flex items-center justify-center bg-transparent">
                        <div v-if="modelValue" class="absolute inset-0 bg-pink-500 rounded-xs"></div>
                    </div>
                    <span class="ml-3 text-pink-600 font-medium bg-transparent">{{ displayText }}</span>
                </label>
</template>

<script>
export default {
  name: 'kkp_Checkbox',
  
  props: {
    round: {
      type: Boolean
    },
    squared:{
      type: Boolean
    },
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
/* Custom styles to enhance the checkbox */
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