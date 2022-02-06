<template>
  <section id="landing-page">
    <section
      id="cover"
      class="flex flex-col justify-center items-center w-screen h-screen px-8 py-16"
    >
      <h1 class="font-main text-3xl font-semibold mb-4 text-center">
        Save your best Recipes!
      </h1>
      <p class="font-main text-base text-center w-auto sm:w-96 mb-6">
        A place to store all of your Recipes.
      </p>
      <router-link
        to="/signup"
        class="py-3 font-main font-semibold w-full sm:w-80 rounded text-base bg-black text-white hover:bg-gray-800 transition-all duration-150 text-center"
      >
        Register now
      </router-link>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
