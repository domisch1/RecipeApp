<template>
  <section id="shopping-list">
    <navbar></navbar>
    <section class="container-wrapper">
      <h2 class="caption">This is your shopping list</h2>
      <shopping-list-table>
        <template v-slot:shopping-row>
          <div
            class="table-row-group"
            v-for="(item, index) in shoppingList"
            :key="index"
            :class="{ 'checked-list': item.checked }"
          >
            <div class="table-row bg-gray-200">
              <div class="table-cell text-center py-3">
                {{ item.ingredient }}
              </div>
              <div class="table-cell text-center py-3">
                {{ item.amount }}
              </div>
              <div class="relative table-cell text-center py-3 align-middle">
                <input
                  type="checkbox"
                  class="absolute top-1/2 transform -translate-y-2/4 w-6 h-6"
                  name="checked"
                  id=""
                  v-model="item.checked"
                />
              </div>
            </div>
          </div>
        </template>
      </shopping-list-table>
    </section>
  </section>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import ShoppingListTable from "../components/ShoppingListTable.vue";

export default {
  components: {
    Navbar,
    ShoppingListTable,
  },
  data() {
    return {
      shoppingList: [
        {
          ingredient: "Bananas",
          amount: 4,
          checked: false,
        },
        {
          ingredient: "Apples",
          amount: 3,
          checked: false,
        },
        {
          ingredient: "Almond milk",
          amount: "500ml",
          checked: false,
        },
      ],
    };
  },
};
</script>

<style>
.checked-list {
  @apply opacity-50;
}
</style>
