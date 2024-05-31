
<script setup>
import kkp_button from './components/kkp-button.vue';
</script>

<template>
    <div class = "bg-pink-shade-two w-full p-3 overflow-scroll overflow-x-hidden h-[100%]">
        <div class="flex flex-col justify-center items-center rounded-xl">
            <div class = "w-[80%]">
    
                <!-- Component Header -->
                <h1 class="bg-transparent text-start text-[45px] font-poppins mt-5 text-pink-shade-four font-bold tracking-wider">Button</h1>
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
                            <div class ="flex  flex-wrap px-3">
                                <kkp_button intent="primary" size="sm" >Primary</kkp_button>
                            </div>
                            <div class ="flex flex-wrap px-3">
                                <kkp_button intent="primary" size="md" >Primary</kkp_button>
                            </div>
                            <div class ="flex flex-wrap px-3">
                                <kkp_button intent="primary" size="lg" >Primary</kkp_button>
                            </div>
                        </div>

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
                            <div class ="flex gap-5 flex-wrap">
                                <kkp_button intent="primary" >Primary</kkp_button>
                                <kkp_button intent="secondary">Secondary</kkp_button>
                                <kkp_button intent="warning" >Warning</kkp_button>
                                <kkp_button intent="success">Success</kkp_button>
                                <kkp_button intent="danger">Danger</kkp_button>
                            </div>
                        </div>

                        <!--Outline-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Outline variant  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> In need of a button without much color? Toggle the <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">outline</span> prop to create one! </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 flex-wrap">
                                <kkp_button intent="primary" outline>Primary</kkp_button>
                                <kkp_button intent="secondary" outline>Secondary</kkp_button>
                                <kkp_button intent="warning" outline>Warning</kkp_button>
                                <kkp_button intent="success" outline>Success</kkp_button>
                                <kkp_button intent="danger" outline>Danger</kkp_button>
                            </div>
                        </div>

                        <!--Text variant-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Text variant  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Disguise a button as a text using the intent <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">text</span>.  </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 flex-wrap">
                                <kkp_button intent="text">Text</kkp_button> 
                            </div>
                        </div>

                        <!--link variant-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Link Variant  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Intent <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">link</span> will render a button that looks like a link but maintains the default padding and size of a button. </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 flex-wrap"> 
                                <a href = "https://google.com">
                                <kkp_button intent="link">Link</kkp_button>
                                </a>
                            </div>
                        </div>

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
                            <div class ="flex gap-5 flex-wrap">
                                <kkp_button intent="primary" shape="pill">Primary</kkp_button>
                                <kkp_button intent="secondary" shape="pill">Secondary</kkp_button>
                                <kkp_button intent="warning" shape="pill">Warning</kkp_button>
                                <kkp_button intent="success" shape="pill">Success</kkp_button>
                                <kkp_button intent="danger" shape="pill">Danger</kkp_button>
                            </div>
                        </div>

                        <!--Squared variant-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Squared variant  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Fancy a button with a squared corner? Just set the shape prop to <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">squared</span>.</p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 flex-wrap">
                                <div class ="flex gap-5 flex-wrap">
                                <kkp_button intent="primary" shape="squared">Primary</kkp_button>
                                <kkp_button intent="secondary" shape="squared">Secondary</kkp_button>
                                <kkp_button intent="warning" shape="squared">Warning</kkp_button>
                                <kkp_button intent="success" shape="squared">Success</kkp_button>
                                <kkp_button intent="danger" shape="squared">Danger</kkp_button>
                            </div>
                            </div>
                        </div>

                        <!--Block variant-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Block button  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Setthe value of the shape prop to <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">block</span>to have a button that fills the width of its parent.  </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 w-[80%]">
                                <div class ="flex gap-5 w-full">
                                <kkp_button intent="primary" shape="block">Primary</kkp_button>
                            </div>
                            </div>
                        </div>

                        <!--Disabled variant-->
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Disabled variant  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Disable a button's entire functionality by setting the <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">disabled</span>prop. </p>
                        </div>

                        <!--Sample container-->
                        <div class="w-[100%] h-[15vh] bg-white flex items-center justify-center rounded-2xl m-5">
                            <div class ="flex gap-5 flex-wrap">
                                <div class ="flex gap-5 flex-wrap">
                                <kkp_button intent="primary" >Not Disabled</kkp_button>
                                <kkp_button intent="primary" disabled> Disabled</kkp_button>
                            </div>
                            </div>
                        </div>
                    </div>
            </div>
        </div>
    </div>

    </template>

  