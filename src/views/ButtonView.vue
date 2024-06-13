
<script>
import kkp_button from '../components/Button/kkp-button.vue'
export default{
    components: {
        kkp_button,
    },
    data() {
    return {
        size: false,
        filled: false,
        outline: false,
        text: false,
        link:false,
        pill: false,
        squared: false,
        block: false,
        disabled: false
    };
  },
  methods: {
    toggleContent(Type) {
      this[Type] = !this[Type];
    },
    buttonText(Type) {
      return this[Type] ? 'Hide Code' : 'Show Code';
    }
  }
}
</script>


<template>
    <div class = " bg-pink-shade-two w-full  overflow-scroll overflow-x-hidden h-[100%] z-0" >
        <div class="flex flex-col justify-center items-center">
            <div class = "w-[80%]">
    
                <!-- Component Header -->
                <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">BUTTON</h1>
                <p class="font-poppins mt-5 mb-5 text-[18px]">The button component enhances user interaction, serving as clickable elements to trigger actions or navigate within a website.<br/><br/> Use <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 rounded-md">kkp_button</span> to create a button component.</p>
    
                <!-- Component sub -->
                    <div>

                        <!--Sizing-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Size  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Need buttons with different sizes? Choose between     
                        <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1  rounded-md">sm</span>,
                        <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1  rounded-md">md</span>, and 
                        <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 rounded-md">lg</span> via the
                        <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 rounded-md">size</span> prop   </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex  flex-wrap px-3 bg-transparent">
                                <kkp_button intent="primary" size="sm" >Primary</kkp_button>
                            </div>
                            <div class ="flex flex-wrap px-3 bg-transparent">
                                <kkp_button intent="primary" size="md" >Primary</kkp_button>
                            </div>
                            <div class ="flex flex-wrap px-3 bg-transparent">
                                <kkp_button intent="primary" size="lg" >Primary</kkp_button>
                            </div>
                        </div>

    <!-- code snippet -->
        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="size" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div class = "flex flex=wrap px-3"&gt;
        &lt;kkp_button intent="primary" size="sm"&gt; Primary &lt;/kkp_button &gt;
    &lt;div/&gt;

    &lt;div class = "flex flex=wrap px-3"&gt;
        &lt;kkp_button intent="primary" size="md"&gt; Primary &lt;/kkp_button &gt;
    &lt;div/&gt;

    &lt;div class = "flex flex=wrap px-3"&gt;
        &lt;kkp_button intent="primary" size="lg"&gt; Primary &lt;/kkp_button &gt;
    &lt;div/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('size')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('size') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of code snippet -->

        <br/>
        <!--Intents-->
        <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Intent variation </h1>
            <p class="font-poppins mt-2 text-[15px]"> Use the 
            <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 rounded-md">intent</span> 
                prop to generate various colored buttons for different situation.</p>
        </div>
        <br/>

        <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Filled variants  </h1>
            <p class="font-poppins mt-2 text-[15px]"> Change the value of intent to either  
                <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 rounded-md">primary</span>, 
                <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 rounded-md">secondary</span>,
                <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 rounded-md">warning</span>,
                <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1  rounded-md">success</span>, or
                <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 rounded-md">danger</span> to create a solid-colored button
            </p>
        </div>

<!--Sample container-->
        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <div class ="flex gap-5 flex-wrap bg-transparent ">
                <kkp_button intent="primary" >Primary</kkp_button>
                <kkp_button intent="secondary">Secondary</kkp_button>
                <kkp_button intent="warning" >Warning</kkp_button>
                <kkp_button intent="success">Success</kkp_button>
                <kkp_button intent="danger">Danger</kkp_button>
            </div>
        </div>

<!-- code snippet -->
        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="filled" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div class = "flex flex-wrap gap-5"&gt;
        &lt;kkp_button intent="primary"&gt; Primary &lt;/kkp_button &gt;
        &lt;kkp_button intent="secondary"&gt; Secondary &lt;/kkp_button &gt;
        &lt;kkp_button intent="warning"&gt; Warning &lt;/kkp_button &gt;
        &lt;kkp_button intent="success"&gt; Success &lt;/kkp_button &gt;
        &lt;kkp_button intent="danger"&gt; Danger &lt;/kkp_button &gt;
    &lt;div/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('filled')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('filled')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

                        <!--Outline-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Outline variant  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> In need of a button without much color? Toggle the <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">outline</span> prop to create one! </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 flex-wrap bg-transparent">
                                <kkp_button intent="primary" outline>Primary</kkp_button>
                                <kkp_button intent="secondary" outline>Secondary</kkp_button>
                                <kkp_button intent="warning" outline>Warning</kkp_button>
                                <kkp_button intent="success" outline>Success</kkp_button>
                                <kkp_button intent="danger" outline>Danger</kkp_button>
                            </div>
                        </div>

                        
        <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="outline" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div class = "flex flex-wrap gap-5"&gt;
        &lt;kkp_button intent="primary" outline&gt; Primary &lt;/kkp_button &gt;
        &lt;kkp_button intent="secondary" outline&gt; Secondary &lt;/kkp_button &gt;
        &lt;kkp_button intent="warning" outline&gt; Warning &lt;/kkp_button &gt;
        &lt;kkp_button intent="success" outline&gt; Success &lt;/kkp_button &gt;
        &lt;kkp_button intent="danger" outline&gt; Danger &lt;/kkp_button &gt;
    &lt;div/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('outline')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('outline') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
                        

                        <!--Text variant-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Text variant  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Disguise a button as a text using the intent <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">text</span>.  </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 flex-wrap bg-transparent">
                                <kkp_button intent="text">Text</kkp_button> 
                            </div>
                        </div>

                        
                                 <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="text" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div class = "flex flex-wrap gap-5"&gt;
        &lt;kkp_button intent="text"&gt;Text&lt;/kkp_button &gt;
    &lt;div/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('text')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('text') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

                        <!--link variant-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Link Variant  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Intent <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">link</span> will render a button that looks like a link but maintains the default padding and size of a button. </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 flex-wrap bg-transparent"> 
                                <a href = "https://google.com" class = "bg-transparent">
                                <kkp_button intent="link">Link</kkp_button>
                                </a>
                            </div>
                        </div>

                        
<!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="link" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div class = "flex flex-wrap gap-5"&gt;
        &lt;kkp_button intent="link"&gt; Link &lt;/kkp_button &gt;
    &lt;div/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('link')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('link') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

                        <br/>
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Shapes </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Change button shapes using the <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">shape</span> prop to fit your needs!  </p>
                        </div>
                        <br/>

                        <!--Pill Shape Variant-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Pill variant  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> You can have a button with a more rounded style by specifying <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">pill</span> via the shape prop.  </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 flex-wrap bg-transparent">
                                <kkp_button intent="primary" shape="pill">Primary</kkp_button>
                                <kkp_button intent="secondary" shape="pill">Secondary</kkp_button>
                                <kkp_button intent="warning" shape="pill">Warning</kkp_button>
                                <kkp_button intent="success" shape="pill">Success</kkp_button>
                                <kkp_button intent="danger" shape="pill">Danger</kkp_button>
                            </div>
                        </div>

                        
<!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="pill" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div class = "flex flex-wrap gap-5"&gt;
        &lt;kkp_button intent="primary" shape="pill"&gt; Primary &lt;/kkp_button &gt;
        &lt;kkp_button intent="secondary" shape="pill"&gt; Secondary &lt;/kkp_button &gt;
        &lt;kkp_button intent="warning" shape="pill"&gt; Warning &lt;/kkp_button &gt;
        &lt;kkp_button intent="success" shape="pill"&gt; Success &lt;/kkp_button &gt;
        &lt;kkp_button intent="danger" shape="pill"&gt; Danger &lt;/kkp_button &gt;
    &lt;div/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('pill')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('pill')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

                        <!--Squared variant-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Squared variant  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Fancy a button with a squared corner? Just set the shape prop to <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">squared</span>.</p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 flex-wrap bg-transparent">
                                <div class ="flex gap-5 flex-wrap bg-transparent">
                                <kkp_button intent="primary" shape="squared">Primary</kkp_button>
                                <kkp_button intent="secondary" shape="squared">Secondary</kkp_button>
                                <kkp_button intent="warning" shape="squared">Warning</kkp_button>
                                <kkp_button intent="success" shape="squared">Success</kkp_button>
                                <kkp_button intent="danger" shape="squared">Danger</kkp_button>
                            </div>
                            </div>
                        </div>

                        
    <!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="squared" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div class = "flex flex-wrap gap-5"&gt;
        &lt;kkp_button intent="primary" shape="squared"&gt; Primary &lt;/kkp_button &gt;
        &lt;kkp_button intent="secondary" shape="squared"&gt; Secondary &lt;/kkp_button &gt;
        &lt;kkp_button intent="warning" shape="squared"&gt; Warning &lt;/kkp_button &gt;
        &lt;kkp_button intent="success" shape="squared"&gt; Success &lt;/kkp_button &gt;
        &lt;kkp_button intent="danger" shape="squared"&gt; Danger &lt;/kkp_button &gt;
    &lt;div/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('squared')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('squared') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

                        <!--Block variant-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Block button  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Setthe value of the shape prop to <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">block</span>to have a button that fills the width of its parent.  </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 w-[80%] bg-transparent">
                                <div class ="flex gap-5 w-full bg-transparent">
                                <kkp_button intent="primary" shape="block">Primary</kkp_button>
                            </div>
                            </div>
                        </div>

                        
<!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="block" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div class = "flex w-full gap-5"&gt;
        &lt;kkp_button intent="primary" shape="block"&gt; Primary &lt;/kkp_button&gt;
    &lt;div/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('block')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('block') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>
        <!-- end of code snippet -->
        
                        <!--Disabled variant-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Disabled variant  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Disable a button's entire functionality by setting the <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">disabled</span>prop. </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 flex-wrap bg-transparent">
                                <div class ="flex gap-5 flex-wrap bg-transparent">
                                <kkp_button intent="primary" >Not Disabled</kkp_button>
                                <kkp_button intent="primary" disabled> Disabled</kkp_button>
                            </div>
                            </div>
                        </div>
                        
<!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="disabled" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;div class = "flex flex-wrap gap-5"&gt;
        &lt;kkp_button intent="primary"&gt; Not Disabled &lt;/kkp_button &gt;
        &lt;kkp_button intent="secondary" disabled &gt; Disabled &lt;/kkp_button &gt;
    &lt;div/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('disabled')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('disabled') }}
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
