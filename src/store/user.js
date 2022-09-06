// /store/user.js

import { defineStore } from "pinia";
import { supabase } from "../supabase.js";

export const useUserStore = defineStore("user", {
  state: () => ({
    user: null
  }),

  actions: {
    async fetchUser() {
      const user = supabase.auth.user();
      this.user = user;
    },
    async signUp(email, password) {
      try {
        await supabase.auth.signUp({
          email: email,
          password: password,
        });

        if (result.error){
          alert("This is obviously not working");
          throw error;
        }
        this.user = result.user        
      } catch(error) {
        console.log(error)
      }      
    },
    // Hacer sign in
    async signIn(email, password) {
      try {
        const result = await supabase.auth.signIn({
          email: email,
          password: password,
        });

        if (result.error){
          alert("This is obviously not working");
          throw error;
        }
        this.user = result.user;
        
      } catch(error) {
        console.log(error);
        throw error;
      }  
    },
    // Hacer log out
     async signOut(){
      let {error}= await supabase.auth.signOut()
      if (error) throw error
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
