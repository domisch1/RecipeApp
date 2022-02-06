<template>
  <section id="recipe-list">
    <navbar></navbar>
    <section class="container-wrapper">
      <h2 class="caption">These are your Recipes.</h2>
      <h3
        class="text-xl font-main"
        v-if="this.$store.state.recipes.length === 0"
      >
        Seems like you don't have any recipes added yet. Go and add some!
      </h3>
      <recipe v-for="(recipe, index) in this.$store.state.recipes" :key="index">
        <template v-slot:recipe-name>
          {{ recipe.name }}
        </template>
        <template v-slot:recipe-duration>
          {{ recipe.duration }}
        </template>
        <template v-slot:recipe-category>
          {{ recipe.category }}
        </template>
        <template v-slot:table-container>
          <div class="table w-full font-main mb-4 text-black">
            <div class="table-row-group bg-gray-300">
              <div class="table-row">
                <div class="table-cell text-center font-semibold border-b py-2">
                  Ingredient
                </div>
                <div class="table-cell text-center font-semibold py-2">
                  Amount
                </div>
              </div>
            </div>
            <div
              class="table-row-group bg-gray-100"
              v-for="(ingredient, index) in recipe.list"
              :key="index"
            >
              <div class="table-row">
                <div class="table-cell text-center py-2">
                  {{ ingredient.ingredient }}
                </div>
                <div class="table-cell text-center py-2">
                  {{ ingredient.amount }}
                </div>
              </div>
            </div>
          </div>
        </template>
        <template v-slot:recipe-description>
          {{ recipe.description }}
        </template>
      </recipe>
    </section>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Recipe from "../components/Recipe.vue";

export default {
  data() {
    return {
      recipes: [],
    };
  },
  components: {
    Navbar,
    Recipe,
  },
};
</script>

<style></style>
