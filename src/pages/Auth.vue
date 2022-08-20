<template>
  <SignIn v-if="signIn" />
  <SignUp v-else />
</template>

<script>
import SignIn from "../components/SignIn.vue";
import SignUp from "../components/SignUp.vue";


export default {
  components: {
    SignIn,
    SignUp
    
},
data() {
  return {
    signIn: false
  }
}
};
</script>

