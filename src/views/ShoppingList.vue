<template>
  <section id="shopping-list">
    <navbar></navbar>
    <section class="container-wrapper">
      <h2 class="caption">This is your shopping list</h2>
      <h3
        class="text-xl font-main"
        v-if="this.$store.state.draftedRecipes.length === 0"
      >
        You need to draft recipes before you can see your shopping list.
      </h3>
      <shopping-list-table v-if="this.$store.state.draftedRecipes.length > 0">
        <template v-slot:shopping-row>
          <div
            class="table-row-group"
            v-for="(item, index) in this.$store.state.shoppingList"
            :key="index"
            :class="{ 'opacity-50': item.checked }"
          >
            <div class="table-row gradient-light">
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
    return {};
  },
};
</script>

<style></style>
