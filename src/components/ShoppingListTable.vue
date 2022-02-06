<template>
  <div class="table w-full font-main">
    <div class="table-row-group">
      <div class="table-row font-semibold bg-gray-300">
        <div class="table-cell-centered">Ingredient</div>
        <div class="table-cell-centered">Amount</div>
        <div class="table-cell-centered">Checked</div>
      </div>
    </div>
    <slot name="shopping-row"> </slot>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
