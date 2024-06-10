<template>
<div class = "bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center">
        <div class = "w-[80%]">

            <!-- Component Header -->
            <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">TEXT AREA</h1>
            <p class="font-poppins mt-5 mb-5 text-[18px]">The Textarea component is a user interface element designed to allow users to input and edit multiple lines of text within a form or interface. It provides a larger input area compared to a standard text input field, accommodating longer text entries such as comments, descriptions, or messages.</p>

            <!-- Component sub -->
                <div>
                    <div class="w-[80%]">
                    <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Default Textarea </h1>
                    <p class="font-poppins mt-2 text-[15px]"> A simple and versatile multiline text input field, the Default Textarea Component allows users to enter and edit long-form text. Key features include resizable dimensions, optional placeholder text, and automatic scrollbars for overflow content. Ideal for capturing comments, messages, or descriptions within forms and interfaces. </p>
                </div>
        
                <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
                    <kkp_textareaDefault/>
                </div>

                
<!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="defaults" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div&gt;
        &lt;kkp_textareaDefault/&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('defaults')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins">
                                {{ buttonText ('defaults')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

                <div>
                    <div class="w-[80%]">
                    <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Textarea with Label </h1>
                    <p class="font-poppins mt-2 text-[15px]"> A form element that combines a multiline text input area with an associated label, providing a clear and accessible way for users to input and understand the required text information. The label ensures the textarea is properly identified, enhancing usability and accessibility. </p>
                    </div>
                </div>
        
                <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
                    <kkp_textareaWithLabel/>
                </div>

                <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="label" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div&gt;
        &lt;kkp_textareawithLabel/&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('label')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins">
                                {{ buttonText ('label')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

                <div>
                    <div class="w-[80%]">
                    <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Textarea with Counter </h1>
                    <p class="font-poppins mt-2 text-[15px]"> Allows users to input and edit multi-line text with real-time character count feedback. As users type, a counter displays the remaining characters. If the user exceeds the maximum character limit, the text color changes to red, providing a clear visual indication of the limit breach. </p>
                    </div>
                </div>
        
                <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
                    <kkp_textareaWithCounter/>
                </div>

                <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="counter" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div&gt;
        &lt;kkp_textareawithCounter/&gt;
    &lt;/div&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('counter')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins">
                                {{ buttonText ('counter')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
            </div>
        

        </div>
    </div>
</div>
</template>

<script>
import kkp_textareaDefault from '../components/Textarea/Default.vue';
import kkp_textareaWithLabel from '../components/Textarea/Label.vue';
import kkp_textareaWithCounter from '../components/Textarea/Count.vue';

export default {
  components: {
    kkp_textareaDefault,
    kkp_textareaWithLabel,
    kkp_textareaWithCounter
  },data() {
    return {
        defaults: false,
        label: false,
        counter: false,
    };
  },
  methods: {
    toggleContent(Type) {
      this[Type] = !this[Type];
    },
    buttonText(Type) {
      return this[Type] ? 'Hide Code' : 'Show Code';
    }
    },
    
}
</script>
