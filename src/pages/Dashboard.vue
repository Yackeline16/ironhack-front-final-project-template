<template>
  <NavBar />
  <section>
    <header
      class="bg-white space-y-4 p-4 sm:px-8 sm:py-6 lg:p-4 xl:px-8 xl:py-6"
    >
      <div class="flex items-center justify-between">
        <h2 class="font-semibold text-slate-900">TASKS</h2>
        <a
          href="/new"
          class="
            hover:bg-blue-400
            group
            flex
            items-center
            rounded-md
            bg-blue-500
            text-white text-sm
            font-medium
            pl-2
            pr-3
            py-2
            shadow-sm
          "
        >
          <svg
            width="20"
            height="20"
            fill="currentColor"
            class="mr-2"
            aria-hidden="true"
          >
            <path
              d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
            />
          </svg>
          New
        </a>
      </div>
      <form class="group relative">
        <svg
          width="20"
          height="20"
          fill="currentColor"
          class="
            absolute
            left-3
            top-1/2
            -mt-2.5
            text-slate-400
            pointer-events-none
            group-focus-within:text-blue-500
          "
          aria-hidden="true"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
          />
        </svg>
        <input
          class="
            focus:ring-2 focus:ring-blue-500 focus:outline-none
            appearance-none
            w-full
            text-sm
            leading-6
            text-slate-900
            placeholder-slate-400
            rounded-md
            py-2
            pl-10
            ring-1 ring-slate-200
            shadow-sm
          "
          type="text"
          aria-label="Filter tasks"
          placeholder="Filter tasks..."
        />
      </form>
    </header>
    <ul
      class="
        bg-slate-50
        p-4
        sm:px-8 sm:pt-6 sm:pb-8
        lg:p-4
        xl:px-8 xl:pt-6 xl:pb-8
        grid grid-cols-1
        sm:grid-cols-2
        lg:grid-cols-1
        xl:grid-cols-2
        gap-4
        text-sm
        leading-6
      "
    >
      <li x-for="task in tasks">
        <div
          
          class="
            hover:bg-blue-500 hover:ring-blue-500 hover:shadow-md
            group
            rounded-md
            p-3
            bg-white
            ring-1 ring-slate-200
            shadow-sm
          "
        >
          <dl
            class="
              grid
              sm:block
              lg:grid
              xl:block
              grid-cols-2 grid-rows-2
              items-center
            "
          >
            <div>
              <dt class="sr-only">Title</dt>
              <dd class="group-hover:text-white font-semibold text-slate-900">
                
              </dd>
            </div>
            <div>
              <dt class="sr-only">Category</dt>
              <dd class="group-hover:text-blue-200"></dd>
            </div>
            <div
              class="col-start-2 row-start-1 row-end-3 sm:mt-4 lg:mt-0 xl:mt-4"
            >
           
            </div>
          </dl>
        </div>
      </li>
      <li class="flex">
        <input
          class="
            hover:border-blue-500
            hover:border-solid
            hover:bg-white
            hover:text-blue-500
            group
            w-full
            flex flex-col
            items-center
            justify-center
            rounded-md
            border-2 border-dashed border-slate-300
            text-sm
            leading-6
            text-slate-900
            font-medium
            py-3
          "
        >
          <svg
            class="group-hover:text-blue-500 mb-1 text-slate-400"
            width="20"
            height="20"
            fill="currentColor"
            aria-hidden="true"
          >
            <path
              d="M10 5a1 1 0 0 1 1 1v3h3a1 1 0 1 1 0 2h-3v3a1 1 0 1 1-2 0v-3H6a1 1 0 1 1 0-2h3V6a1 1 0 0 1 1-1Z"
            />
          </svg>
          New Task
        
      </li>
    </ul>
  </section>
  <footer
    class="
      p-4
      bg-white
      rounded-lg
      shadow
      md:flex md:items-center md:justify-center
       md:p-6
      dark:bg-gray-800
    "
  >
    <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400"
      >© 2022 <a href="#" class="hover:underline">HeroHack™</a>. All Rights
      Reserved.
    </span>
  </footer>
</template>

<script>
import NavBar from "../components/NavBar.vue";

export default {
  components: { NavBar },


}
</script>

<style>
</style>
