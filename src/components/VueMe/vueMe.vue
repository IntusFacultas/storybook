<template></template>

<script>
import Vue from "vue";
import VueMeDialog from "Components/components/VueMe/vueMeDialog.js";
export const VueMe = {
  name: "vue-me",
  props: {
    parentInstance: {
      type: Object,
      default: ""
    },
    destruct: {
      type: Boolean,
      default: true
    }
  },
  mounted: function() {
    var self = this;
    if (self.destruct) {
      const constructor = Vue.extend(VueMeDialog);
      self.parentInstance.$alert = (options, parent) => {
        var instance = new constructor({
          propsData: { destruct: false }
        });
        instance.$mount();
        instance.$parent = parent;
        instance.$parent.$el.appendChild(instance.$el);
        instance.alert(options);
      };
      self.$destroy();
      self.$el.parentNode.removeChild(self.$el);
    }
  },
  computed: {}
};
export default VueMe;
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Montserrat|Roboto&display=swap");
.vueme-title-container {
  display: flex;
}
.vueme-dialog-backdrop-animation-enter-active,
.vueme-dialog-backdrop-animation-leave-active {
  transition-property: opacity;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);
}
.vueme-dialog-backdrop-animation-enter {
  opacity: 0;
}
.vueme-dialog-backdrop-animation-enter-to {
  opacity: 0.2;
}
.vueme-dialog-backdrop-animation-leave {
  opacity: 0.2;
}
.vueme-dialog-backdrop-animation-leave-to {
  opacity: 0;
}

/* Dialog Panel and backdrop */
.vueme-dialog-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: fixed;
  width: 100%;
  z-index: 1000;
  top: 0px;
  bottom: 0px;
  left: 0px;
  right: 0px;
}
.vueme-dialog-backdrop {
  background-color: #444;
  opacity: 0;
  z-index: 999;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  transition-duration: 0.4s;
  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);
  transition-property: opacity;
}
.vueme-dialog-backdrop-open {
  opacity: 0.2;
}

/* Dismiss Animation*/
.vueme-dismiss-dialog {
  transition: all 0.4s;
  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);
  transform: scale(0);
  display: block;
}

/* Background Dismiss Shake Animation*/
.vueme-shake-dialog {
  -webkit-animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  animation: shake 0.82s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;
  -webkit-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
}
@keyframes shake {
  10%,
  90% {
    -webkit-transform: translate3d(-2px, 0, 0);
    transform: translate3d(-2px, 0, 0);
  }
  20%,
  80% {
    -webkit-transform: translate3d(4px, 0, 0);
    transform: translate3d(4px, 0, 0);
  }
  30%,
  50%,
  70% {
    -webkit-transform: translate3d(-8px, 0, 0);
    transform: translate3d(-8px, 0, 0);
  }
  40%,
  60% {
    -webkit-transform: translate3d(8px, 0, 0);
    transform: translate3d(8px, 0, 0);
  }
}

.vueme-dialog-label {
  margin-bottom: 5px;
  display: block;
}
.vueme-dialog-field {
  width: 100%;
  border: 1px solid #ced4da;
  border-radius: 0.25rem;
  transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  height: calc(1.5em + 2px + 0.75rem);
  padding: 0.375rem 0.75rem;
  font-size: 1rem;
  font-weight: 400;
}
.vueme-dialog-field:focus {
  border-color: #80bdff;
  outline: 0;
  box-shadow: 0px 0px 0px 0.2rem rgba(0, 123, 255, 0.25);
}
.vueme-dialog-header {
  font-size: 22px;
}
.vueme-dialog-header span {
  font-size: 22px;
}

/* Dialog CSS */
.vueme-dialog {
  z-index: 1000;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  max-width: 500px;
  min-width: 360px;
  display: flex;
  transition: all 0.4s;
  transform: scale(0);
  transition-timing-function: cubic-bezier(0.36, 0.55, 0.19, 1);
}
.vueme-dialog-open {
  transform: scale(1);
}
.vueme-dialog-content-container {
  width: 100%;
  font-family: "Roboto", sans-serif;
  padding: 10px;
  word-break: break-word;
}
.vueme-dialog-button-container {
  margin-top: 15px;
  display: flex;
  justify-content: flex-end;
}

/* Themes */
.vueme-default-dialog {
  border-top: solid 7px white;
}
.vueme-SuccessLight-dialog {
  border-top: solid 7px #bdcdc1;
}
.vueme-SuccessMedium-dialog {
  border-top: solid 7px #8ba993;
}
.vueme-Success-dialog {
  border-top: solid 7px #487554;
}
.vueme-PrimaryLight-dialog {
  border-top: solid 7px #838e99;
}
.vueme-PrimaryMedium-dialog {
  border-top: solid 7px #455666;
}
.vueme-Primary-dialog {
  border-top: solid 7px #1a2d3e;
}
.vueme-DangerLight-dialog {
  border-top: solid 7px #d8a3a2;
}
.vueme-DangerMedium-dialog {
  border-top: solid 7px #a84542;
}
.vueme-Danger-dialog {
  border-top: solid 7px #9f1917;
}
.vueme-InfoLight-dialog {
  border-top: solid 7px #cdf1ee;
}
.vueme-InfoMedium-dialog {
  border-top: solid 7px #b1dad6;
}
.vueme-Info-dialog {
  border-top: solid 7px #3d716b;
}
.vueme-WarningLight-dialog {
  border-top: solid 7px #f9d3a2;
}
.vueme-WarningMedium-dialog {
  border-top: solid 7px #f5b25c;
}
.vueme-Warning-dialog {
  border-top: solid 7px #f1ac17;
}
.vueme-dark-dialog {
  border-top: solid 7px #34495e;
}
.vueme-red-dialog {
  border-top: solid 7px #e74c3c;
}
.vueme-blue-dialog {
  border-top: solid 7px #3498db;
}
.vueme-purple-dialog {
  border-top: solid 7px #9b59b6;
}
.vueme-green-dialog {
  border-top: solid 7px #2ecc71;
}
.vueme-orange-dialog {
  border-top: solid 7px #f1c40f;
}
</style>