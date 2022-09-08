// /store/task.js

import { defineStore } from "pinia";
import { supabase } from "../supabase";

export const useTaskStore = defineStore("tasks", {
  state: () => ({
    tasks: []
  }),

  actions: {
    async fetchTasks() {
      const tasks = await supabase
        .from("tasks")
        .select("*")
        .order("inserted_at", { ascending: false });
      this.tasks = tasks.data;
    },
    // Hacer POST
    async createTask(title, user_id) {
      await supabase
        .from("tasks")
        .insert([{ user_id: user_id, title: title, is_complete: false }]);
        await this.fetchTasks();
    },

    // BORRAR
    async deleteTask(taskId) {
      await supabase.from("tasks").delete().match({ id: taskId });
      await this.fetchTasks();
    },

    // Hacer el PUT (edit).update()
    async editTask(taskId, title) {
      await supabase.from("tasks").update({ title }).match({ id: taskId });
      await this.fetchTasks();
    },
    // Hacer el PUT (cambiar entre completada y pendiente)
    async changeStateTask(taskId) {
      let task = await this.getById(taskId);
      
      await supabase
        .from("tasks")
        .update({ is_complete: !task.is_complete })
        .match({ id: taskId });
        await this.fetchTasks();
    },
    // Hacer el PUT (cambiar entre completada y pendiente)
    async getById(taskId) {
      let result = await supabase
        .from("tasks")
        .select("*")
        .match({ id: taskId })
        .single();
      return result.data;
    },
  },
  getters: {
    notCompleted(state) {
      return state.tasks.filter(task => !task.is_complete);
    },
    completed(state) {
      return state.tasks.filter(task => task.is_complete);
    },
  }
});
