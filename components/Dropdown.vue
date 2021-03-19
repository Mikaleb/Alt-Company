<template>
  <div class="relative">
    <!-- Dropdown toggle button -->
    <button
      @click="dropdownOpen = !dropdownOpen"
      class="relative z-10 block p-2 bg-white rounded-md dark:bg-gray-800 focus:outline-none"
    >
      <svg
        class="w-5 h-5 text-gray-800 dark:text-white"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </button>

    <!-- Dropdown menu -->
    <transition
      enter-active-class="transition duration-150 ease-out transform"
      enter-class="scale-95 opacity-0"
      enter-to-class="scale-100 opacity-100"
      leave-active-class="transition duration-150 ease-in transform"
      leave-class="scale-100 opacity-100"
      leave-to-class="scale-95 opacity-0"
    >
      <div
        v-show="dropdownOpen"
        class="absolute right-0 z-20 w-48 p-2 mt-2 bg-white rounded-md shadow-xl dark:bg-gray-800"
      >
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false,
    }
  },
}
</script>