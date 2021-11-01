<template>
  <section id="login" class="wrapper">
    <section id="cover-image" class="cover-image-container">
      <img
        src="../assets/SimpleShiny.svg"
        alt="Background"
        class="cover-image"
      />
    </section>
    <section id="login-form" class="form-container">
      <form action="" class="form">
        <h2 class="form-caption">Login to your Account.</h2>
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
        <button class="action-button" @click.prevent="sendLogin">Login</button>
        <p class="subtext">
          Don' have an account?
          <router-link to="signup" class="subtext-route">Sign up</router-link>
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
    sendLogin() {
      this.$store.dispatch("login", this.user);
      this.user = {
        email: "",
        password: "",
      };
    },
  },
};
</script>

<style></style>
