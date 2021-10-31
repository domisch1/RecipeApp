<template>
  <section id="draft">
    <navbar></navbar>
    <section class="container-wrapper">
      <h2 class="caption">Draft your week</h2>
      <div class="flex flex-col sm:items-end sm:flex-row mb-6">
        <div class="">
          <span class="font-main text-base">Start date</span>
          <datepicker
            v-model="dateStart"
            class="
              py-2
              px-3
              border border-gray-200
              rounded
              cursor-pointer
              w-full
              sm:w-auto
            "
          ></datepicker>
        </div>
        <div class="sm:mx-2 my-4 sm:my-0">
          <span class="font-main text-base">End date</span>
          <datepicker
            v-model="dateEnd"
            :lower-limit="dateStart"
            class="
              py-2
              px-3
              border border-gray-200
              rounded
              cursor-pointer
              w-full
              sm:w-auto
            "
          ></datepicker>
        </div>
        <div class="sm:w-40">
          <button
            class="
              h-[42px]
              font-main
              text-base
              font-semibold
              bg-green-600
              hover:bg-green-700
              transition-all
              duration-150
              cursor-pointer
              w-full
              rounded
              text-white
            "
          >
            Draft
          </button>
        </div>
      </div>
      <div v-for="(recipe, index) in recipes" :key="index">
        <span class="font-main font-semibold text-lg">Monday</span>
        <recipe>
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
            <div class="table w-full font-main mb-4">
              <div class="table-row-group">
                <div class="table-row bg-gray-800">
                  <div
                    class="table-cell text-center font-semibold text-white py-2"
                  >
                    Ingredient
                  </div>
                  <div
                    class="table-cell text-center font-semibold text-white py-2"
                  >
                    Amount
                  </div>
                </div>
              </div>
              <div
                class="table-row-group"
                v-for="(ingredient, index) in recipe.ingredients"
                :key="index"
              >
                <div class="table-row bg-gray-100">
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
      </div>
    </section>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Recipe from "../components/Recipe.vue";
import Datepicker from "vue3-datepicker";

export default {
  components: {
    Navbar,
    Recipe,
    Datepicker,
  },
  data() {
    return {
      dateStart: new Date(),
      dateEnd: new Date(),
      recipes: [
        {
          name: "Chicken with rice",
          duration: "45 minutes",
          category: "Omnivor",
          ingredients: [
            {
              ingredient: "Chicken filet",
              amount: 3,
            },
            {
              ingredient: "Rice",
              amount: "300g",
            },
            {
              ingredient: "Water",
              amount: "500ml",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.",
        },
        {
          name: "Smoothie bowl",
          duration: "15 minutes",
          category: "Vegan",
          ingredients: [
            {
              ingredient: "Bananas",
              amount: 2,
            },
            {
              ingredient: "Apples",
              amount: 1,
            },
            {
              ingredient: "Orange",
              amount: 1,
            },
            {
              ingredient: "Almond milk",
              amount: "200ml",
            },
            {
              ingredient: "Chia seeds",
              amount: "50g",
            },
          ],
          description:
            "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore",
        },
      ],
    };
  },
};
</script>

<style></style>
