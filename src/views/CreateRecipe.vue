<template>
  <section>
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
              autocomplete="off"
              @blur="checkRecipeName"
              :class="{ falseValidation: recipeValidation.name }"
            />
            <p class="validation" v-if="recipeValidation.name">
              Mandatory field!
            </p>
          </div>
        </div>
        <div class="form-container-normal">
          <div class="input-form w-49">
            <label for="category">Category</label>
            <select
              name="category"
              id="category"
              class="appearance-none"
              v-model="recipe.category"
              @blur="checkRecipeCategory"
              :class="{ falseValidation: recipeValidation.category }"
            >
              <option value="" selected>Please choose</option>
              <option value="vegan">Vegan</option>
              <option value="vegeterian">Vegeterian</option>
              <option value="omnivor">Omnivor</option>
            </select>
            <p class="validation" v-if="recipeValidation.category">
              Mandatory field!
            </p>
          </div>
          <div class="input-form w-49">
            <label for="duration">Duration</label>
            <input
              type="text"
              id="duration"
              placeholder="45 minutes"
              v-model="recipe.duration"
              autocomplete="off"
              @blur="checkRecipeDuration"
              :class="{ falseValidation: recipeValidation.duration }"
            />
            <p class="validation" v-if="recipeValidation.duration">
              Mandatory field!
            </p>
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
              v-model="ingredient"
              autocomplete="off"
              :class="{ falseValidation: recipeValidation.ingredient }"
            />
            <p class="validation" v-if="recipeValidation.ingredient">
              Mandatory field!
            </p>
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
              v-model="amount"
              autocomplete="off"
              :class="{ falseValidation: recipeValidation.amount }"
              @keydown.enter="checkRecipeIngredient"
            />
            <p class="validation" v-if="recipeValidation.amount">
              Mandatory field!
            </p>
          </div>
          <button
            style="height: 46px"
            class="inline-block text-white text-base rounded w-49 font-semibold bg-green-500 hover:bg-green-700 transition-all duration-150"
            @click.prevent="checkRecipeIngredient"
          >
            Add
          </button>
        </div>
      </div>
      <div class="form-row">
        <div class="w-full">
          <div class="input-form">
            <label for="description">Description</label>
            <textarea
              name="description"
              id="description"
              v-model="recipe.description"
              @blur="checkRecipeDescription"
              :class="{ falseValidation: recipeValidation.description }"
            ></textarea>
            <p class="validation" v-if="recipeValidation.description">
              Mandatory field!
            </p>
          </div>
        </div>
      </div>
      <div class="form-row mb-10 mt-2">
        <button class="action-button-primary" @click.prevent="sendRecipe">
          Save Recipe
        </button>
      </div>
      <div class="form-row" v-if="recipe.list.length > 0">
        <div class="w-full">
          <div class="table w-full mb-6">
            <div class="table-row-group font-semibold gradient-dark">
              <div class="table-row text-center">
                <div class="table-cell py-3">Ingredients</div>
                <div class="table-cell py-3">Amount</div>
              </div>
            </div>
            <div class="table-row-group">
              <div
                class="table-row text-center gradient-light"
                v-for="(ingredients, index) in recipe.list"
                :key="index"
              >
                <div class="table-cell py-3">{{ ingredients.ingredient }}</div>
                <div class="table-cell py-3">{{ ingredients.amount }}</div>
              </div>
            </div>
          </div>
        </div>
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
      recipeValidation: {
        name: false,
        category: false,
        duration: false,
        ingredient: false,
        amount: false,
        description: false,
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
    checkRecipeName() {
      if (this.recipe.name.length === 0) {
        this.recipeValidation.name = true;
      } else {
        this.recipeValidation.name = false;
      }
    },
    checkRecipeCategory() {
      if (this.recipe.category.length === 0) {
        this.recipeValidation.category = true;
      } else {
        this.recipeValidation.category = false;
      }
    },
    checkRecipeDuration() {
      if (this.recipe.duration.length === 0) {
        this.recipeValidation.duration = true;
      } else {
        this.recipeValidation.duration = false;
      }
    },
    checkRecipeIngredient() {
      if (this.ingredient.length === 0) {
        this.recipeValidation.ingredient = true;
      } else {
        this.recipeValidation.ingredient = false;
      }
      if (this.amount.length === 0) {
        this.recipeValidation.amount = true;
      } else {
        this.recipeValidation.amount = false;
      }
      if (this.ingredient.length > 0 && this.amount.length > 0) {
        this.addIngredient();
      }
    },
    checkRecipeDescription() {
      if (this.recipe.description.length === 0) {
        this.recipeValidation.description = true;
      } else {
        this.recipeValidation.description = false;
      }
    },
  },
};
</script>

<style></style>
