<template>
  <div>
    <div class="flex mb-4 items-center">
      <p class="w-full text-grey-900 bg-gray-200">{{ task.title }}</p>
      <button
       @click="deleteTask"
        class="
          flex-no-shrink
          p-2
          ml-4
          mr-2
          border-2
          rounded
          hover:text-white
          text-green-600
          border-green-600
          hover:bg-green-600
        ">&#10004;
      </button>
      
      <button
        
        class="
          flex-no-shrink
          p-2
          ml-2
          border-2
          rounded
          text-red-500
          border-red-500
          hover:text-white hover:bg-red-500
        "
      >
      &#10006;
      </button>
      
    </div>
  </div>
  
</template>

<script>
import { useTaskStore } from "../store/task";
import { useUserStore } from "../store/user";

export default {
  props:{
    task: Object
  },
  setup() {
    const userStore = useUserStore();
    const taskStore = useTaskStore();
    return { userStore, taskStore }
  },

  data() {
    return {
      taskText: "",
      updater: false,
    }
  },

  methods: {
    async deleteTask() {
      console.log("estoy borrando una tarea");

      await this.taskStore.deleteTask(this.taskText, this.userStore.user.id);
      this.$forceUpdate();
    },
  },
};
</script>

<style>
</style>
