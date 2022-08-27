<template>
    <div class="task">
        <div class="task-title "></div>
        <div clas="task-content"></div>
        <div class="task-date"></div>
    </div>
</template>

<script>
import { useTaskStore } from '../store/task';

export default {
    setup() {
        const tasks = useTaskStore();
        return
    },
    mounted() {

    }
}
</script>

<style>
</style>