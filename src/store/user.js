// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase.js";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null,
  }),

  actions: {
    async fetchUser() {
      const user = await supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      try {
        const { user, error } = await supabase.auth.signUp({
          email: email,
          password: password,
        });
        if (error) throw error;
      if (user) this.user = user;

      } catch(error) {
        console.log(error)
      }
      
    },
    // Hacer sign in
    async signIn(email, password) {
      const { user, error } = await supabase.auth.signIn({
        email: email,
        password: password,
      });
      if (error) throw error;
      if (user) this.user = user;
    },
    // Hacer log out
     
    // Hacer is logged in
    const: isLoggedIn = ()=> {
      return !!user.value;
    },
    persist: {
      enabled: true,
      strategies: [
        {
          key: "user",
          storage: localStorage,
        },
      ],
    },
  },
});
