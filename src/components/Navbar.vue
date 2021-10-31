<template>
  <header
    class="navbar-container z-50"
    :class="{ 'mobile-navbar': this.toggle }"
  >
    <div class="hamburger" @click="toggleHamburger">
      <span
        id="first"
        class="hamburger-line"
        :class="{ first: this.toggle }"
      ></span>
      <span
        id="second"
        class="hamburger-line"
        :class="{ 'hide-element': this.toggle }"
      ></span>
      <span
        id="third"
        class="hamburger-line"
        :class="{ third: this.toggle }"
      ></span>
    </div>
    <nav class="navbar" :class="{ 'hide-element': !this.toggle }">
      <router-link to="create" class="nav-link">Create</router-link>
      <router-link to="recipe-list" class="nav-link">Recipe List</router-link>
      <router-link to="draft" class="nav-link">Draft</router-link>
      <router-link to="shopping-list" class="nav-link"
        >Shopping List</router-link
      >
    </nav>
    <button
      class="logout"
      :class="{ 'hide-element': !this.toggle }"
      v-if="true"
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
  },
};
</script>

<style>
.navbar-container {
  @apply fixed top-0 left-0 flex justify-center items-center md:justify-start w-screen h-20 bg-gray-200 px-6 md:px-28 transition-all duration-150;
}
.mobile-navbar {
  @apply h-screen;
}
.hamburger {
  @apply absolute top-8 right-6 flex items-end flex-col w-10 md:hidden cursor-pointer;
}
.hamburger-line {
  @apply block h-1 w-full rounded bg-black transition duration-150;
}
#second {
  @apply my-1 w-10;
}
.first {
  @apply transform -rotate-45 origin-top-right -translate-y-2 -translate-x-1;
}
.third {
  @apply transform rotate-45 origin-top-right translate-y-1;
}
.navbar {
  @apply flex flex-col md:flex-row items-center transition-all duration-150;
}
.nav-link {
  @apply mb-8 md:mb-0 md:mr-8 text-main font-main text-lg font-semibold;
}
.hide-element {
  @apply opacity-0 z-0 md:opacity-100 md:z-10 transform -translate-y-full md:transform-none;
}
.logout {
  @apply absolute bottom-28 md:bottom-auto md:right-28 md:py-2 text-lg font-semibold text-white font-main py-3 px-20 md:px-8 rounded bg-red-500 hover:bg-red-700 transition-all duration-150;
}
</style>
