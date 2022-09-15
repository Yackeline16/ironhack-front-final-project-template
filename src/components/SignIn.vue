<template>
  <div class="sign-bg h-screen">
    <div class="h-full">
      <div
        class="
          min-h-full
          flex
          items-center
          justify-center
          py-12
          px-4
          sm:px-6
          lg:px-8
        "
      >
        <div class="max-w-md w-full space-y-8">
          <div>
            <img
              class="mx-auto h-30 w-auto"
              src="../assets/logo_200x200.png"
              alt="logo"
            />
            <h2
              class="
                mt-6
                text-center text-3xl
                tracking-tight
                font-bold
                text-gray-900
              "
            >
              Sign in to your account
            </h2>
          </div>
          <form
            class="mt-8 space-y-6"
            action="#"
            method="POST"
            @submit.prevent="signIn"
          >
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px">
              <div>
                <label for="email-address" class="sr-only">Email address</label>
                <input
                  id="email-address"
                  name="email"
                  v-model="email"
                  type="email"
                  autocomplete="email"
                  required=""
                  class="
                    appearance-none
                    rounded
                    relative
                    block
                    w-full
                    my-2 
                    px-3
                    py-2
                    border border-gray-300
                    placeholder-gray-500
                    text-gray-900
                    rounded-t-md
                    focus:outline-none
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    focus:z-10
                    sm:text-sm
                  "
                  placeholder="Email address"
                />
              </div>
           
              <div>
                <label for="password" class="sr-only">Password</label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  v-model="password"
                  autocomplete="current-password"
                  required=""
                  class="
                    appearance-none
                    rounded
                    relative
                    block
                    w-full
                    my-2 
                    px-3
                    py-2
                    border border-gray-300
                    placeholder-gray-500
                    text-gray-900
                    rounded-b-md
                    focus:outline-none
                    focus:ring-indigo-500
                    focus:border-indigo-500
                    focus:z-10
                    sm:text-sm
                  "
                  placeholder="Password"
                />
              </div>
            </div>

            <div>
              <button
                type="submit"
                class="
                  group
                  relative
                  w-full
                  flex
                  justify-center
                  py-2
                  px-4
                  border border-transparent
                  text-sm
                  font-medium
                  rounded-md
                  text-white
                  bg-indigo-600
                  hover:bg-indigo-700
                  focus:outline-none
                  focus:ring-2
                  focus:ring-offset-2
                  focus:ring-indigo-500
                "
              >
                <span class="absolute left-0 inset-y-0 flex items-center pl-3">
                  <LockClosedIcon
                    class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                    aria-hidden="true"
                  />
                </span>
                Sign in
              </button>
            </div>
          </form>
          <div class="flex items-center space-around">
            <div class="text-sm">
              <button
                class="font-medium text-white hover:text-indigo-900"
                @click="OnRegisterClicked"
              >
                Register a new account
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useUserStore } from "../store/user"

export default {
 

  setup() {
    const user = useUserStore();
    return { user };
  },
  data() {
    return {
      email: "",
      password: "",
    };
  },
  methods: {
    async signIn() {
      console.log('Holaa');
      await this.user.signIn(this.email, this.password);
      this.$router.push("/");
    },
    
    OnRegisterClicked() {
      this.$emit("OnRegisterClicked");
    },

  }
}
</script>
