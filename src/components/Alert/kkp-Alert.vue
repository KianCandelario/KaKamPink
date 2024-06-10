<template>
  <div v-if="isVisible" :class="alertBG + ' space-y-2 p-4 rounded-lg min-w-80 max-w-3xl shadow-lg font-poppins'">
    <div class=" bg-transparent flex-col space-x-2">
      <div class=" bg-transparent flex space-x-2">
        <img class=" bg-transparent h-6 w-6" src="/src/assets/alert/information-button.png">
        <h2 class=" bg-transparent font-semibold text-lg">{{ title }}</h2>
      </div>
      <div class=" bg-transparent flex-1 text-left">
        <p class=" bg-transparent mt-1"> <slot/> </p>
      </div>
    </div>
    <div class=" bg-transparent grid grid-cols-3 pt-1">
      <button v-if="dismissable" :class="buttonBG + ' col-start-3 py-1 rounded-md text-white font-medium'" @click="dismissAlert">Close</button>
    </div>
  </div>
</template>

<script>
import { computed, ref, onMounted } from "vue";
import { cva } from "class-variance-authority";

export default {
  name: "KkpAlert",
  props: {
    intent: {
      type: String,
      validator(value) {
        return ['info', 'success', 'warning', 'danger', 'kkp'].includes(value);
      },
      default: 'kkp'
    },
    title: String,
    dismissable: {
      type: Boolean,
      default: false
    },
    autoDismiss: {
      type: Number,
      default: null
    }
  },
  setup(props) {
    const isVisible = ref(true);

    const dismissAlert = () => {
      isVisible.value = false;
    };

    if (props.autoDismiss) {
      onMounted(() => {
        setTimeout(() => {
          dismissAlert();
        }, props.autoDismiss);
      });
    }

    const alertBG = computed(() => {
      return cva("", {
        variants: {
          intent: {
            info: "bg-blue-100",
            success: "bg-green-100",
            warning: "bg-yellow-100",
            danger: "bg-red-100",
            kkp: "bg-pink-shade-one",
          }
        }
      })({
        intent: props.intent
      });
    });

    const buttonBG = computed(() => {
      return cva("", {
        variants: {
          intent: {
            info: "bg-blue-600",
            success: "bg-green-600",
            warning: "bg-yellow-500",
            danger: "bg-red-500",
            kkp: "bg-pink-shade-four",
          }
        }
      })({
        intent: props.intent
      });
    });

    return {
      alertBG,
      buttonBG,
      isVisible,
      dismissAlert
    };
  }
};
</script>