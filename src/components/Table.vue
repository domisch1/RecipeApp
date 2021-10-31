<template>
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
        v-for="(ingredients, index) in recipe"
        :key="index"
      >
        <div class="table-cell py-3">{{ ingredients.ingredient }}</div>
        <div class="table-cell py-3">{{ ingredients.amount }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      recipe: [
        {
          ingredient: "Patties",
          amount: 4,
        },
        {
          ingredient: "Tomatos",
          amount: 3,
        },
        {
          ingredient: "BBQ",
          amount: 5,
        },
      ],
    };
  },
};
</script>

<style></style>
