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
          <p
            class="text-sm text-red-700 mt-2 font-main"
            v-if="this.formValidation.wrongEmail"
          >
            Please enter a valid E-Mail adress.
          </p>
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
          <p
            class="text-sm text-red-700 mt-2 font-main"
            v-if="this.formValidation.wrongPassword"
          >
            Your password must be at least 6 characters long.
          </p>
        </div>
        <button class="action-button" @click.prevent="checkForm">Login</button>
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
      formValidation: {
        wrongEmail: false,
        wrongPassword: false,
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
    checkForm() {
      this.formValidation = {
        wrongEmail: false,
        wrongPassword: false,
        wrongConfirmPassword: false,
      };
      if (!this.user.email.includes("@")) {
        this.formValidation.wrongEmail = true;
        console.log("Email");
      } else if (this.user.password < 6) {
        this.formValidation.wrongPassword = true;
        console.log("Pass");
      } else {
        this.sendLogin();
      }
    },
  },
};
</script>

<style></style>
