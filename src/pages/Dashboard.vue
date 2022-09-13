<template>
      <div class="
      h-full
      w-full
      flex
      items-center
      justify-center
      task-bg
      font-sans
      max-w-100
   
    ">
      <div class="bg-white rounded shadow p-6 m-4 w-full lg:max-w-lg">
        <div class="mb-4">
          <h1 class="fond-bold text-grey-900">Todo List</h1>
          <div class="flex mt-4">
            <input id="tasks" name="tasks" type="tasks" v-model="taskText" class="
              shadow
              appearance-none
              border
              rounded
              w-full
              py-2
              px-3
              mr-4
              text-cyan-900
            " placeholder="Add Todo" @change="createTask" />
            <button type="POST" @click="createTask" class="
              flex-no-shrink
              p-2
              border-2
              rounded
              font-extrabold
              text-teal
              border-teal
              hover:text-white hover:bg-sky-500
            ">
              &#43;
            </button>
          </div>
        </div>
        <TodoTask v-for="task in notCompleted" :key="id=task" :task="task" />
        <DoneTask v-for="task in completed" :key="id=task" :task="task" />
      </div>
    </div>
 
   
 
</template>

<script>
import NavBar from "../components/NavBar.vue";
import TodoTask from "../components/TodoTask.vue";
import DoneTask from "../components/DoneTask.vue";

import { useTaskStore } from "../store/task";
import { useUserStore } from "../store/user";
export default {
  components: { NavBar, TodoTask, DoneTask },

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

  async created() {
    await this.taskStore.fetchTasks(this.userStore.user.id);
  },

  methods: {
    async createTask() {
      console.log("estoy creando una tarea");

      await this.taskStore.createTask(this.taskText, this.userStore.user.id);
      this.taskText = "";
      this.$forceUpdate();
    },

  },
  computed: {
    completed() {
      return this.taskStore.completed;
    },

    notCompleted() {
      return this.taskStore.notCompleted;
    }
  },
};
</script>

<style>


h1 {
  font-weight: 600;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 40px;
}
</style>
