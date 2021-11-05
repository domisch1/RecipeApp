<template>
  <section id="create-recipe">
    <navbar></navbar>
    <section class="container-wrapper">
      <h2 class="caption">Create your Recipe.</h2>
      <div class="form-row">
        <div class="form-container-normal">
          <div class="input-form">
            <label for="recipe-name">Recipe Name</label>
            <input
              type="text"
              id="recipe-name"
              placeholder="Hamburger"
              v-model="recipe.name"
            />
          </div>
        </div>
        <div class="form-container-normal">
          <div class="input-form w-49">
            <label for="category">Category</label>
            <select name="category" id="category" v-model="recipe.category">
              <option value="" selected>Please choose</option>
              <option value="vegan">Vegan</option>
              <option value="vegeterian">Vegeterian</option>
              <option value="omnivor">Omnivor</option>
            </select>
          </div>
          <div class="input-form w-49">
            <label for="duration">Duration</label>
            <input
              type="text"
              id="duration"
              placeholder="45 minutes"
              v-model="recipe.duration"
            />
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-container-normal">
          <div class="input-form">
            <label for="ingredient">Ingredient</label>
            <input
              type="text"
              id="ingredient"
              placeholder="Patties"
              v-model="this.ingredient"
            />
          </div>
        </div>
        <div class="form-container-normal">
          <div class="input-form w-49">
            <label for="amount">Amount</label>
            <input
              type="text"
              name="amount"
              id="amount"
              placeholder="3"
              v-model="this.amount"
            />
          </div>
          <button
            style="height: 46px"
            class="
              inline-block
              text-white text-base
              rounded
              w-49
              font-semibold
              bg-green-500
              hover:bg-green-700
              transition-all
              duration-150
            "
            @click.prevent="addIngredient"
          >
            Add
          </button>
        </div>
      </div>
      <div class="form-row">
        <div class="form-container-normal items-start">
          <div class="table w-full mb-6">
            <div class="table-row-group text-white font-semibold bg-gray-800">
              <div class="table-row text-center">
                <div class="table-cell py-3">Ingredients</div>
                <div class="table-cell py-3">Amount</div>
              </div>
            </div>
            <div class="table-row-group">
              <div
                class="table-row text-center bg-gray-100"
                v-for="(ingredients, index) in recipe.list"
                :key="index"
              >
                <div class="table-cell py-3">{{ ingredients.ingredient }}</div>
                <div class="table-cell py-3">{{ ingredients.amount }}</div>
              </div>
            </div>
          </div>
        </div>
        <div class="form-container-normal items-start">
          <div class="input-form">
            <label for="description">Description</label>
            <textarea
              name="description"
              id="description"
              v-model="recipe.description"
            ></textarea>
          </div>
        </div>
      </div>
      <div class="form-row mb-10">
        <button class="action-button-primary" @click.prevent="sendRecipe">
          Save Recipe
        </button>
      </div>
    </section>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  components: {
    Navbar,
  },
  data() {
    return {
      recipe: {
        name: "",
        category: "",
        duration: "",
        list: [],
        description: "",
      },
      ingredient: "",
      amount: "",
    };
  },
  methods: {
    addIngredient() {
      this.recipe.list.push({
        ingredient: this.ingredient,
        amount: this.amount,
      });
      this.ingredient = "";
      this.amount = "";
    },
    sendRecipe() {
      this.$store.dispatch("createRecipe", this.recipe);
      this.recipe = {
        name: "",
        category: "",
        duration: "",
        list: [],
        description: "",
      };
    },
  },
};
</script>

<style></style>
