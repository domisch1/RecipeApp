<template>
  <section id="landing-page">
    <section
      id="cover"
      class="
        flex flex-col
        justify-center
        items-center
        w-screen
        h-96
        bg-gray-200
        px-8
        py-16
      "
    >
      <h1 class="font-main text-3xl font-semibold mb-8 text-center">
        Make your life easyer by using this amazing App!
      </h1>
      <p class="font-main text-base text-center w-auto sm:w-96 mb-10">
        A must have for everyone who want’s to cook by their own and save lots
        of time
      </p>
      <router-link
        to="/signup"
        class="
          py-3
          font-main font-semibold
          w-full
          sm:w-80
          rounded
          text-base
          bg-black
          text-white
          hover:bg-gray-800
          transition-all
          duration-150
          text-center
        "
      >
        Register now
      </router-link>
    </section>
    <section
      id="features"
      class="
        flex flex-col
        sm:flex-row
        justify-around
        mx-8
        my-10
        sm:mx-32
        flex-wrap
      "
    >
      <div class="feature-container">
        <img src="../assets/Icons/Clock.svg" alt="Clock" class="feature-img" />
        <p class="feature-text">
          A time saving experience. With an awesome workflow and a great idea
          you save an amazing amount of time!
        </p>
      </div>
      <div class="feature-container">
        <img src="../assets/Icons/Star.svg" alt="Star" class="feature-img" />
        <p class="feature-text">
          A time saving experience. With an awesome workflow and a great idea
          you save an amazing amount of time!
        </p>
      </div>
      <div class="feature-container">
        <img
          src="../assets/Icons/ShoppingCart.svg"
          alt="Shopping Cart"
          class="feature-img"
        />
        <p class="feature-text">
          A time saving experience. With an awesome workflow and a great idea
          you save an amazing amount of time!
        </p>
      </div>
    </section>
  </section>
</template>

<script>
export default {};
</script>

<style>
.feature-container {
  @apply flex justify-center items-center border py-8 px-10 rounded-lg flex-col mb-8 mx-4;
}
.feature-img {
  @apply h-20 w-20 mb-6;
}
.feature-text {
  @apply w-auto sm:w-60 text-center text-base;
}
</style>
