<template>
  <component v-bind:is="SignInUp" @OnRegisterClicked="OnRegisterClickedHandler"/>

</template>

<script>
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";


export default {
  data() {
    return {
      SignInUp: SignIn
    }
  },

  components: {
    SignIn,
    SignUp,
  },

  methods: {
    showSignUp(){
      this.SignInUp = SignUp;
    },

    OnRegisterClickedHandler(){
      this.showSignUp();
    }
  }
//  Hacer un botton de return to log in o al refrescar log in

}

</script>

<style>

</style>