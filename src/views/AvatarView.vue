<template>
  <div class="bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center">
      <div class="w-[80%]">

        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">AVATAR</h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">This component allows you to upload your choice of photo to be your avatar. Uses for avatars include comment areas, user menus, chat apps, user profiles, and notifications. Image source, fallback alternatives, size variations, forms, and optional borders are some of the key features.</p>

        <div>
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Round Avatar</h1>
            <p class="font-poppins mt-2 text-[15px]">To use the Avatar default design use KKP-Avatar.</p>
          </div>

          <div class="w-[100%] h-[30vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp-avatar />
          </div>

          <!-- code snippet -->
          <div id="app" class="w-full m-5">
            <div class="max-w-md mx-auto overflow-hidden md:max-w-full">
              <div class="md:flex text-right w-full">
                <div class="w-full">
                  <div v-if="isRoundAvatarVisible" class="mb-4 code-container">
                    <pre class="bg-transparent w-full"><code class="bg-transparent w-full">&lt;template&gt;
  &lt;kkp-avatar/&gt;
&lt;/template&gt;</code></pre>
                  </div>
                  <button 
                    @click="toggleContent('isRoundAvatarVisible')" 
                    class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                    {{ buttonText('isRoundAvatarVisible') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- end of code snippet -->

          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Square Avatar</h1>
            <p class="font-poppins mt-2 text-[15px]">To use the Avatar Square design use <span class="text-pink-shade-four font-semibold">square</span> property.</p>
          </div>

          <div class="w-[100%] h-[30vh] bg-white flex items-center justify-center rounded-2xl m-5">
            <kkp-avatar square />
          </div>

          <!-- code snippet -->
          <div id="app" class="w-full m-5">
            <div class="max-w-md mx-auto overflow-hidden md:max-w-full">
              <div class="md:flex text-right w-full">
                <div class="w-full">
                  <div v-if="isSquareAvatarVisible" class="mb-4 code-container">
                    <pre class="bg-transparent w-full"><code class="bg-transparent w-full">&lt;template&gt;
  &lt;kkp-avatar square/&gt;
&lt;/template&gt;</code></pre>
                  </div>
                  <button 
                    @click="toggleContent('isSquareAvatarVisible')" 
                    class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                    {{ buttonText('isSquareAvatarVisible') }}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <!-- end of code snippet -->

          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">Active Round Avatar</h1>
            <p class="font-poppins mt-2 text-[15px]">To use the Active Round Avatar design use <span class="text-pink-shade-four font-semibold">activeround</span> property.</p>
          </div>

          <div class="w-[100%] h-[30vh] bg-white flex items-center justify-center rounded-2xl m-5 shadow-lg">
            <kkp-avatar activeround />
          </div>

          <!-- code snippet -->
          <div id="app" class="w-full m-5">
            <div class="max-w-md mx-auto overflow-hidden md:max-w-full">
              <div class="md:flex text-right w-full">
                <div class="w-full">
                  <div v-if="isActiveRoundAvatarVisible" class="mb-4 code-container">
                    <pre class="bg-transparent w-full"><code class="bg-transparent w-full">&lt;template&gt;
  &lt;kkp-avatar activeround/&gt;
&lt;/template&gt;</code></pre>
                  </div>
                  <button 
                    @click="toggleContent('isActiveRoundAvatarVisible')" 
                    class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                    {{ buttonText('isActiveRoundAvatarVisible') }}
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
import kkpAvatar from '../components/Avatar/kkp_Avatar.vue';

export default {
  components: {
    kkpAvatar
  },
  data() {
    return {
      isRoundAvatarVisible: false,
      isSquareAvatarVisible: false,
      isActiveRoundAvatarVisible: false,
    };
  },
  methods: {
    toggleContent(avatarType) {
      this[avatarType] = !this[avatarType];
    },
    buttonText(avatarType) {
      return this[avatarType] ? 'Hide Code' : 'Show Code';
    }
  }
};
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
