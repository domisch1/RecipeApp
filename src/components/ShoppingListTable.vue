<template>
  <div class="table w-full font-main">
    <div class="table-row-group">
      <div class="table-row bg-gray-800 font-semibold text-white">
        <div class="table-cell py-3 text-center">Ingredient</div>
        <div class="table-cell py-3 text-center">Amount</div>
        <div class="table-cell py-3 text-center">Checked</div>
      </div>
    </div>
    <slot name="shopping-row"> </slot>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
