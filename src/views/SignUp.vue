<template>
  <section id="sign-up" class="wrapper">
    <section id="cover-image" class="cover-image-container">
      <img
        src="../assets/SimpleShiny.svg"
        alt="Background"
        class="cover-image"
      />
    </section>
    <section id="sign-up-form" class="form-container">
      <form action="" class="form">
        <h2 class="form-caption">Create your Account.</h2>
        <hr class="divider" />
        <div class="input-container">
          <label for="email">E-Mail</label>
          <input
            type="text"
            placeholder="test@test.com"
            id="email"
            autocomplete="off"
            v-model="user.email"
          />
        </div>
        <div class="input-container">
          <label for="password">Password</label>
          <input
            type="password"
            placeholder="***************"
            id="password"
            autocomplete="off"
            v-model="user.password"
          />
        </div>
        <div class="input-container">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            placeholder="***************"
            id="confirm-password"
            autocomplete="off"
          />
        </div>
        <button class="action-button" @click.prevent="sendSignUp">
          Sign up
        </button>
        <p class="subtext">
          You have an account?
          <router-link to="login" class="subtext-route">Login</router-link>
        </p>
      </form>
    </section>
  </section>
</template>

<script>
export default {
  data() {
    return {
      user: {
        email: "",
        password: "",
      },
    };
  },
  methods: {
    sendSignUp() {
      this.$store.dispatch("signUp", this.user);
      this.user = {
        email: "",
        password: "",
      };
    },
  },
};
</script>

<style></style>
