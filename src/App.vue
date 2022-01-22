<template>
  <router-view></router-view>
</template>

<script>
export default {
  created() {
    this.$store.dispatch("watchAuth");
  },
};
</script>

<style></style>
