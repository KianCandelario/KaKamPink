<template>
  <div class="bg-pink-shade-two w-full overflow-scroll overflow-x-hidden h-[100%]">
    <div class="flex flex-col justify-center items-center">
      <div class="w-[80%]">

        <!-- Component Header -->
        <h1 class="bg-transparent text-start text-[45px] font-poppins mt-10 text-pink-shade-four font-bold tracking-wider">ALERT</h1>
        <p class="font-poppins mt-5 mb-5 text-[18px]">
          The Alert component is a versatile and reusable UI element designed to display important messages or notifications to users.
          This component supports multiple types of alerts, including success, danger, warning, and informational messages, ensuring that it can be used in a variety of scenarios.
        </p>

        <!-- Alerts List -->
        <div v-for="(alert, index) in alerts" :key="index">
          <div class="w-[80%]">
            <h1 class="bg-transparent text-start text-[30px] font-poppins mt-3">{{ alert.title }}</h1>
            <p class="font-poppins mt-2 text-[15px]">{{ alert.description }}</p>
          </div>

          <div class="w-[100%] h-fit bg-white flex items-center justify-center rounded-2xl py-5 mt-5 m-5">
            <kkp-alert :intent="alert.intent" :title="alert.alertTitle" :dismissable="alert.dismissable" :autoDismiss="alert.autoDismiss">
              {{ alert.content }}
            </kkp-alert>
          </div>
          
          <!-- code snippet -->
          <div id="app" class="w-full m-5">
            <div class="max-w-md mx-auto overflow-hidden md:max-w-full">
              <div class="md:flex text-right w-full">
                <div class="w-full">
                  <div v-if="alert.isContentVisible" class="mb-4 code-container">
                    <pre class="bg-transparent w-full"><code class="bg-transparent w-full">{{ alert.code }}</code></pre>
                  </div>
                  <button 
                    @click="toggleContent(index)" 
                    class="bg-pink-shade-four hover:bg-pink-shade-one text-white font-bold py-2 px-4 rounded font-poppins text-[12px]">
                    {{ alert.buttonText }}
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
import kkpAlert from '../components/Alert/kkp-Alert.vue';

export default {
  components: {
    kkpAlert
  },
  data() {
    return {
      alerts: [
        {
          title: 'Default',
          description: "This is KKP's default alert style.",
          alertTitle: 'Title',
          content: 'This is KKP Alert, an alert component created by KKP.',
          intent: null,
          dismissable: false,
          autoDismiss: null,
          isContentVisible: false,
          code: `<template>
  <kkp-alert title="Title">
    This is KKP Alert, an alert component created by KKP.
  </kkp-alert>
</template>`,
          buttonText: 'Show Code'
        },
        {
          title: 'Info',
          description: 'Use intent prop to use alert in various cases.',
          alertTitle: 'Title',
          content: "This is KKP's info alert style.",
          intent: 'info',
          dismissable: false,
          autoDismiss: null,
          isContentVisible: false,
          code: `<template>
  <kkp-alert intent="info" title="Title">
    This is KKP's info alert style.
  </kkp-alert>
</template>`,
          buttonText: 'Show Code'
        },
        // Add other alert configurations here following the same pattern
        {
          title: 'Success',
          description: 'This is KKP success alert style.',
          alertTitle: 'Title',
          content: "This is KKP's success alert style.",
          intent: 'success',
          dismissable: false,
          autoDismiss: null,
          isContentVisible: false,
          code: `<template>
  <kkp-alert intent="success" title="Title">
    This is KKP's success alert style.
  </kkp-alert>
</template>`,
          buttonText: 'Show Code'
        },
        {
          title: 'Warning',
          description: 'This is KKP warning alert style.',
          alertTitle: 'Title',
          content: "This is KKP's warning alert style.",
          intent: 'warning',
          dismissable: false,
          autoDismiss: null,
          isContentVisible: false,
          code: `<template>
  <kkp-alert intent="warning" title="Title">
    This is KKP's warning alert style.
  </kkp-alert>
</template>`,
          buttonText: 'Show Code'
        },
        {
          title: 'Danger',
          description: 'This is KKP danger alert style.',
          alertTitle: 'Title',
          content: "This is KKP's danger alert style.",
          intent: 'danger',
          dismissable: false,
          autoDismiss: null,
          isContentVisible: false,
          code: `<template>
  <kkp-alert intent="danger" title="Title">
    This is KKP's danger alert style.
  </kkp-alert>
</template>`,
          buttonText: 'Show Code'
        },
        {
          title: 'Dismissable',
          description: 'This prop allows the alert to be dismissed by the user.',
          alertTitle: 'Title',
          content: 'Click the close button to dismiss alert.',
          intent: 'kkp',
          dismissable: true,
          autoDismiss: null,
          isContentVisible: false,
          code: `<template>
  <kkp-alert title="Title" dismissable>
    Click the close button to dismiss alert.
  </kkp-alert>
</template>`,
          buttonText: 'Show Code'
        },
        {
          title: 'Auto Dismiss',
          description: 'This prop allows the alert to automatically disappear after a specific time. *Reload the page to see the Alert*',
          alertTitle: 'Title',
          content: 'This alert is set to dismiss in 5000 ms.',
          intent: null,
          dismissable: false,
          autoDismiss: 5000,
          isContentVisible: false,
          code: `<template>
  <kkp-alert title="Title" :autoDismiss="3000">
    This alert is set to dismiss in 3000 ms.
  </kkp-alert>
</template>`,
          buttonText: 'Show Code'
        }
      ]
    };
  },
  methods: {
    toggleContent(index) {
      this.alerts[index].isContentVisible = !this.alerts[index].isContentVisible;
      this.alerts[index].buttonText = this.alerts[index].isContentVisible ? 'Hide Code' : 'Show Code';
    }
  }
};
</script>
