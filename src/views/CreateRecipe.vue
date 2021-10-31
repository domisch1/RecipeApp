<template>
  <section id="create-recipe">
    <navbar></navbar>
    <section class="container-wrapper">
      <h2 class="caption">Create your Recipe.</h2>
      <div class="form-row">
        <div class="form-container-normal">
          <div class="input-form">
            <label for="recipe-name">Recipe Name</label>
            <input type="text" id="recipe-name" placeholder="Hamburger" />
          </div>
        </div>
        <div class="form-container-normal">
          <div class="input-form w-49">
            <label for="category">Category</label>
            <select name="category" id="category">
              <option value="vegan">Vegan</option>
              <option value="vegeterian">Vegeterian</option>
              <option value="omnivor">Omnivor</option>
            </select>
          </div>
          <div class="input-form w-49">
            <label for="duration">Duration</label>
            <input type="text" id="duration" placeholder="45 minutes" />
          </div>
        </div>
      </div>
      <div class="form-row">
        <div class="form-container-normal">
          <div class="input-form">
            <label for="ingredient">Ingredient</label>
            <input type="text" id="ingredient" placeholder="Patties" />
          </div>
        </div>
        <div class="form-container-normal">
          <div class="input-form w-49">
            <label for="amount">Amount</label>
            <input type="text" name="amount" id="amount" placeholder="3" />
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
          >
            Add
          </button>
        </div>
      </div>
      <div class="form-row">
        <div class="form-container-normal items-start">
          <Table></Table>
        </div>
        <div class="form-container-normal items-start">
          <div class="input-form">
            <label for="description">Description</label>
            <textarea name="description" id="description"></textarea>
          </div>
        </div>
      </div>
      <div class="form-row mb-10">
        <button class="action-button-primary">Save Recipe</button>
      </div>
    </section>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Table from "../components/Table.vue";

export default {
  components: {
    Navbar,
    Table,
  },
};
</script>

<style></style>
