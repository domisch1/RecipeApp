<template>
  <div class="recipe" :class="{ 'recipe-open': toggleRecipe }">
    <div
      class="relative flex flex-row items-center pb-6 border-b border-gray-500"
    >
      <h3 class="text-xl">
        <slot name="recipe-name"></slot>
      </h3>
      <img
        src="../assets/Icons/ShevronDown.svg"
        alt="Arrow"
        class="absolute right-0 h-6 w-6 cursor-pointer transition-all duration-150"
        @click="openRecipe"
        :class="{ 'turn-arrow': toggleRecipe }"
      />
    </div>
    <div class="relative flex flex-col mt-4">
      <div class="relative mb-3 flex justify-between w-full">
        <span><slot name="recipe-duration"></slot></span>
        <span><slot name="recipe-category"></slot></span>
      </div>
      <slot name="table-container"></slot>
      <div class="relative">
        <p class="font-semibold mb-2">Description</p>
        <p><slot name="recipe-description"></slot></p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      toggleRecipe: false,
    };
  },
  methods: {
    openRecipe() {
      this.toggleRecipe = !this.toggleRecipe;
    },
  },
};
</script>

<style></style>
