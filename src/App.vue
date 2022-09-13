<template>
   <Navbar v-show="route.path === '/'" />
   <router-view class="app-main" />
   <footer class="
      p-4
      bg-white
      rounded-lg
      shadow
      md:flex md:items-center md:justify-center md:p-6
      dark:bg-gray-800
    ">
      <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="#"
          class="hover:underline">HeroHack™</a>. All Rights
        Reserved.
      </span>
    </footer>
</template>

<script setup>
import { onMounted } from "vue";
import { storeToRefs } from "pinia";
import { useRouter, useRoute } from "vue-router";
import { useUserStore } from "./store/user";
import Navbar from './components/NavBar.vue'


const route = useRoute();
const router = useRouter();
const userStore = useUserStore();
const { user } = storeToRefs(userStore);


onMounted(async () => {
  try {
    await userStore.fetchUser(); // here we call fetch user
    if (!user.value) {
      // redirect them to logout if the user is not there
      router.push({ path: "/auth" });
    } else {
      // continue to dashboard
      router.push({ path: "/" });
    }
  } catch (e) {
    console.log(e);
  }

});
</script>
<style>
 #app {
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
} 
</style>
