<template>
  <nav class="bg-gray-800">
    <div class="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
      <div class="relative flex items-center justify-between h-16">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
          <!-- Mobile menu button-->
          <!-- <button type="button" class="
              inline-flex
              items-center
              justify-center
              p-2
              rounded-md
              text-gray-400
              hover:text-white hover:bg-gray-700
              focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white
            " aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span> -->
            <!--
            Icon when menu is closed.

            Heroicon name: outline/bars-3

            Menu open: "hidden", Menu closed: "block"
          -->
            <!-- <svg class="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg> -->
            <!--
            Icon when menu is open.

            Heroicon name: outline/x-mark

            Menu open: "block", Menu closed: "hidden"
          -->
            <!-- <svg class="hidden h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
              stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> -->
        </div>
        <div class="
            flex
            items-center
            justify-around
            sm:items-stretch sm:justify-start
          ">
          <div class="flex-shrink-0 flex items-center">
            <img class="block h-10 w-auto" src="../assets/logo_200x200.png" alt="Workflow" />
          </div>
          <div class="hidden sm:block sm:ml-6">
            <div class="flex space-x-4">
              <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
            <div class="
                  bg-gray-900
                  text-white
                  px-3
                  py-2
                  rounded-md
                  text-sm
                  font-medium
                " aria-current="page">{{user?.user?.email}}</div>
            </div>
          </div>
        </div>
        <div class="text-sm font-medium text-white mr-2"></div>
        <button @click="signOut" type="button" class="
            py-2.5
            px-5
            mr-2
            mb-2
            text-sm
            font-medium
            text-gray-900
            focus:outline-none
            bg-white
            rounded-full
            border border-gray-200
            hover:bg-gray-100 hover:text-blue-700
            focus:z-10 focus:ring-4 focus:ring-gray-200
            dark:focus:ring-gray-700
            dark:bg-gray-800
            dark:text-gray-400
            dark:border-gray-600
            dark:hover:text-white
            dark:hover:bg-gray-700
          ">
          Log out
        </button>
    </div>
    </div>

    <!-- Mobile menu, show/hide based on menu state. -->
    <div class="sm:hidden" id="mobile-menu">
      <div class="px-2 pt-2 pb-3 space-y-1">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
         <!-- <div class="
            bg-gray-900
            text-center
            text-white
            block
            px-3
            py-2
            rounded-md
            text-base
            font-medium
          " aria-current="page">{{user.user.email}}</div> -->
      </div> 
    </div>
  </nav>
</template>
 
<script>
import { useUserStore } from "../store/user";
import { useTaskStore } from "../store/task";

export default {
  setup() {
    const user = useUserStore();
    const taskStore = useTaskStore();
    return { user, taskStore };
  },
  methods: {
    async signOut() {
      this.taskStore.tasks = [];
      await this.user.signOut();
      this.$router.push("/auth");
    },
    
  }
};



</script>
 
<style>

</style>
 