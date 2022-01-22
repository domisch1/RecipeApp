<template>
  <header
    class="fixed top-0 left-0 flex justify-center items-center md:justify-start w-screen h-20 px-6 md:px-28 transition-all duration-150 gradient-dark z-50"
    :class="{ 'h-screen': toggle }"
  >
    <div
      class="absolute top-8 right-6 flex items-end flex-col w-10 md:hidden cursor-pointer"
      @click="toggleHamburger"
    >
      <span id="first" class="hamburger-line" :class="{ first: toggle }"></span>
      <span
        id="second"
        class="hamburger-line my-1 w-10"
        :class="{ 'hide-element': toggle }"
      ></span>
      <span id="third" class="hamburger-line" :class="{ third: toggle }"></span>
    </div>
    <nav
      class="flex flex-col md:flex-row items-center transition-all duration-150"
      :class="{ 'hide-element': !toggle }"
    >
      <router-link to="create" class="nav-link">Create</router-link>
      <router-link to="recipe-list" class="nav-link">Recipe List</router-link>
      <router-link to="draft" class="nav-link">Draft</router-link>
      <router-link to="shopping-list" class="nav-link"
        >Shopping List</router-link
      >
    </nav>
    <button
      class="absolute bottom-28 md:bottom-auto md:right-28 md:py-2 text-lg font-semibold text-white font-main py-3 px-20 md:px-8 rounded bg-red-500 hover:bg-red-700 transition-all duration-150"
      :class="{ 'hide-element': !toggle }"
      v-if="true"
      @click.prevent="sendSignOut"
    >
      Logout
    </button>
  </header>
</template>

<script>
export default {
  data() {
    return {
      toggle: false,
    };
  },
  methods: {
    toggleHamburger() {
      this.toggle = !this.toggle;
    },
    sendSignOut() {
      this.$store.dispatch("signOut");
    },
  },
};
</script>

<style></style>
