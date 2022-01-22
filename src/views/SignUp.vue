<template>
  <section id="sign-up" class="wrapper">
    <section id="cover-image" class="cover-image-container"></section>
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
          <p class="error-msg" v-if="formValidation.wrongEmail">
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
          <p class="error-msg" v-if="formValidation.wrongPassword">
            Your password must be at least 6 characters long.
          </p>
        </div>
        <div class="input-container">
          <label for="confirm-password">Confirm Password</label>
          <input
            type="password"
            placeholder="***************"
            id="confirm-password"
            autocomplete="off"
            v-model="this.user.confirmPassword"
          />
          <p class="error-msg" v-if="formValidation.wrongConfirmPassword">
            Must be the same value as password.
          </p>
        </div>
        <button class="action-button" @click.prevent="checkForm">
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
        confirmPassword: "",
      },
      formValidation: {
        wrongEmail: false,
        wrongPassword: false,
        wrongConfirmPassword: false,
      },
    };
  },
  methods: {
    sendSignUp() {
      this.$store.dispatch("signUp", this.user);
      this.user = {
        email: "",
        password: "",
        confirmPassword: "",
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
      } else if (this.user.confirmPassword !== this.user.password) {
        this.formValidation.wrongConfirmPassword = true;
      } else {
        this.sendSignUp();
      }
    },
  },
};
</script>

<style></style>
