<template>
  <div class="sign-bg h-screen">
    <div class="h-full">
      <div class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <div class="max-w-md w-full space-y-8">
          <div>
            <img class="mx-auto h-30 w-auto" src="../assets/logo_200x200.png" alt="logo" />
            <h2 class="mt-6 text-center text-3xl tracking-tight font-bold text-gray-900">
              Sign up to your account
            </h2>
          </div>
          <form class="mt-8 space-y-6" @submit.prevent="register" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input id="email-address" name="email" type="email" v-model="email" autocomplete="email" required=""
                  class="appearance-none rounded relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Email address" />
              </div>

              <div>
                <label for="password" class="sr-only">Password</label>
                <input id="password1" name="password1" type="password" v-model="password"
                  autocomplete="current-password" required=""
                  class="appearance-none rounded relative block w-full my-2 px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Password" />
                <input id="password2" name="password2" type="password" v-model="password2"
                  autocomplete="current-password" required=""
                  class="appearance-none rounded relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  placeholder="Confirm Password" />
              </div>
            </div>

            <button type="submit"
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
              Sign up
            </button>
          </form>
          <div class="flex items-center space-around">
            <div class="text-sm">
            <button  @click="OnLogInClicked" class="font-medium text-white hover:text-indigo-500"> Log in your account </button>
          </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>


import { useUserStore } from "../store/user";

export default {
  setup() {
    const user = useUserStore();
    return { user };
  },
  data() {
    return {
      email: "",
      password: "",
      password2: "",
    };
  },
  methods: {
    async register() {

      if (this.password != this.password2) {
        alert("Passwords don't match");
        return;
      }

      await this.user.signUp(this.email, this.password);
      // console.log(res);
      // this.$router.push("/");
      //TODO: Mostrar mensaje de registro correcto (a poder ser con enlace para login)
    },
    OnLogInClicked() {
      this.$emit("OnLogInClicked");
    },

  
  },
};
</script>
