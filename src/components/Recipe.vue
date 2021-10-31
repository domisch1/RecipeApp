<template>
  <div class="recipe" :class="{ 'recipe-open': this.toggleRecipe }">
    <div class="recipe-header">
      <h3 class="recipe-caption"><slot name="recipe-name"></slot></h3>
      <img
        src="../assets/Icons/ShevronDown.svg"
        alt="Arrow"
        class="recipe-icon"
        @click="openRecipe"
        :class="{ 'turn-arrow': this.toggleRecipe }"
      />
    </div>
    <div class="recipe-content">
      <div class="relative mb-3">
        <span class="recipe-duration"
          ><slot name="recipe-duration"></slot
        ></span>
        <span class="recipe-category"
          ><slot name="recipe-category"></slot
        ></span>
      </div>
      <slot name="table-container"></slot>
      <div class="relative">
        <p class="font-main font-semibold mb-2">Description</p>
        <p class="font-main"><slot name="recipe-description"></slot></p>
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

<style>
.turn-arrow {
  @apply transform rotate-180;
}
</style>
