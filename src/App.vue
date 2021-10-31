<template>
  <router-view></router-view>
</template>

<script>
export default {};
</script>

<style>
/* STYLES FOR SIGNUP AND LOGIN */
.wrapper {
  @apply flex flex-col lg:flex-row p-0 lg:p-2 lg:h-screen;
}
.cover-image-container {
  @apply flex justify-center items-center h-64 lg:h-full bg-white rounded-lg lg:w-8/12;
}
.cover-image {
  @apply w-full h-full lg:rounded-lg;
}
.form-container {
  @apply flex justify-center px-8 lg:w-4/12 mb-8 lg:mb-0;
}
.form {
  @apply mt-10 lg:mt-24 w-full text-main font-main;
}
.form-caption {
  @apply text-2xl font-main font-semibold mb-3;
}
.divider {
  @apply h-px w-full bg-gray-100 mb-7;
}
.input-container {
  @apply w-full mb-6;
}
.input-container label {
  @apply text-sm mb-1;
}
.input-container input {
  @apply w-full text-sm py-3 px-2.5 border border-gray-200 rounded focus:ring-offset-2 focus:ring-offset-blue-700 transition-all duration-150;
}
.action-button {
  @apply text-lg font-semibold text-white py-3 w-full rounded bg-purple-600 hover:bg-purple-800 transition-all duration-150;
}
.subtext {
  @apply text-center text-sm mt-3;
}
.subtext-route {
  @apply text-sm text-main font-semibold;
}

/* COMPONENTS USED IN MANY PAGES */
.caption {
  @apply text-3xl font-main text-main mb-6;
}
.container-wrapper {
  @apply px-6 md:px-28 mt-32 flex flex-col;
}

/* COMPONENTS FOR CREATE-RECIPE */
.form-row {
  @apply flex flex-col md:flex-row justify-between;
}
.form-container-normal {
  @apply flex justify-between items-center w-full md:w-49 px-0;
}
.input-form {
  @apply w-full mb-6;
}
.input-form label {
  @apply text-sm mb-1;
}
.input-form input {
  @apply w-full text-sm py-3 px-2.5 border border-gray-200 rounded focus:ring-offset-2 focus:ring-offset-blue-700 transition-all duration-150;
}
.input-form select {
  @apply w-full text-sm py-3 px-2.5 border border-gray-200 rounded focus:ring-offset-2 focus:ring-offset-blue-700 transition-all duration-150;
}
.input-form textarea {
  @apply w-full text-sm h-32 py-3 px-2.5 border border-gray-200 rounded focus:ring-offset-2 focus:ring-offset-blue-700 transition-all duration-150 resize-none;
}
.action-button-primary {
  @apply text-lg font-semibold text-white py-3 w-full rounded bg-gray-600 hover:bg-gray-800 transition-all duration-150;
}

/* COMPONENTS FOR RECIPE-LIST */
.recipe {
  @apply relative flex flex-col px-2 py-4 h-[62px] md:h-[78px] md:px-4 md:py-6 mb-4 border border-gray-200 rounded-lg transition-all overflow-hidden duration-150;
}
.recipe-open {
  @apply h-80 overflow-scroll;
}
.recipe-header {
  @apply relative flex flex-row items-center;
}
.recipe-caption {
  @apply font-main text-main text-xl;
}
.recipe-icon {
  @apply absolute right-0 h-6 w-6 cursor-pointer transition-all duration-150;
}
.recipe-content {
  @apply relative flex flex-col mt-6;
}
.recipe-duration,
.recipe-category {
  @apply text-base font-main;
}
.recipe-category {
  @apply absolute right-0;
}
</style>
