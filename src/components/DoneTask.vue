<template>
  <div class="flex mb-4 items-center">
      <p class="w-full line-through text-green-600">
        Submit Todo App Component to Tailwind Components
      </p>
      <button
        @click="undoTask"
        class="
          flex-no-shrink
          p-2
          ml-4
          mr-2
          border-2
          rounded
          hover:text-white
          text-gray-400
          border-gray-400
          hover:bg-gray-800
        "
      >
      &#11148;
      </button>
      <button
      @click="edit"
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
      &#128393;
      </button>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>