<template>
<div class = "bg-pink-shade-two w-fulloverflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center">
        <div class="w-[80%]">
        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">FOOTER </h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">A footer in a website is the section located at the bottom of each webpage. The footer serves to provide easy access to essential resources and legal information, enhancing the overall user experience and accessibility of the website.</p>
        

        <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Default </h1>
            <p class="font-poppins mt-2 text-[15px]">The <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">kkp_footer</span>   component in its simplest form is a container. </p>
        </div>
        

        <!-- Default Input -->
        <div class="w-[100%] h-[25vh] bg-white flex flex-col items-center justify-center rounded-2xl m-5">
            <kkp_footer year = "2024" name = "KaKamPink"/>

        </div>

        <!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="defaultss" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;kkp_footer year = "2024" name = "KaKampink"/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('defaultss')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('defaultss') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->
        
        <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Links</h1>
            <p class="font-poppins mt-2 text-[15px]">The footer component with links <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">kkp_footer</span> </p>
        </div>

        <!-- Default Input -->
        <div class="w-[100%] h-[25vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp_footer links
            year = "2024" 
            name = "KaKampink"
            />
        </div>

        <!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="links" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;kkp_footer year = "2024" name = "KaKampink links "/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('links')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('links')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->


        <div class="w-[90%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Socials </h1>
            <p class="font-poppins mt-2 text-[15px]">The footer component with socials.  Specify the social media platforms you want to include, such as GitHub  <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">git</span> Facebook  <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">fb</span> YouTube  <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">yt</span> Twitter  <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">x</span> and Instagram  <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">ig</span></p>
        </div>

        <!-- Default Input -->
        <div class="w-[100%] h-[25vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp_footer socials
            year = "2024" 
            kkp_name = "KaKampink"
            git 
            fb x ig yt
            />

            
        </div>

        <!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="socials" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;kkp_footer year = "2024" name = "KaKampink"
    socials git fb x ig yt "/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('socials')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('socials') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

        <div class="w-[90%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Socials with description</h1>
            <p class="font-poppins mt-2 text-[15px]">The footer component with socials and description. The footer should have properties for <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">socials</span> and <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">content</span> and the <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">content</span> property should have a value. </p>
        </div>

        <!-- Default Input -->
        <div class="w-[100%] h-[35vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp_footer socials
            year = "2024" 

            content = "Kakampink is a website that introduces various reusable 
            programming components. It provides developers with a collection of 
            versatile, eco-friendly code elements designed to enhance efficiency 
            and sustainability in software development." 

            kkp_name = "KaKampink"
            git 
            fb x ig yt
            />
        </div>

         <!-- code snippet -->

         <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="socialsc" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
    &lt;kkp_footer year = "2024" name = "KaKampink" 
    socials git fb x ig yt
    content = "Kakampink is a website that introduces various reusable 
            programming components. It provides developers with a collection of 
            versatile, eco-friendly code elements designed to enhance efficiency 
            and sustainability in software development."
    /&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('socialsc')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('socialsc') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

        <!-- end of code snippet -->

        
    </div>

    </div>
</div>
</template>

<script>
import kkp_footer from '../components/Footer/kkp-footer.vue'

export default {
    components: {
    kkp_footer
  },
  data() {
    return {
        defaultss: false,
        links: false,
        socials: false,
        socialsc: false,
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

<style scoped>
.code-container {
    background-color: #2d2d2d;
    color: #f8f8f2;
    border-radius: 8px;
    padding: 16px;
    font-family: 'Courier New', Courier, monospace;
    width: 100%;
    text-align: left;
}
.code-container pre {
    margin: 0;
    width: 100%;
}
</style>