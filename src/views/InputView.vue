<template>
    <div class = "bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%]">
        <div class="flex flex-col justify-center items-center ">
            <div class = "w-[80%]">
    
                <!-- Component Header -->
                <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">INPUT</h1>
                <p class="font-poppins mt-5 mb-5 text-[18px]">The input tag in HTML facilitates user input in web forms, enabling the submission of data such as text, numbers, or options for processing or display.</p>
    
                <!-- Component sub -->
                    <div>
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Default </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Add an element input facilitated with the component <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">kkp-input</span> </p>
                    </div>
            
                    <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5">
                      <kkp_input primary />
                    </div>

<!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="defaults" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_input primary&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('defaults')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('defaults')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

<!-- end of code snippet -->

                </div>

                <!-- Component sub -->
                <div>
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Label  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Add an element input facilitated with the component <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">label</span> </p>
                    </div>
            
                    <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5 gap-10">
                      <kkp_input label="First Name" primary/>
                      <kkp_input label="Last Name" primary/>
                    </div>
                    
<!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="label" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_input label="First Name" primary/&gt;
  &lt;kkp_input label="Last Name" primary/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('label')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('label')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

<!-- end of code snippet -->

                </div>

                <!-- Component sub -->
                <div>
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Placeholder  </h1>
                        <p class="font-poppins mt-2 text-[15px]"> Add a placeholder to the input with the property <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">placeholder</span> </p>
                    </div>
            
                    <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5 gap-10">
                      <kkp_input placeholder="KaKamPink" primary/>
                      <kkp_input placeholder="Lang Tayo" primary/>
                    </div>
                    
<!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="placeholder" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_input placeholder="KaKamPink" primary/&gt;
  &lt;kkp_input placeholder="Lang Tayo" primary/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('placeholder')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('placeholder') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

<!-- end of code snippet -->

                </div>

                <!-- Component sub -->
                <div>
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Border  </h1>
                        <p class="font-poppins mt-2 text-[15px]">Add a placeholder to the input with the property <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">borderr</span>  </p>
                    </div>
            
                    <div class="w-[100%] h-[20vh] bg-white flex items-center justify-center rounded-2xl m-5 gap-10">
                      <kkp_input placeholder="" borderr primary/>
                      <kkp_input placeholder="Russel Custodio" borderr primary/>
                    </div>
                    
<!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="border" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_input borderr primary/&gt;
  &lt;kkp_input placeholder="Russel Custodio" borderr primary/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('border')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText('border') }}
                            </button>
                    </div>
                </div>
            </div>
        </div>

<!-- end of code snippet -->

                </div>

                <!-- Component sub -->
                <div>
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Color </h1>
                        <p class="font-poppins mt-2 text-[15px]">AChange the color of the component and add a border below with the <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">color</span> property</p>
                    </div>
            
                    <div class="w-[100%] h-[25vh] bg-white flex items-center justify-center rounded-2xl m-5 p-10">
                      <div class="bg-transparent grid grid-flow-row-dense grid-cols-4 grid-rows-2 gap-5">
                          <kkp_input placeholder="Primary" primary/>
                          <kkp_input placeholder="Warning" warning/>
                          <kkp_input placeholder="Danger" danger/>                    
                          <kkp_input placeholder="Success" success />
                          <kkp_input placeholder="Dark" dark/>
                          <kkp_input placeholder="HEX" borderBottomColor="#cc3300"/>
                      </div>
                    </div>
                    
<!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="color" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_input placeholder="Primary" primary/&gt;
  &lt;kkp_input placeholder="Warning" warning/&gt;
  &lt;kkp_input placeholder="Danger" danger/&gt;
  &lt;kkp_input placeholder="Success" success/&gt;
  &lt;kkp_input placeholder="Dark" dark/&gt;
  &lt;kkp_input placeholder="HEX" borderBottomColor="#cc3300"/&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('color')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('color')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

<!-- end of code snippet -->

                </div>

                <!-- Component sub -->
                <div>
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Message </h1>
                        <p class="font-poppins mt-2 text-[15px]">You can add a message below the input with the <span class = "text-pink-shade-four font-bold">message</span> to report that a field is missing or the value is wrong</p>
                    </div>
            
                    <div class="w-full h-[27vh] bg-white flex flex-col items-center justify-center rounded-2xl m-5 p-10">
                      <div class="bg-transparent grid grid-flow-row-dense grid-cols-3 grid-rows-1 gap-8">
                          <kkp_input placeholder="Kakampink@gmail.com" success messageColor="#339900" message="Email Valid"/> 
                          <kkp_input placeholder="Warn" messageColor="#ff0000" danger message="Required"/> 
                          <kkp_input type="password" placeholder="••••••••••" messageColor="#FFCC00" message="Insecure password"/> 
                      </div>

                      <div class="bg-transparent text-[15px] w-[30%]">
                          <p class="bg-transparent font-poppins mt-3 ml-1">Example Validation</p>
                          <kkp_input v-model="value4" :messageColor="validEmail ? '#339900' : '#ff0000'"/>
                          <div class="text-[#339900] bg-transparent font-poppins font-bold ml-2 success" v-if="validEmail">
                              Email Valid
                          </div>
                          <div class="text-[#ff0000] bg-transparent font-poppins font-bold ml-2 danger" v-else-if="value4 !== ''">
                              Email Invalid
                          </div>
                      </div>
                  </div>

                  <!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="message" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_input placeholder="Kakampink@gmail.com" success messageColor="#339900" message="Email Valid"/&gt;
  &lt;kkp_input placeholder="Warn" messageColor="#ff0000" danger message="Required"/&gt;
  &lt;kkp_input type="password" placeholder="••••••••••" messageColor="#FFCC00" message="Insecure password"/&gt;

  &lt;div class="bg-transparent text-[15px] w-[30%]"&gt;
    &lt;p class="bg-transparent font-poppins mt-3 ml-1"&gt; Example Validation&lt;/p&gt;
    &lt;kkp_input v-model="value4" :messageColor="validEmail ? '#339900' : '#ff0000'"/&gt;

    &lt;div class="text-[#339900] bg-transparent font-poppins font-bold ml-2 success" v-if="validEmail"&gt;
    Email Valid 
    &lt;/div &gt;
    &lt;div class="text-[#ff0000] bg-transparent font-poppins font-bold ml-2 danger" v-else-if="value4 !== ''"&gt;
    Email Invalid 
    &lt;/div &gt;
  &lt;/div&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('message')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('message')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

<!-- end of code snippet -->
                </div>

                <!-- Component sub -->
                <div>
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Types </h1>
                        <p class="font-poppins mt-2 text-[15px]">Change the type of input with the type property as a native HTML input, the default value is text </p>
                    </div>
            
                    <div class="w-full h-[30vh] bg-white flex flex-col items-center justify-center rounded-2xl m-5 p-10">
                      <div class="bg-transparent grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-5 ">
                          <div v-for="(item, index) in types" :key="index" class="bg-transparent text-[15px]">
                              <p class="bg-transparent font-poppins mt-1 ml-1">{{ item }}</p>
                              <kkp_input :type="item" primary/>
                          </div>
                      </div>
                  </div>
                  <!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="type" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_input type="text" primary&gt;
  &lt;kkp_input type="password" primary&gt;
  &lt;kkp_input type="number" primary &gt;
  &lt;kkp_input type="time" primary&gt;
  &lt;kkp_input type="date" primary&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('type')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('type')}}
                            </button>
                    </div>
                </div>
            </div>
        </div>

<!-- end of code snippet -->
                </div>
            
                <!-- Component sub -->
                <div>
                        <div class="w-[80%]">
                        <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3"> Shadow</h1>
                        <p class="font-poppins mt-2 text-[15px]">Change everything is style of the component with the <span class="text-pink-shade-four font-semibold border-pink-shade-two p-1 border-2 rounded-md">shadow</span> property, the property is a Boolean, so you can add it without any value.</p>
                    </div>
            
                    <div class="w-full h-[30vh] bg-white flex flex-col items-center justify-center rounded-2xl m-5 p-10">
                      <div class="bg-transparent grid grid-flow-row-dense grid-cols-3 grid-rows-2 gap-5 ">
                          <div v-for="(item, index) in types" :key="index" class="bg-transparent text-[15px]">
                              <p class="bg-transparent font-poppins mt-1 ml-1">{{ item }}</p>
                              <kkp_input :type="item" primary shadow/>
                          </div>
                      </div>
                  </div>

                                    <!-- code snippet -->

        <div id="app" class="w-full m-5 ">
            <div class="max-w-md mx-auto   overflow-hidden md:max-w-full">
                <div class="md:flex text-right w-full">
                    <div class="w-full">
                        <div v-if="shadow" class="mb-4 code-container ">
                            <pre class = "bg-transparent w-full  "><code class = "bg-transparent w-full">&lt;template&gt;
  &lt;kkp_input type="text" primary shadow&gt;
  &lt;kkp_input type="password" primary shadow&gt;
  &lt;kkp_input type="number" primary shadow&gt;
  &lt;kkp_input type="time" primary shadow&gt;
  &lt;kkp_input type="date" primary shadow&gt;
&lt;/template&gt;</code></pre>
                        </div>
                            <button 
                                @click="toggleContent('shadow')" 
                                class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                                {{ buttonText ('shadow')}}
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

import kkp_input from '../components/Input/kkp-input.vue'
export default {
  components: {
    kkp_input
  },
  data() {
    return {
      value4: '',
      types: ['Text', 'Password', 'Number', 'Time', 'Date'],
      defaults: false,
      label: false,
      placeholder: false,
      border:false,
      color:false,
      message:false,
      type: false,
      shadow: false
    }
  },
  computed: {
        validEmail() {
        
          return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(this.value4) 
        },
        
      },
      methods:{
        toggleContent(Type) {
      this[Type] = !this[Type];
    },
    buttonText(Type) {
      return this[Type] ? 'Hide Code' : 'Show Code';
    }
      }
}
</script>